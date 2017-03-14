this.NEJ = this.NEJ || {};
var NEJ = this.NEJ;
var p = this;

/*
 * 判断是否字符串
 * @param  {Varable} _data 数据
 * @param  {String}  _type 类型
 * @return {Boolean}       是否字符串
 */
var _isTypeOf = function (_data, _type) {
    return Object.prototype.toString.call(_data) === '[object ' + _type + ']';
};

/**
 * 根据条件判断是否在当前平台执行，
 * 平台支持TR|WR|GR，没有比较操作符表示支持当前内核所有release版本
 *
 *  | 标识符 | 说明 |
 *  | :--   | :-- |
 *  | T     | Trident引擎，如ie |
 *  | W     | Webkit引擎，如chrome |
 *  | G     | Gecko引擎，如firefox |
 *
 * 平台内置的Trident引擎版本对应的IE版本关系：
 *
 *  | Trident版本 | IE版本 |
 *  | :-- | :-- |
 *  | 2.0 | 6   |
 *  | 3.0 | 7   |
 *  | 4.0 | 8   |
 *  | 5.0 | 9   |
 *  | 6.0 | 10  |
 *  | 7.0 | 11  |
 *
 * patch文件必须符合以下规则：
 * * 只允许执行若干NEJ.patch
 * * NEJ.patch中只允许修改hack.js注入的对象里的API
 * * 定义函数必须返回hack.js注入的对象
 *
 * ```javascript
 * NEJ.define([
 *     './hack.js'
 * ],function(h,p,o,f,r){
     *     // 针对trident平台的处理逻辑
     *     NEJ.patch('TR',function(){
     *         // TODO
     *         console.log('from inline ie');
     *         h.api = function(){
     *             // TODO
     *         };
     *     });
     *
     *     // 针对webkit平台的处理逻辑
     *     NEJ.patch('WR',['./hack.chrome.js'],function(wk){
     *         // TODO
     *         console.log('from inline chrome');
     *     });
     *
     *     // 针对gecko平台的处理逻辑
     *     NEJ.patch('GR',['./hack.firefox.js'],function(gk){
     *         // TODO
     *         console.log('from inline firefox');
     *     });
     *
     *     // 针对IE6平台的处理逻辑
     *     NEJ.patch('TR==2.0',['./hack.ie6.js']);
     *
     *     // 针对IE7-IE9的处理逻辑
     *     NEJ.patch('3.0<=TR<=5.0',function(){
     *         // TODO
     *         console.log('from inline ie7-ie9');
     *     });
     *
     *     // 必须返回hack.js注入的对象
     *     return h;
     * });
 * ```
 *
 * @method NEJ.patch
 * @param  {String}   arg0 - 平台识别条件，如：6<=TR<=9
 * @param  {Array}    arg1 - 依赖文件列表
 * @param  {Function} arg2 - 执行函数
 * @return {Void}
 */
NEJ.patch = function (_exp, _deps, _callback) {
    var _args = _doFormatARG.apply(
        null, arguments
    );
    if (!_args[0]) return;
    // check platform
    var _kernel = _p._$KERNEL,
        _result = _doParsePatchExp(_args[0]);
    if (!!_result && !!_args[2] &&
        _result.isEngOK(_kernel[_result.pkey]) &&
        _result.isVerOK(_kernel[_result.vkey])) {
        var _argc = [],
            _deps = _args[1];
        if (!!_deps) {
            var _xmap = arguments.callee.caller.kmap || {};
            for (var i = 0, l = _deps.length; i < l; i++) {
                _argc.push(__rcache[_xmap[_deps[i]]] || {});
            }
        }
        _args[2].apply(p, _argc);
    }
};

/*
 * 格式化输入参数
 * @param  {String}   字符串
 * @param  {Array}    数组
 * @param  {Function} 函数
 * @return {Array}    格式化后的参数列表
 */
var _doFormatARG = function (_str, _arr, _fun) {
    var _args = [null, null, null],
        _kfun = [
            function (_arg) {
                return _isTypeOf(_arg, 'String');
            },
            function (_arg) {
                return _isTypeOf(_arg, 'Array');
            },
            function (_arg) {
                return _isTypeOf(_arg, 'Function');
            }
        ];
    for (var i = 0, l = arguments.length, _it; i < l; i++) {
        _it = arguments[i];
        for (var j = 0, k = _kfun.length; j < k; j++) {
            if (_kfun[j](_it)) {
                _args[j] = _it;
                break;
            }
        }
    }
    return _args;
};

/*
 * 解析平台识别表达式
 * @param  {String} 平台识别串
 * @return {Object} 平台信息，{pkey:'engine',isEngOK:function(_engine){},vkey:'release',isVerOK:function(version){}}
 */
var _doParsePatchExp = (function () {
    var _reg0 = /\s/g,
        _reg1 = /(TR|WR|GR|TV|WV|GV)/i,
        _reg2 = /([<>=]=?)/,
        _pkey = '[VERSION]',
        _emap = {T: 'trident', W: 'webkit', G: 'gecko'},
        _vmap = {R: 'release', V: 'version'};
    var _doParseVersion = function (_exp) {
        return _exp.replace(_reg2, "'$1'");
    };
    return function (_exp) {
        _exp = (_exp || '').replace(_reg0, '');
        if (!_reg1.test(_exp)) {
            return null;
        }
        var _key = RegExp.$1,
            _brr = _key.split(''),
            _result = {
                pkey: 'engine',
                vkey: _vmap[_brr[1]]
            },
            _pstr = _emap[_brr[0]];
        _result.isEngOK = function (_platform) {
            return _platform == _pstr;
        };
        var _arr = _exp.split(_key),
            _left = "'" + _doParseVersion(_arr[0]) + _pkey + "'",
            _right = "'" + _pkey + _doParseVersion(_arr[1]) + "'";
        _result.isVerOK = function (_version) {
            var _arr = ['true'];
            if (!!_left) {
                _arr.push(_left.replace(_pkey, _version));
            }
            if (!!_right) {
                _arr.push(_right.replace(_pkey, _version));
            }
            return eval(_arr.join('&&'));
        };
        return _result;
    };
})();