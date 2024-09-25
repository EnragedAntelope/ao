# Copyright (c) Meta Platforms, Inc. and affiliates.
# All rights reserved.

# This source code is licensed under the license found in the
# LICENSE file in the root directory of this source tree.

from typing import Any

import torch
import torch.nn.functional as F

from torchao.quantization.unified import TwoStepQuantizer
from torchao.quantization.utils import get_group_qparams_symmetric
from torchao.quantization.quant_api import (
    _replace_with_custom_fn_if_matches_filter,
)
from .utils import (
    _fake_quantize_per_channel_group,
    _get_qmin_qmax,
)


# ======================================
# |   Embedding int4 weight-only QAT   |
# ======================================

class Int4WeightOnlyEmbeddingQATQuantizer(TwoStepQuantizer):
    """
    Quantizer for performing QAT on a model, where embedding layers have
    int4 fake quantized grouped per channel weights.
    """

    def __init__(
        self,
        group_size: int = 256,
        scale_precision: torch.dtype = torch.float32,
        zero_point_precision: torch.dtype = torch.int32,
    ) -> None:
        super().__init__()
        self.group_size: int = group_size
        self.scale_precision: torch.dtype = scale_precision
        self.zero_point_precision: torch.dtype = zero_point_precision,

    def prepare(
        self,
        model: torch.nn.Module,
        *args: Any,
        **kwargs: Any
    ) -> torch.nn.Module:
        """
        Swap `nn.Embedding` modules with `Int4WeightOnlyQATEmbedding`.
        """
        def filter_fn(child: torch.nn.Module, cur_fqn:str) -> bool:
            return isinstance(child, nn.Embedding)

        def replacement_fn(child: torch.nn.Module) -> torch.nn.Module:
            new_embedding = Int4WeightOnlyQATEmbedding(
                group_size=self.group_size,

                # other nn.Embedding args
                num_embeddings=child.num_embeddings,
                embedding_dim=child.embedding_dim,
                padding_idx=child.padding_idx,
                max_norm=child.max_norm,
                norm_type=child.norm_type,
                scale_grad_by_freq=child.scale_grad_by_freq,
                sparse=child.sparse,
                device=child.weight.device,
            )
            # In distributed training, the model may be instantiated
            # on the meta device, in which case there is no need to
            # copy the weights, and doing so will result in an error
            if child.weight.device != torch.device("meta"):
                new_embedding.weight = child.weight
            return new_embedding

        _replace_with_custom_fn_if_matches_filter(model, replacement_fn, filter_fn)
        return model

    def convert(
        self,
        model: torch.nn.Module,
        *args: Any,
        **kwargs: Any
    ) -> torch.nn.Module:
        """
        Swap `Int4WeightOnlyQATEmbedding` with `Int4WeightOnlyEmbedding`
        """
        # TODO: implement this
        print("Warning: int4 weight-only embedding convert flow not implemented yet")
        return model


class Int4WeightOnlyQATEmbedding(torch.nn.Embedding):
    """
    This module implements a embedding layer with int4 fake quantized
    grouped per channel weights.

    args:
        group_size: the number of elements in each quantized group for weights
        scale_precision: precision of per group scales
        zero_point_precision: precision of per group zero points
    """

    def __init__(
        self, 
        group_size: int = 32, 
        scale_precision: torch.dtype = torch.float32,
        zero_point_precision: torch.dtype = torch.int32,
        *args, 
        **kwargs,
    ):
        super().__init__(*args, **kwargs)
        self.bit_width = 4
        self.group_size = group_size
        self.scale_precision = scale_precision
        self.zero_point_precision = zero_point_precision
        self._fake_quant_enabled = True
    
    def forward(self, x):
        weight = self.weight

        if self._fake_quant_enabled:
            (weight_scales, weight_zp) = get_group_qparams_symmetric(
                self.weight, self.bit_width, self.group_size, self.scale_precision,
            )
            # TODO: pass zp dtype to `get_group_qparams_symmetric` instead
            weight_zp = weight_zp.to(self.zero_point_precision)
            (weight_qmin, weight_qmax) = _get_qmin_qmax(self.bit_width)
            w_fq = _fake_quantize_per_channel_group(
                self.weight,
                weight_scales,
                weight_zp,
                weight_qmin,
                weight_qmax,
                self.group_size,
            )
        else:
            w_fq = self.weight

        return F.embedding(
            x, w_fq, self.padding_idx, self.max_norm,
            self.norm_type, self.scale_grad_by_freq, self.sparse,
        )

    def enable_fake_quant(self, enabled: bool = True):
        self._fake_quant_enabled = enabled

    def disable_fake_quant(self):
        self.enable_fake_quant(False)


class Int4WeightOnlyEmbedding(torch.nn.Embedding):
    """
    This module implements a embedding layer with int4 quantized
    grouped per channel weights.
    """
    pass
