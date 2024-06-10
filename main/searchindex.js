Search.setIndex({"docnames": ["api_ref_dtypes", "api_ref_intro", "api_ref_kernel", "api_ref_quantization", "api_ref_sparsity", "dtypes", "generated/torchao.dtypes.UInt4Tensor", "generated/torchao.dtypes.to_nf4", "generated/torchao.quantization.Int4WeightOnlyGPTQQuantizer", "generated/torchao.quantization.Int4WeightOnlyQuantizer", "generated/torchao.quantization.SmoothFakeDynQuantMixin", "generated/torchao.quantization.SmoothFakeDynamicallyQuantizedLinear", "generated/torchao.quantization.apply_dynamic_quant", "generated/torchao.quantization.apply_weight_only_int8_quant", "generated/torchao.quantization.change_linear_weights_to_int4_woqtensors", "generated/torchao.quantization.change_linear_weights_to_int8_dqtensors", "generated/torchao.quantization.change_linear_weights_to_int8_woqtensors", "generated/torchao.quantization.smooth_fq_linear_to_inference", "generated/torchao.quantization.swap_linear_with_smooth_fq_linear", "generated/torchao.sparsity.PerChannelNormObserver", "generated/torchao.sparsity.WandaSparsifier", "generated/torchao.sparsity.apply_fake_sparsity", "generated/torchao.sparsity.apply_sparse_semi_structured", "getting-started", "index", "overview", "performant_kernels", "quantization", "sg_execution_times", "sparsity", "tutorials/index", "tutorials/sg_execution_times", "tutorials/template_tutorial"], "filenames": ["api_ref_dtypes.rst", "api_ref_intro.rst", "api_ref_kernel.rst", "api_ref_quantization.rst", "api_ref_sparsity.rst", "dtypes.rst", "generated/torchao.dtypes.UInt4Tensor.rst", "generated/torchao.dtypes.to_nf4.rst", "generated/torchao.quantization.Int4WeightOnlyGPTQQuantizer.rst", "generated/torchao.quantization.Int4WeightOnlyQuantizer.rst", "generated/torchao.quantization.SmoothFakeDynQuantMixin.rst", "generated/torchao.quantization.SmoothFakeDynamicallyQuantizedLinear.rst", "generated/torchao.quantization.apply_dynamic_quant.rst", "generated/torchao.quantization.apply_weight_only_int8_quant.rst", "generated/torchao.quantization.change_linear_weights_to_int4_woqtensors.rst", "generated/torchao.quantization.change_linear_weights_to_int8_dqtensors.rst", "generated/torchao.quantization.change_linear_weights_to_int8_woqtensors.rst", "generated/torchao.quantization.smooth_fq_linear_to_inference.rst", "generated/torchao.quantization.swap_linear_with_smooth_fq_linear.rst", "generated/torchao.sparsity.PerChannelNormObserver.rst", "generated/torchao.sparsity.WandaSparsifier.rst", "generated/torchao.sparsity.apply_fake_sparsity.rst", "generated/torchao.sparsity.apply_sparse_semi_structured.rst", "getting-started.rst", "index.rst", "overview.rst", "performant_kernels.rst", "quantization.rst", "sg_execution_times.rst", "sparsity.rst", "tutorials/index.rst", "tutorials/sg_execution_times.rst", "tutorials/template_tutorial.rst"], "titles": ["torchao.dtypes", "<code class=\"docutils literal notranslate\"><span class=\"pre\">torchao</span></code> API Reference", "torchao.kernel", "torchao.quantization", "torchao.sparsity", "Dtypes", "UInt4Tensor", "to_nf4", "Int4WeightOnlyGPTQQuantizer", "Int4WeightOnlyQuantizer", "SmoothFakeDynQuantMixin", "SmoothFakeDynamicallyQuantizedLinear", "apply_dynamic_quant", "apply_weight_only_int8_quant", "change_linear_weights_to_int4_woqtensors", "change_linear_weights_to_int8_dqtensors", "change_linear_weights_to_int8_woqtensors", "smooth_fq_linear_to_inference", "swap_linear_with_smooth_fq_linear", "PerChannelNormObserver", "WandaSparsifier", "apply_fake_sparsity", "apply_sparse_semi_structured", "Getting Started", "Welcome to the torchao Documentation", "Overview", "Performant Kernels", "Quantization", "Computation times", "Sparsity", "&lt;no title&gt;", "Computation times", "Template Tutorial"], "terms": {"thi": [1, 6, 11, 19, 20, 21, 32], "section": 1, "introduc": 1, "dive": 1, "detail": 1, "how": 1, "integr": 1, "pytorch": [1, 24, 32], "optim": 1, "your": [1, 24], "machin": 1, "learn": [1, 32], "model": [1, 12, 13, 14, 15, 16, 17, 18, 20, 21, 22, 24], "sparsiti": [1, 19, 20, 21, 22, 24], "quantiz": [1, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 24], "dtype": [1, 6, 7, 24], "kernel": [1, 14], "tba": [2, 5, 23, 25, 26, 27, 29], "class": [6, 8, 9, 10, 11, 19, 20], "torchao": [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22], "elem": 6, "kwarg": [6, 10, 11, 15, 16, 19, 20, 22], "sourc": [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 24, 30, 32], "tolist": 6, "list": [6, 18, 20], "number": [6, 20], "return": [6, 17, 18], "tensor": [6, 7, 12, 14, 15, 16, 20, 32], "nest": 6, "For": 6, "scalar": 6, "standard": 6, "python": [6, 30, 32], "just": 6, "like": 6, "item": [6, 32], "ar": [6, 14, 20], "automat": [6, 32], "move": 6, "cpu": 6, "first": [6, 20], "necessari": 6, "oper": 6, "differenti": 6, "exampl": [6, 20, 28, 30, 31, 32], "torch": [6, 11, 17, 18, 21, 32], "randn": 6, "2": [6, 14, 21, 32], "0": [6, 10, 11, 18, 20, 28, 31, 32], "012766935862600803": 6, "5415473580360413": 6, "08909505605697632": 6, "7729271650314331": 6, "block_siz": 7, "int": [7, 9, 20], "64": [7, 14], "scaler_block_s": 7, "256": [7, 9, 14], "blocksiz": 8, "percdamp": 8, "groupsiz": [8, 9, 14], "inner_k_til": [8, 9, 14], "8": [8, 9, 14], "padding_allow": [8, 9], "true": [8, 9, 17], "devic": [8, 9], "type": [8, 9], "cuda": [8, 9], "bool": [9, 17], "option": [9, 17, 18, 20], "arg": [10, 11, 20], "set_debug_x_absmax": [10, 11], "set": [10, 11, 17, 20], "self": [10, 11], "x_running_abs_max": [10, 11], "valu": [10, 11, 17, 20], "which": [10, 11], "lead": [10, 11], "smooth": [10, 11], "scale": [10, 11, 17, 18], "all": [10, 11, 12, 13, 14, 15, 16, 19, 20, 21, 28, 30], "ones": [10, 11, 20], "alpha": [10, 11, 18], "5": [10, 11, 18, 20, 32], "enabl": [10, 11], "perform": [10, 11, 17, 19], "benchmark": [10, 11, 17], "without": [10, 11], "calibr": [10, 11], "replac": [11, 18], "nn": [11, 17, 18], "linear": [11, 12, 13, 14, 15, 16, 18, 21], "implement": 11, "dynam": [11, 12], "per": [11, 12, 13, 20], "token": [11, 12], "activ": [11, 12, 17, 20], "channel": [11, 12, 13, 19], "weight": [11, 12, 13, 14, 15, 16, 20], "base": [11, 20], "smoothquant": [11, 17, 18], "forward": [11, 19], "x": [11, 32], "defin": [11, 19, 20], "comput": [11, 19, 20], "everi": [11, 19], "call": [11, 19], "should": [11, 19, 20], "overridden": [11, 19], "subclass": [11, 12, 14, 15, 16, 19], "although": [11, 19], "recip": [11, 19], "pass": [11, 19], "need": [11, 19, 20], "within": [11, 19], "function": [11, 19, 20, 21, 24], "one": [11, 19], "modul": [11, 13, 14, 15, 16, 17, 18, 19, 20], "instanc": [11, 19], "afterward": [11, 19], "instead": [11, 19], "sinc": [11, 19], "former": [11, 19], "take": [11, 19], "care": [11, 19], "run": [11, 17, 19, 32], "regist": [11, 19], "hook": [11, 19], "while": [11, 14, 15, 16, 19, 20], "latter": [11, 19], "silent": [11, 19], "ignor": [11, 19], "them": [11, 19], "classmethod": 11, "from_float": 11, "mod": 11, "convert": [11, 12, 14, 15, 16], "fake": 11, "version": 11, "note": [11, 20], "requir": 11, "to_infer": 11, "calcul": [11, 17], "prepar": [11, 17, 20], "infer": [11, 17], "filter_fn": [12, 13, 14, 15, 16], "none": [12, 13, 14, 15, 16, 17, 18, 20], "appli": [12, 13, 14, 15, 16], "symmetr": [12, 13], "layer": [12, 13, 17, 18, 20, 21], "int8dynamicallyquantizedlinearweight": [12, 15], "onli": 13, "int8": 13, "given": 13, "us": [13, 20, 21, 24], "swap": 13, "128": 14, "int4weightonlyquantizedlinearweight": 14, "effect": [14, 15, 16], "same": [14, 15, 16], "form": [14, 15, 16], "apply_dynamic_qu": [14, 15], "modifi": [14, 15, 16, 20], "paramet": [14, 17, 18, 20], "control": [14, 20], "granular": 14, "smaller": 14, "size": 14, "more": [14, 24], "fine": 14, "grain": 14, "choic": 14, "32": 14, "int4": 14, "mm": 14, "4": [14, 21], "int8weightonlyquantizedlinearweight": 16, "apply_weight_only_int8_qu": 16, "debug_skip_calibr": 17, "fals": [17, 20], "each": [17, 19], "smoothfakedynamicallyquantizedlinear": [17, 18], "The": [17, 18, 20], "contain": [17, 18], "If": [17, 20], "maximum": 17, "debug": 17, "default": [17, 18], "skip_fqn_list": 18, "cur_fqn": 18, "equival": 18, "str": [18, 20], "fulli": 18, "qualifi": 18, "name": [18, 20], "skip": [18, 20], "dure": 18, "current": [18, 20], "being": 18, "process": [18, 32], "float": [18, 20], "factor": 18, "A": 19, "custom": 19, "observ": 19, "l2": 19, "norm": [19, 20], "store": 19, "buffer": 19, "x_orig": 19, "sparsity_level": 20, "semi_structured_block_s": 20, "wanda": 20, "sparsifi": 20, "prune": [20, 21, 24], "propos": 20, "http": 20, "arxiv": 20, "org": 20, "ab": 20, "2306": 20, "11695": 20, "an": [20, 24], "awar": 20, "method": 20, "remov": 20, "product": 20, "input": 20, "magnitud": 20, "three": 20, "variabl": 20, "1": [20, 28, 31, 32], "spars": 20, "block": 20, "zero": 20, "out": 20, "target": 20, "level": 20, "config": 20, "dict": 20, "ad": 20, "parametr": 20, "inplac": 20, "you": [20, 32], "preserv": 20, "origin": 20, "copi": 20, "deepcopi": 20, "squash_mask": 20, "params_to_keep": 20, "tupl": 20, "params_to_keep_per_lay": 20, "squash": 20, "mask": 20, "appropri": 20, "either": 20, "have": 20, "sparse_param": 20, "attach": 20, "kei": [20, 32], "save": 20, "repres": 20, "specifi": 20, "param": 20, "specif": 20, "fqn": 20, "string": 20, "xdoctest": 20, "local": 20, "undefin": 20, "don": 20, "t": 20, "ani": 20, "hasattr": 20, "submodule1": 20, "keep": 20, "linear1": 20, "foo": 20, "bar": 20, "submodule2": 20, "linear42": 20, "baz": 20, "print": [20, 32], "42": 20, "24": 20, "some": 20, "other": [20, 32], "update_mask": 20, "tensor_nam": 20, "statist": 20, "retriev": 20, "act_per_input": 20, "Then": 20, "metric": 20, "matrix": 20, "compar": 20, "across": 20, "whole": 20, "simul": 21, "It": 21, "ao": 21, "flow": 21, "open": 24, "librari": 24, "provid": 24, "nativ": 24, "our": 24, "under": 24, "develop": 24, "content": 24, "come": 24, "soon": 24, "00": [28, 31], "003": [28, 31, 32], "total": [28, 31, 32], "execut": [28, 31], "file": [28, 31], "from": [28, 31, 32], "galleri": [28, 30, 32], "mem": [28, 31], "mb": [28, 31], "templat": [28, 30, 31], "tutori": [28, 30, 31], "tutorials_sourc": 28, "template_tutori": [28, 31, 32], "py": [28, 31, 32], "download": [30, 32], "code": [30, 32], "tutorials_python": 30, "zip": 30, "jupyt": [30, 32], "notebook": [30, 32], "tutorials_jupyt": 30, "gener": [30, 32], "sphinx": [30, 32], "go": 32, "end": 32, "full": 32, "author": 32, "firstnam": 32, "lastnam": 32, "what": 32, "3": 32, "prerequisit": 32, "v2": 32, "gpu": 32, "describ": 32, "why": 32, "topic": 32, "import": 32, "add": 32, "link": 32, "relev": 32, "research": 32, "paper": 32, "walk": 32, "through": 32, "output": 32, "below": 32, "rand": 32, "2499": 32, "1097": 32, "1669": 32, "0355": 32, "1443": 32, "8954": 32, "8327": 32, "9480": 32, "6955": 32, "2241": 32, "3128": 32, "2390": 32, "7616": 32, "5095": 32, "4523": 32, "practic": 32, "user": 32, "test": 32, "knowledg": 32, "nlp": 32, "scratch": 32, "summar": 32, "concept": 32, "cover": 32, "highlight": 32, "takeawai": 32, "link1": 32, "link2": 32, "time": 32, "script": 32, "minut": 32, "second": 32, "ipynb": 32}, "objects": {"torchao.dtypes": [[6, 0, 1, "", "UInt4Tensor"], [7, 2, 1, "", "to_nf4"]], "torchao.dtypes.UInt4Tensor": [[6, 1, 1, "", "tolist"]], "torchao.quantization": [[8, 0, 1, "", "Int4WeightOnlyGPTQQuantizer"], [9, 0, 1, "", "Int4WeightOnlyQuantizer"], [10, 0, 1, "", "SmoothFakeDynQuantMixin"], [11, 0, 1, "", "SmoothFakeDynamicallyQuantizedLinear"], [12, 2, 1, "", "apply_dynamic_quant"], [13, 2, 1, "", "apply_weight_only_int8_quant"], [14, 2, 1, "", "change_linear_weights_to_int4_woqtensors"], [15, 2, 1, "", "change_linear_weights_to_int8_dqtensors"], [16, 2, 1, "", "change_linear_weights_to_int8_woqtensors"], [17, 2, 1, "", "smooth_fq_linear_to_inference"], [18, 2, 1, "", "swap_linear_with_smooth_fq_linear"]], "torchao.quantization.SmoothFakeDynQuantMixin": [[10, 1, 1, "", "set_debug_x_absmax"]], "torchao.quantization.SmoothFakeDynamicallyQuantizedLinear": [[11, 1, 1, "", "forward"], [11, 1, 1, "", "from_float"], [11, 1, 1, "", "set_debug_x_absmax"], [11, 1, 1, "", "to_inference"]], "torchao": [[4, 3, 0, "-", "sparsity"]], "torchao.sparsity": [[19, 0, 1, "", "PerChannelNormObserver"], [20, 0, 1, "", "WandaSparsifier"], [21, 2, 1, "", "apply_fake_sparsity"], [22, 2, 1, "", "apply_sparse_semi_structured"]], "torchao.sparsity.PerChannelNormObserver": [[19, 1, 1, "", "forward"]], "torchao.sparsity.WandaSparsifier": [[20, 1, 1, "", "prepare"], [20, 1, 1, "", "squash_mask"], [20, 1, 1, "", "update_mask"]]}, "objtypes": {"0": "py:class", "1": "py:method", "2": "py:function", "3": "py:module"}, "objnames": {"0": ["py", "class", "Python class"], "1": ["py", "method", "Python method"], "2": ["py", "function", "Python function"], "3": ["py", "module", "Python module"]}, "titleterms": {"torchao": [0, 1, 2, 3, 4, 24], "dtype": [0, 5], "api": [1, 24], "refer": [1, 24], "python": 1, "kernel": [2, 26], "quantiz": [3, 27], "sparsiti": [4, 29], "uint4tensor": 6, "to_nf4": 7, "int4weightonlygptqquant": 8, "int4weightonlyquant": 9, "smoothfakedynquantmixin": 10, "smoothfakedynamicallyquantizedlinear": 11, "apply_dynamic_qu": 12, "apply_weight_only_int8_qu": 13, "change_linear_weights_to_int4_woqtensor": 14, "change_linear_weights_to_int8_dqtensor": 15, "change_linear_weights_to_int8_woqtensor": 16, "smooth_fq_linear_to_infer": 17, "swap_linear_with_smooth_fq_linear": 18, "perchannelnormobserv": 19, "wandasparsifi": 20, "apply_fake_spars": 21, "apply_sparse_semi_structur": 22, "get": 23, "start": 23, "welcom": 24, "document": 24, "overview": [25, 32], "perform": 26, "comput": [28, 31], "time": [28, 31], "templat": 32, "tutori": 32, "step": 32, "option": 32, "addit": 32, "exercis": 32, "conclus": 32, "further": 32, "read": 32}, "envversion": {"sphinx.domains.c": 2, "sphinx.domains.changeset": 1, "sphinx.domains.citation": 1, "sphinx.domains.cpp": 6, "sphinx.domains.index": 1, "sphinx.domains.javascript": 2, "sphinx.domains.math": 2, "sphinx.domains.python": 3, "sphinx.domains.rst": 2, "sphinx.domains.std": 2, "sphinx.ext.intersphinx": 1, "sphinx.ext.todo": 2, "sphinx.ext.viewcode": 1, "sphinx": 56}})