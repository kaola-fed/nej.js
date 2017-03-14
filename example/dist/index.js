/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 16);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

/*** IMPORTS FROM imports-loader ***/
(function() {

/*
 * ------------------------------------------
 * 通用接口实现文件
 * @version  1.0
 * @author   genify(caijf)
 * ------------------------------------------
 */
/** @module base/util */
var NEJ = __webpack_require__(1);
var _h = __webpack_require__(8);
__webpack_require__(15);
var _p = {};
var _o = {};
var _f = function() {
    return !1;
};
var _r = [];
/*
 * 查看数据是否指定类型
 * @param  {Variable} 数据
 * @param  {String}   类型
 * @return {Boolean}  是否指定类型
 */
var _isTypeOf = function(_data, _type) {
    try {
        _type = _type.toLowerCase();
        if (_data === null) return _type == 'null';
        if (_data === undefined) return _type == 'undefined';
        return _o.toString.call(_data).toLowerCase() == '[object ' + _type + ']';
    } catch (e) {
        return !1;
    }
};
/**
 * 判断是否函数类型
 *
 * ```javascript
 * NEJ.define([
 *     'base/util'
 * ],function(_u){
 *     // 返回false
 *     var is = _u._$isFunction(123);
 *     // 返回true
 *     var is = _u._$isFunction(function(){});
 * });
 * ```
 *
 * @method module:base/util._$isFunction
 * @param  {Variable} arg0 - 待检测类型的数据
 * @return {Boolean}         是否函数类型
 */
_p._$isFunction = function(_data) {
    return _isTypeOf(_data, 'function');
};
/**
 * 判断是否字符串
 *
 * ```javascript
 * NEJ.define([
 *     'base/util'
 * ],function(_u){
 *     // 返回false
 *     var is = _u._$isString(123);
 *     // 返回true
 *     var is = _u._$isString("123");
 * });
 * ```
 *
 * @method module:base/util._$isString
 * @param  {Variable} arg0 - 待检测类型的数据
 * @return {Boolean}         是否字符串
 */
_p._$isString = function(_data) {
    return _isTypeOf(_data, 'string');
};
/**
 * 判断是否数字
 *
 * ```javascript
 * NEJ.define([
 *     'base/util'
 * ],function(_u){
 *     // 返回false
 *     var is = _u._$isNumber("123");
 *     // 返回true
 *     var is = _u._$isNumber(123);
 *     var is = _u._$isNumber(-123);
 *     var is = _u._$isNumber(Number.MAX_VALUE);
 * });
 * ```
 *
 * @method module:base/util._$isNumber
 * @param  {Variable} arg0 - 待检测类型的数据
 * @return {Boolean}         是否数值类型
 */
_p._$isNumber = function(_data) {
    return _isTypeOf(_data, 'number');
};
/**
 * 判断是否布尔值
 *
 * ```javascript
 * NEJ.define([
 *     'base/util'
 * ],function(_u){
 *     // 返回false
 *     var is = _u._$isBoolean(0);
 *     // 返回true
 *     var is = _u._$isBoolean(false);
 * });
 * ```
 *
 * @method module:base/util._$isBoolean
 * @param  {Variable} arg0 - 待检测类型的数据
 * @return {Boolean}         是否布尔值
 */
_p._$isBoolean = function(_data) {
    return _isTypeOf(_data, 'boolean');
};
/**
 * 判断是否日期
 *
 * ```javascript
 * NEJ.define([
 *     'base/util'
 * ],function(_u){
 *     // 返回false
 *     var is = _u._$isDate(0);
 *     // 返回true
 *     var is = _u._$isDate(new Date());
 * });
 * ```
 *
 * @method module:base/util._$isDate
 * @param  {Variable} arg0 - 待检测类型的数据
 * @return {Boolean}         是否日期
 */
_p._$isDate = function(_data) {
    return _isTypeOf(_data, 'date');
};
/**
 * 判断是否数组
 *
 * ```javascript
 * NEJ.define([
 *     'base/util'
 * ],function(_u){
 *     // 返回false
 *     var is = _u._$isArray(0);
 *     // 返回true
 *     var is = _u._$isArray([1,2]);
 * });
 * ```
 *
 * @method module:base/util._$isArray
 * @param  {Variable} arg0 - 待检测类型的数据
 * @return {Boolean}         是否数组
 */
_p._$isArray = function(_data) {
    return _isTypeOf(_data, 'array');
};
/**
 * 判断是否对象
 *
 * ```javascript
 * NEJ.define([
 *     'base/util'
 * ],function(_u){
 *     // 返回false
 *     var is = _u._$isObject(function(){});
 *     // 返回true
 *     var is = _u._$isObject({});
 *     var is = _u._$isObject({a:"a"});
 * });
 * ```
 *
 * @method module:base/util._$isObject
 * @param  {Variable} arg0 - 待检测类型的数据
 * @return {Boolean}         是否对象
 */
_p._$isObject = function(_data) {
    return _isTypeOf(_data, 'object');
};
/**
 * 计算字符串长度，中文算两个字符
 *
 * ```javascript
 * NEJ.define([
 *     'base/util'
 * ],function(_u){
 *     // 字符串长度为5
 *     var len = _u._$length('你i他');
 * });
 * ```
 *
 * @method module:base/util._$length
 * @param  {String} arg0 - 待计算长度字符串
 * @return {Number}        字符串长度
 */
_p._$length = (function() {
    var _reg = /[^\x00-\xff]/g;
    return function(_content) {
        return ('' + (_content || '')).replace(_reg, '**').length;
    };
})();
/**
 * 遍历对象
 * 
 * ```javascript
 * NEJ.define([
 *     'base/util'
 * ],function(_u){
 *       var obj = {a:{id:1,name:'a'},b:{id:2,name:'b'},...};
 * 
 *       // 遍历对象    
 *       _u._$loop(obj,function(_item,_key){
 *           // TODO
 *       });
 * 
 *       // 从对象里查找id为2的元素，如果有返回KEY，没有返回null
 *       var key = _u._$loop(obj,function(_item){
 *           return _item.id==2;
 *       });
 * });
 * ```
 * 
 * @method module:base/util._$loop
 * @see    module:base/util._$forIn
 * @param  {Object}   arg0 - 对象
 * @param  {Function} arg1 - 回调，如果返回true，则中断遍历
 * @param  {Object}   arg2 - 回调函数调用时this对象
 * @return {String}          返回中断时的标识，没有中断则统一返回null
 */
_p._$loop = function(_obj, _callback, _this) {
    if (_p._$isObject(_obj) &&
        _p._$isFunction(_callback)) {
        return _h.__forIn.apply(_h, arguments);
    }
    return null;
};
/**
 * 线性查找指定项
 *
 * ```javascript
 * NEJ.define([
 *     'base/util'
 * ],function(_u){
 *     var list = ["你","我","他"];
 *     // 返回下标1
 *     var index = _u._$indexOf(list,"我");
 *     // 没有找到，返回-1
 *     var index = _u._$indexOf(list,"他们");
 *     // 如果第二个参数是过滤接口，根据接口的规则查找
 *     // 以下规则排除第一个下标
 *     var index = _u._$indexOf(list,function(_item,_index,_list){
 *           return _item==='他';
 *     });
 * });
 * ```
 *
 * @method module:base/util._$indexOf
 * @param  {Array}    arg0 - 待搜索列表
 * @param  {Variable} arg1 - 指定项，如果为function则表示过滤接口
 * @return {Number}          给定项所在的位置索引，以0开始，没有项返回-1
 */
_p._$indexOf = function(_list, _item) {
    var _filter = _p._$isFunction(_item) ? _item :
        function(_value) {
            return _value === _item;
        },
        _index = _p._$forIn(_list, _filter);
    return _index != null ? _index : -1;
};
/**
 * 二分法查找指定项
 * 
 * 验证函数输入输出说明
 * 
 * |      | 类型          | 结果说明 |
 * | :--  | :--      | :-- |
 * | 输入  | Variable | 中间项元素 |
 * | 输出  | Number   | < 0  目标元素在低位区间 |
 * |      |          | = 0  匹配到目标元素 |
 * |      |          | > 0  目标元素在高位区间 |
 *
 * ```javascript
 * NEJ.define([
 *     'base/util'
 * ],function(_u){
 *     // 二分查找id为2的项的索引值
 *     var list = [{id:1,name:'aaa'},{id:2,name:'bbbb'},...];
 *     var index = _u._$binSearch(list,function(_item){
 *         return _item.id-2;
 *     });
 * });
 * ```
 *
 * @method module:base/util._$binSearch
 * @param  {Array}    arg0 - 待查找列表
 * @param  {Function} arg1 - 验证函数
 * @return {Number}          找到匹配项索引，找不到返回-1
 */
_p._$binSearch = (function() {
    var _docheck;
    // do binary search
    var _doSearch = function(_list, _low, _high) {
        if (_low > _high) return -1;
        var _middle = Math.ceil((_low + _high) / 2),
            _result = _docheck(_list[_middle], _middle, _list);
        if (_result == 0)
            return _middle;
        if (_result < 0)
            return _doSearch(_list, _low, _middle - 1);
        return _doSearch(_list, _middle + 1, _high);
    };
    return function(_list, _check) {
        _docheck = _check || _f;
        return _doSearch(_list, 0, _list.length - 1);
    };
})();
/**
 * 逆序遍历列表，支持中断
 * 
 * 回调函数输入输出说明
 * 
 * |      | 类型          | 说明 |
 * | :--  | :--      | :-- |
 * | 输入  | Variable | 值 |
 * |      | Number   | 下标 |
 * |      | Array    | 列表对象 |
 * | 输出  | Boolean  | 是否匹配 |
 * 
 * ```javascript
 * NEJ.define([
 *     'base/util'
 * ],function(_u){
 *     // 删除id为3的项，并退出循环
 *     var list = [{id:1,name:'aaa'},{id:2,name:'bbbb'},...];
 *     _u._$reverseEach(list,function(_item,_index,_list){
 *         if (_item.id==3){
 *             _list.splice(_index,1);
 *             return !0;
 *         }
 *     });
 * });
 * ```
 *
 * @method module:base/util._$reverseEach
 * @see    module:base/util._$forEach
 * @param  {Array}    arg0 - 列表
 * @param  {Function} arg1 - 回调，如果返回true，则中断遍历
 * @param  {Object}   arg2 - 回调函数调用时this对象
 * @return {Number}          返回遍历中断时的索引值，没有中断则返回null
 */
_p._$reverseEach = function(_list, _callback, _this) {
    if (!!_list && !!_list.length && _p._$isFunction(_callback)) {
        for (var i = _list.length - 1; i >= 0; i--) {
            if (!!_callback.call(_this, _list[i], i, _list)) {
                return i;
            }
        }
    }
    return null;
};
/**
 * 正序遍历列表，不支持中断
 * 
 * 回调函数输入输出说明
 * 
 * |      | 类型          | 说明 |
 * | :--  | :--      | :-- |
 * | 输入  | Variable | 值 |
 * |      | Number   | 下标 |
 * |      | Array    | 列表对象 |
 * | 输出  | Boolean  | 是否匹配 |
 * 
 * ```javascript
 * NEJ.define([
 *     'base/util'
 * ],function(_u){
 *     var list = [1,2,3];
 *     _u._$forEach(list,function(_item,_index,_list){
 *         // TODO somthing
 *     });
 * });
 * ```
 *
 * @method module:base/util._$forEach
 * @see    module:base/util._$reverseEach
 * @param  {Array}    arg0 - 列表
 * @param  {Function} arg1 - 回调，如果返回true，则中断遍历
 * @param  {Object}   arg2 - 回调函数调用时this对象
 * @return {Void}
 */
_p._$forEach = function(_list, _callback, _this) {
    if (!!_list && !!_list.length &&
        _p._$isFunction(_callback)) {
        if (!_list.forEach) {
            _p._$forIn.apply(_p, arguments);
        } else {
            _h.__forEach(_list, _callback, _this);
        }
    }
};
/**
 * 遍历列表或对象，如果带length属性，则作为数组遍历，如果要遍历带length属性的对象用_$loop接口，支持中断退出
 *
 * 回调函数输入输出说明
 * 
 * |      | 类型          | 说明 |
 * | :--  | :--      | :-- |
 * | 输入  | Variable | 值 |
 * |      | Number   | 下标 |
 * |      | Object_Array | 列表或者集合对象 |
 * | 输出  | Boolean  | 是否匹配 |
 * 
 * ```javascript
 * NEJ.define([
 *     'base/util'
 * ],function(_u){
 *       // 从有序列表里查找id为2的元素，如果有则返回索引，没有返回null
 *       var list = [{id:1,name:'a'},{id:2,name:'b'},...];
 *       var index = _u._$forIn(list,function(_item){
 *           return _item.id==2;
 *       });
 *
 *       // 从对象里查找id为2的元素，如果有返回KEY，没有返回null
 *       var obj = {a:{id:1,name:'a'},b:{id:2,name:'b'},...};
 *       var key = _u._$forIn(obj,function(_item){
 *           return _item.id==2;
 *       });
 * });
 * ```
 *
 * @method module:base/util._$forIn
 * @param  {Object|Array} arg0 - 列表或者对象
 * @param  {Function}     arg1 - 回调，如果返回true，则中断遍历
 * @param  {Object}       arg2 - 回调函数调用时this对象
 * @return {String|Number}       返回中断时的索引或者标识，没有中断则统一返回null
 */
_p._$forIn = function(_list, _callback, _this) {
    if (!_list || !_p._$isFunction(_callback)) {
        return null;
    }
    if (_p._$isNumber(_list.length)) {
        // list see as array
        for (var i = 0, l = _list.length; i < l; i++) {
            if (!!_callback.call(_this, _list[i], i, _list)) {
                return i;
            }
        }
    } else if (_p._$isObject(_list)) {
        // list is object
        return _p._$loop(_list, _callback, _this);
    }
    return null;
};
/**
 * 编码字符串，
 * 编码规则对象中r正则表达式参数提取字符串需要编码的内容，
 * 然后使用编码规则对象中的映射表进行替换
 *
 * ```javascript
 * NEJ.define([
 *     'base/util'
 * ],function(_u){
 *     // 把字符串99999根据规则9替换成t，结果：ttttt
 *     var str = _u._$encode({r:/\d/g,'9':'t'},'99999');
 * });
 * ```
 *
 * @method module:base/util._$encode
 * @param  {Object} arg0 - 编码规则
 * @param  {String} arg1 - 待编码的字串
 * @return {String}        编码后的字串
 */
_p._$encode = function(_map, _content) {
    _content = '' + _content;
    if (!_map || !_content) {
        return _content || '';
    }
    return _content.replace(_map.r, function($1) {
        var _result = _map[!_map.i ? $1.toLowerCase() : $1];
        return _result != null ? _result : $1;
    });
};
/**
 * 编码html代码，'<' -> '&amp;lt;'
 *
 * ```javascript
 * NEJ.define([
 *     'base/util'
 * ],function(_u){
 *     // 编码，结果：&amp;lt;a&amp;gt;util&amp;lt;/a&amp;gt;&amp;amp;
 *     var str = _u._$escape('<a>util</a>&');
 * });
 * ```
 *
 * @method module:base/util._$escape
 * @see    module:base/util._$unescape
 * @param  {String} arg0 - 待编码串
 * @return {String}        编码后的串
 */
_p._$escape = (function() {
    var _reg = /<br\/?>$/,
        _map = {
            r: /\<|\>|\&|\r|\n|\s|\'|\"/g,
            '<': '&lt;',
            '>': '&gt;',
            '&': '&amp;',
            ' ': '&nbsp;',
            '"': '&quot;',
            "'": '&#39;',
            '\n': '<br/>',
            '\r': ''
        };
    return function(_content) {
        _content = _p._$encode(_map, _content);
        return _content.replace(_reg, '<br/><br/>');
    };
})();
/**
 * 反编码html代码，'&amp;lt;' -> '<' 
 *
 * ```javascript
 * NEJ.define([
 *     'base/util'
 * ],function(_u){
 *     // 反编码，结果：<&a>util</a>
 *     var str = _u._$unescape('&amp;lt;&amp;amp;a&amp;gt;util&amp;lt;/a&amp;gt;');
 * });
 * ```
 *
 * @method module:base/util._$unescape
 * @see    module:base/util._$escape
 * @param  {String} arg0 - 待反编码串
 * @return {String}        反编码后的串
 */
_p._$unescape = (function() {
    var _map = {
        r: /\&(?:lt|gt|amp|nbsp|#39|quot)\;|\<br\/\>/gi,
        '&lt;': '<',
        '&gt;': '>',
        '&amp;': '&',
        '&nbsp;': ' ',
        '&#39;': "'",
        '&quot;': '"',
        '<br/>': '\n'
    };
    return function(_content) {
        return _p._$encode(_map, _content);
    };
})();
/**
 * 格式化时间，yyyy|yy|MM|cM|eM|M|dd|d|HH|H|mm|ms|ss|m|s|w
 *
 * 各标识说明：
 * 
 * | 标识  | 说明 |
 * | :--  | :-- |
 * | yyyy | 四位年份，如2001 |
 * | yy   | 两位年费，如01 |
 * | MM   | 两位月份，如08 |
 * | M    | 一位月份，如8 |
 * | dd   | 两位日期，如09 |
 * | d    | 一位日期，如9 |
 * | HH   | 两位小时，如07 |
 * | H    | 一位小时，如7 |
 * | mm   | 两位分钟，如03 |
 * | m    | 一位分钟，如3 |
 * | ss   | 两位秒数，如09 |
 * | s    | 一位秒数，如9 |
 * | ms   | 毫秒数，如234 |
 * | w    | 中文星期几，如一 |
 * | ct   | 12小时制中文后缀，上午/下午 |
 * | et   | 12小时制英文后缀，A.M./P.M. |
 * | cM   | 中文月份，如三 |
 * | eM   | 英文月份，如Mar |
 *
 * ```javascript
 * NEJ.define([
 *     'base/util'
 * ],function(_u){
 *     // 根据格式输出时间，比如:2012-01-11,连接符可自定义
 *     var str = _u._$format(new Date(),'yyyy-MM-dd');
 * });
 * ```
 *
 * @method module:base/util._$format
 * @param  {Number|String|Date} arg0 - 时间
 * @param  {String}             arg1 - 格式
 * @return {String}                    指定格式的时间串
 */
_p._$format = (function() {
    var _map = {
            i: !0,
            r: /\byyyy|yy|MM|cM|eM|M|dd|d|HH|H|mm|ms|ss|m|s|w|ct|et\b/g
        },
        _12cc = ['上午', '下午'],
        _12ec = ['A.M.', 'P.M.'],
        _week = ['日', '一', '二', '三', '四', '五', '六'],
        _cmon = ['一', '二', '三', '四', '五', '六', '七', '八', '九', '十', '十一', '十二'],
        _emon = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
    var _fmtnmb = function(_number) {
        _number = parseInt(_number) || 0;
        return (_number < 10 ? '0' : '') + _number;
    };
    var _fmtclc = function(_hour) {
        return _hour < 12 ? 0 : 1;
    };
    return function(_time, _format, _12time) {
        if (!_time || !_format)
            return '';
        _time = _p._$var2date(_time);
        _map.yyyy = _time.getFullYear();
        _map.yy = ('' + _map.yyyy).substr(2);
        _map.M = _time.getMonth() + 1;
        _map.MM = _fmtnmb(_map.M);
        _map.eM = _emon[_map.M - 1];
        _map.cM = _cmon[_map.M - 1];
        _map.d = _time.getDate();
        _map.dd = _fmtnmb(_map.d);
        _map.H = _time.getHours();
        _map.HH = _fmtnmb(_map.H);
        _map.m = _time.getMinutes();
        _map.mm = _fmtnmb(_map.m);
        _map.s = _time.getSeconds();
        _map.ss = _fmtnmb(_map.s);
        _map.ms = _time.getMilliseconds();
        _map.w = _week[_time.getDay()];
        var _cc = _fmtclc(_map.H);
        _map.ct = _12cc[_cc];
        _map.et = _12ec[_cc];
        if (!!_12time) {
            _map.H = _map.H % 12;
        }
        return _p._$encode(_map, _format);
    };
})();
/**
 * 日期字符串转日期对象
 * 
 * 字符串日期格式同ECMA规范定义：YYYY-MM-DDTHH:mm:ss.sssZ
 * 
 * 各标识说明：
 * 
 * | 标识 | 说明 |
 * | :--  | :-- |
 * | YYYY | 四位年份，0000-9999，如2001 |
 * | -    | 年月日分隔符 |
 * | MM   | 两位月份，01-12，如03 |
 * | DD   | 两位日期，01-31，如07 |
 * | T    | 时间起始标识 |
 * | HH   | 两位小时，00-24，如05 |
 * | :    | 时分秒分隔符 |
 * | mm   | 两位分钟，00-59，如30 |
 * | ss   | 两位秒数，00-59，如08 |
 * | .    | 秒/毫秒分隔符 |
 * | sss  | 三位毫秒数，000-999，如004 |
 * | Z    | 时区偏移 |
 *
 * ```javascript
 * NEJ.define([
 *     'base/util'
 * ],function(_u){
 *     // 输入YYYY-MM-DDTHH:mm:ss.sssZ格式字符串，生成日期对象
 *     var date = _u._$var2date('2013-07-29T13:12:45.300');
 *
 *     // 输入YYYY-MM-DDTHH:mm:ss格式字符串，生成日期对象
 *     var date = _u._$var2date('2013-07-29T13:12:45');
 *
 *     // 输入YYYY-MM-DD格式字符串，生成日期对象
 *     var date = _u._$var2date('2013-07-29');
 * });
 * ```
 *
 * @method module:base/util._$var2date
 * @param  {String} arg0 - 日期串
 * @return {Date}          日期对象
 */
_p._$var2date = function(_time) {
    var _date = _time;
    if (_p._$isString(_time)) {
        _date = new Date(
            _h.__str2time(_time)
        );
    }
    if (!_p._$isDate(_date)) {
        _date = new Date(_time);
    }
    return _date;
};
/**
 * 浮点数值保留指定位数小数点
 *
 * ```javascript
 * NEJ.define([
 *     'base/util'
 * ],function(_u){
 *     // 保留2位小数，返回3.14
 *     var value = _u._$fixed(3.14159,2);
 * });
 * ```
 *
 * @method module:base/util._$fixed
 * @param  {Float}  arg0 - 浮点数
 * @param  {Number} arg1 - 小数位
 * @return {Number}        浮点数
 */
_p._$fixed = function(_float, _fraction) {
    return parseFloat(new Number(_float).toFixed(_fraction));
};
/**
 * 相对路径转绝对路径
 *
 * ```javascript
 * NEJ.define([
 *     'base/util'
 * ],function(_u){
 *     // 相对路径../a/b.html转绝对路径http://a.b.com:8010/a/b.html
 *     var url = _u._$absolute(
 *         '../a/b.html',
 *         'http://a.b.com:8010/z/'
 *     );
 * });
 * ```
 * 
 * @method module:base/util._$absolute
 * @param  {String} arg0 - 相对路径
 * @param  {String} arg1 - 绝对路径ROOT，必须以http://开始，默认为location目录
 * @return {String}        绝对路径地址
 */
_p._$absolute = (function() {
    var _reg0 = /([^\/:])\/.*$/,
        _reg1 = /\/[^\/]+$/,
        _reg2 = /[#\?]/,
        _base = location.href.split(/[?#]/)[0],
        _anchor = document.createElement('a');
    // fix for relative protocol, e.g //a.b.com/a
    var _isAbsolute = function(_uri) {
        _uri = _uri || '';
        return _uri.indexOf('://') > 0 ||
            _uri.indexOf('//') === 0;
    };
    var _doFormat = function(_uri) {
        return (_uri || '').split(_reg2)[0]
            .replace(_reg1, '/');
    };
    var _doMergeURI = function(_uri, _root) {
        // for /a/b/c
        if (_uri.indexOf('/') == 0)
            return _root.replace(_reg0, '$1') + _uri;
        // for a/b or ./a/b or ../a/b
        return _doFormat(_root) + _uri;
    };
    _base = _doFormat(_base);
    return function(_uri, _root) {
        _uri = (_uri || '').trim();
        if (!_isAbsolute(_root))
            _root = _base;
        if (!_uri) return _root;
        if (_isAbsolute(_uri))
            return _uri;
        _uri = _doMergeURI(_uri, _root);
        _anchor.href = _uri;
        _uri = _anchor.href;
        return _isAbsolute(_uri) ? _uri :
            _anchor.getAttribute('href', 4); // ie6/7
    };
})();
/**
 * 从URL地址中提取源信息
 * 
 * * http://a.b.com:8080/a/b/ -> http://a.b.com:8080
 * * /a/b -> 
 *
 * ```javascript
 * NEJ.define([
 *     'base/util'
 * ],function(_u){
 *     // 提取url地址的源信息
 *     // 返回http://a.b.com:8080
 *     var origin = _u._$url2origin("http://a.b.com:8080/a/b/");
 * });
 * ```
 *
 * @method module:base/util._$url2origin
 * @param  {String} arg0 - URL地址
 * @return {String}        源信息
 */
_p._$url2origin = (function() {
    var _reg = /^([\w]+?:\/\/.*?(?=\/|$))/i;
    return function(_url) {
        if (_reg.test(_url || ''))
            return RegExp.$1.toLowerCase();
        return '';
    };
})();
/**
 * key-value字符串转对象
 *
 * ```javascript
 * NEJ.define([
 *     'base/util'
 * ],function(_u){
 *     var str = "abc=abc,123=123";
 *     // 返回对象{abc:"abc",123:"123"}
 *     var obj = _u._$string2object(_str,",");
 * });
 * ```
 *
 * @method module:base/util._$string2object
 * @see    module:base/util._$object2string
 * @param  {String}           arg0 - 待处理数据
 * @param  {String|RegExp}    arg1 - 分隔符
 * @param  {Boolean|Function} arg2 - 是否反编码
 * @return {Object}           转换后对象
 */
_p._$string2object = function(_string, _split, _decode) {
    var _obj = {};
    // decode function
    var _func = _decode;
    if (!_p._$isFunction(_func)) {
        _func = function(v) {
            return !_decode ? v : decodeURIComponent(v);
        };
    }
    // parse string
    _p._$forEach(
        (_string || '').split(_split),
        function(_name) {
            var _brr = _name.split('=');
            if (!_brr || !_brr.length) return;
            var _key = _brr.shift();
            if (!!_key) {
                _obj[_func(_key)] = _func(_brr.join('='));
            }
        }
    );
    return _obj;
};
/**
 * key-value对象转成key=value对后用分隔符join
 * 
 * 对象中不同类型的取值规则如下：
 * 
 * | 类型            |  取值规则 |
 * | :--       | :-- |
 * | Function  |  过滤掉，不输出 |
 * | Date      |  转成时间戳，getTime取值 |
 * | Array     |  值用逗号分隔，如[1,2,3] -> 1,2,3 |
 * | Object    |  使用JSON转成字符串 |
 *
 * ```javascript
 * NEJ.define([
 *     'base/util'
 * ],function(_u){
 *     // 返回字符串 abc=abc,123=123
 *     var obj = {
 *         abc:"abc",
 *         123:"123"
 *     };
 *     var str = _u._$object2string(obj);
 *
 *     // 返回字符串
 *     // a=1871406603152186&b=1,2,3&d={"a":"a","b":"b"}&e=e&f=1&g=true
 *     var obj = {
 *         a:new Date,
 *         b:[1,2,3],
 *         c:function(){},
 *         d:{a:'a',b:'b'},
 *         e:'e',
 *         f:1,
 *         g:true
 *     };
 *     var str = _u._$object2string(obj,'&');
 * });
 * ```
 *
 * @method module:base/util._$object2string
 * @see    module:base/util._$string2object
 * @param  {Object}  arg0 - 对象
 * @param  {String}  arg1 - 分隔符，默认为逗号
 * @param  {Boolean|Function} arg2 - 是否编码
 * @return {String}         key-value串
 */
_p._$object2string = function(_object, _split, _encode) {
    if (!_object) return '';
    var _arr = [];
    // encode function
    var _func = _encode;
    if (!_p._$isFunction(_func)) {
        _func = function(v) {
            return !_encode ? v : encodeURIComponent(v);
        };
    }
    // parse object
    _p._$loop(
        _object,
        function(_value, _key) {
            if (_p._$isFunction(_value)) {
                return;
            }
            if (_p._$isDate(_value)) {
                _value = _value.getTime();
            } else if (_p._$isArray(_value)) {
                _value = _value.join(',');
            } else if (_p._$isObject(_value)) {
                _value = JSON.stringify(_value);
            }
            _arr.push(_func(_key) + '=' + _func(_value));
        }
    );
    return _arr.join(_split || ',');
};
/**
 * 查询串转对象
 *
 * ```javascript
 * NEJ.define([
 *     'base/util'
 * ],function(_u){
 *     // 返回对象{abc:"abc",123:"123"}
 *     var obj = _u._$query2object("abc=abc&123=123");
 * });
 * ```
 *
 * @method module:base/util._$query2object
 * @see    module:base/util._$object2query
 * @see    module:base/util._$string2object
 * @param  {String} arg0 - 查询串
 * @return {Object}        转换出来的对象
 */
_p._$query2object = function(_query) {
    return _p._$string2object(_query, '&', !0);
};
/**
 * 对象转查询串
 *
 * ```javascript
 * NEJ.define([
 *     'base/util'
 * ],function(_u){
 *     // 返回对象123=123&abc=abc
 *     var query = _u._$object2query({abc:"abc",123:"123"});
 * });
 * ```
 *
 * @method module:base/util._$object2query
 * @see    module:base/util._$query2object
 * @see    module:base/util._$object2string
 * @param  {Object} arg0 - 对象
 * @return {String}        查询串
 */
_p._$object2query = function(_object) {
    return _p._$object2string(_object, '&', !0);
};
/**
 * 集合转数组，集合具有length属性
 *
 * ```javascript
 * NEJ.define([
 *     'base/util'
 * ],function(_u){
 *     // 返回数组['1','2','3']
 *     var map = {0:'0',1:'1',2:'2',length:3};
 *     var arr = _u._$object2array(map);
 *
 *     // 多用于对节点集合的转换
 *     var nodes = document.body.childNodes;
 *     var arr = _u._$object2array(nodes);
 * });
 * ```
 *
 * @method module:base/util._$object2array
 * @see    module:base/util._$array2object
 * @param  {Object} arg0 - 集合，必须有length属性
 * @return {Array}         数组
 */
_p._$object2array = function(_object) {
    return _h.__col2array(_object);
};
/**
 * 数组转对象，将列表中元素按照指定KEY组成对象<br/>
 *
 * ```javascript
 * NEJ.define([
 *     'base/util'
 * ],function(_u){
 *     // 输出结果为 {2:{id:2,name:'b'},...}
 *     var arr = [{id:1,name:'a'},{id:2,name:'b'},...];
 *     var obj = _u._$array2object(
 *         arr,function(_item){
 *             // 过滤name为a的项
 *             if (_item.name=='a'){
 *                 return;
 *             }
 *             // 组对象的KEY用每项的id
 *             return _item.id;
 *         }
 *     );
 *
 *     // 默认使用每项的值组对象
 *     var brr = ['a','b','c',...];
 *     // 输出 {a:'a',b:'b',c:'c',...}
 *     var obj = _u._$array2object(brr);
 * });
 * ```
 *
 * @method module:base/util._$array2object
 * @see    module:base/util._$object2array
 * @param  {Array}    arg0 - 列表
 * @param  {Function} arg1 - 过滤函数，返回每一项的KEY，没有返回则过滤当前项
 * @return {Object}   对象
 */
_p._$array2object = function(_list, _filter) {
    var _result = {};
    _p._$forEach(
        _list,
        function(_item) {
            var _key = _item;
            if (!!_filter) {
                _key = _filter(_item);
            }
            if (_key != null) {
                _result[_key] = _item;
            }
        }
    );
    return _result;
};
/**
 * 格式化数字为指定位数，不足位数前面用0补足
 *
 * ```javascript
 * NEJ.define([
 *     'base/util'
 * ],function(_u){
 *     // 2    -> 002
 *     // 22   -> 022
 *     // 222  -> 222
 *     // 2222 -> 2222
 *     var str = _u._$number2string(2,3);
 * });
 * ```
 *
 * @method module:base/util._$number2string
 * @param  {Number} arg0 - 数值
 * @param  {Number} arg1 - 位数，至少1位
 * @return {String}        格式化后字符串
 */
_p._$number2string = function(_number, _limit) {
    var _len1 = ('' + _number).length,
        _len2 = Math.max(1, parseInt(_limit) || 0),
        _delta = _len2 - _len1;
    if (_delta > 0) {
        _number = new Array(_delta + 1).join('0') + _number;
    }
    return '' + _number;
};
/**
 * 安全删除属性，
 * 部分浏览器（如低版本IE）禁止直接delete节点上的属性
 *
 * ```javascript
 * NEJ.define([
 *     'base/util'
 * ],function(_u){
 *     // 节点上保存的数据
 *     _node.data = {a:'aaaaa',b:'bbbbb'};
 *     _node.test = 'aaaaa';
 *
 *     // 删除单个属性
 *     _u._$safeDelete(_node,'test');
 *     // 批量删除
 *     _u._$safeDelete(_node,['test','data']);
 * });
 * ```
 *
 * @method module:base/util._$safeDelete
 * @param  {Object}       arg0 - 对象
 * @param  {String|Array} arg1 - 属性
 * @return {Void}
 */
_p._$safeDelete = function(_object, _name) {
    if (!_p._$isArray(_name)) {
        try {
            delete _object[_name];
        } catch (e) {
            _object[_name] = undefined;
        }
    } else {
        _p._$forEach(
            _name,
            function(_item) {
                _p._$safeDelete(_object, _item);
            }
        );
    }
};
/**
 * 随机一个字符串
 *
 * ```javascript
 * NEJ.define([
 *     'base/util'
 * ],function(_u){
 *     // 可能返回"13d1r1dt2"
 *     var seed = _u._$randString(9);
 * });
 * ```
 *
 * @method module:base/util._$randString
 * @param  {String} arg0 - 字符串长度
 * @return {String}        随机字符串
 */
_p._$randString = (function() {
    var _chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz';
    return function(_length) {
        _length = _length || 10;
        var _result = [];
        for (var i = 0, _rnum; i < _length; ++i) {
            _rnum = Math.floor(Math.random() * _chars.length);
            _result.push(_chars.charAt(_rnum));
        }
        return _result.join('');
    };
})();
/**
 * 随机生成一个给定范围的整数
 *
 * ```javascript
 * NEJ.define([
 *     'base/util'
 * ],function(_u){
 *     // 可能返回3
 *     var seed = _u._$randNumber(0,9);
 * });
 * ```
 * 
 * @method module:base/util._$randNumber
 * @see    module:base/util._$randNumberString
 * @param  {Number} arg0 - 小区间，包含
 * @param  {Number} arg1 - 大区间，不包含
 * @return {Number}        随机整数
 */
_p._$randNumber = function(_min, _max) {
    return Math.floor(Math.random() * (_max - _min) + _min);
};
/**
 * 随机生成一个全部为数字的字符串
 *
 * ```javascript
 * NEJ.define([
 *     'base/util'
 * ],function(_u){
 *     // 可能返回123456789
 *     var seed = _u._$randNumberString(9);
 * });
 * ```
 *
 * @deprecated
 * @method module:base/util._$randNumberString
 * @see    module:base/util._$randNumber
 * @see    module:base/util._$uniqueID
 * @param  {Number} arg0 - 随机字符串的长度[1,30]
 * @return {String}        随机生成的字符串
 */
_p._$randNumberString = function(_length) {
    _length = Math.max(0, Math.min(_length || 8, 30));
    var _min = Math.pow(10, _length - 1),
        _max = _min * 10;
    return _p._$randNumber(_min, _max).toString();
};
/**
 * 生成系统中的唯一标识，每次调用均生成一个新的标识
 *
 * ```javascript
 * NEJ.define([
 *     'base/util'
 * ],function(_p){
 *    // 可能返回123456789
 *    var _id1 = _p._$uniqueID(),
 *        _id2 = _p._$uniqueID();
 *    // _id1 != _id2
 * });
 * ```
 *
 * @method module:base/util._$uniqueID
 * @return {String} 唯一标识
 */
_p._$uniqueID = (function() {
    var _seed = +new Date;
    return function() {
        return '' + (_seed++);
    };
})();
/**
 * 读取上下文中指定名字空间的值
 *
 * ```javascript
 * NEJ.define([
 *     'base/util'
 * ],function(_u){
 *     var obj = {
 *         a:{
 *             b:{
 *                 c:{
 *                     d:'ddddd'
 *                 }
 *             }
 *         }
 *     };
 *     // 输出 ddddd
 *     var value = _u._$query(obj,'a.b.c.d');
 *     // 输出 undefined
 *     var value = _u._$query(null,'a.b.c.d');
 * });
 * ```
 *
 * @method module:base/util._$query
 * @param  {Object} arg0 - 上下文
 * @param  {String} arg1 - 名字空间
 * @return {Varaible}      查询到的值
 */
_p._$query = function(_context, _namespace) {
    _context = _context || _o;
    var _arr = (_namespace || '').split('.');
    for (var i = 0, l = _arr.length; i < l; i++) {
        _context = _context[_arr[i]];
        if (!_context) break;
    }
    return _context;
};
/**
 * 合并数据，同名属性右侧覆盖左侧，
 * 最后一个如果是函数则用做数据过滤，
 * 第一个参数作为合并数据结果集对象，如果为空则新建对象
 * 
 * 过滤接口输入输出说明
 * 
 * |      | 类型          | 说明 |
 * | :--  | :--      | :-- |
 * | 输入  | Variable | 值 |
 * |      | String   | 键 |
 * | 输出  | Boolean  | 是否过滤 |
 * 
 * ```javascript
 * NEJ.define([
 *     'base/util'
 * ],function(_u){
 *     // 合并多个数据至obj0中
 *     var obj0 = {a:0,b:1},
 *         obj1 = {a:"a",b:"b",c:"c"},
 *         obj2 = {c:"c",d:"d",e:"f"},
 *         ... ;
 *     var obj = _u._$merge(obj0,obj1,obj2,...);
 *
 *     // 带过滤接口合并
 *     // 阻止a属性的覆盖
 *     var obj = _u._$merge(
 *         obj0,obj1,obj2,...,
 *         function(_value,_key){
 *             return _key=='a';
 *         }
 *     );
 * });
 * ```
 *
 * @method module:base/util._$merge
 * @see    module:base/util._$fetch
 * @param  {Object}   arg0 - 原始对象
 * @param  {Object}   arg1 - 待拷贝对象
 * @param  {Function} arg2 - 过滤接口
 * @return {Object}          拷贝后对象
 */
_p._$merge = function() {
    var _last = arguments.length - 1,
        _filter = arguments[_last];
    // check filter function for last args
    if (_p._$isFunction(_filter)) {
        _last -= 1;
    } else {
        _filter = _f;
    }
    // args0 as result
    var _result = arguments[0] || {};
    // merge
    for (var i = 1; i <= _last; i++) {
        _p._$loop(arguments[i], function(v, k) {
            if (!_filter(v, k)) {
                _result[k] = v;
            }
        });
    }
    return _result;
};
/**
 * 根据原始对象属性，从目标对象提取非空值
 *
 * ```javascript
 * NEJ.define([
 *     'base/util'
 * ],function(_u){
 *     var obj0 = {a:0,b:1},
 *         obj1 = {a:"a",b:"b",c:"c"};
 *     // 根据obj0的属性,从obj1拷贝非null属性到obj0中
 *     // 结果是obj0.a = "a",obj.b = "b",没有拷贝c属性;
 *     var obj = _u._$fetch(obj0,obj1);
 * });
 * ```
 *
 * @method module:base/util._$fetch
 * @see    module:base/util._$merge
 * @param  {Object} arg0 - 原始对象
 * @param  {Object} arg1 - 目标对象
 * @return {Object}        合并后的对象
 */
_p._$fetch = function(_object, _config) {
    if (!!_config) {
        _p._$loop(_object, function(v, k, m) {
            var _value = _config[k];
            if (_value != null) {
                m[k] = _value;
            }
        });
    }
    return _object;
};
/**
 * 判断对象自生是否包含元素
 * 
 * ```javascript
 * NEJ.define([
 *     'base/util'
 * ],function(_u){
 *     // 判断空对象是否有属性
 *     // 输出 false
 *     var has = _u._$hasProperty({});
 *       
 *     // 判断非空对象是否有属性
 *     // 输出 true
 *     var has = _u._$hasProperty({a:'a',b:'b',c:'c'});
 *       
 *     // 判断空数组是否有属性
 *     // 输出 false
 *     var has = _u._$hasProperty([]);
 *       
 *     // 判断非空数组是否有属性
 *     // 输出 true
 *     var has = _u._$hasProperty([1,2,3]);
 * });
 * ```
 * 
 * @method module:base/util._$hasProperty
 * @param  {Object|Array} arg0 - 对象
 * @return {Boolean}             是否有元素
 */
_p._$hasProperty = function(_obj) {
    // for null
    if (!_obj) {
        return !1;
    }
    // for object with length
    if (_obj.length != null) {
        return _obj.length > 0;
    }
    // for object
    var _length = 0;
    _p._$loop(_obj, function() {
        _length++;
        return _length > 0;
    });
    return _length > 0;
};

if (true) {
    NEJ.Q = _p._$query;
    NEJ.X = _p._$merge;
    NEJ.EX = _p._$fetch;
    NEJ.copy(this.NEJ, NEJ);
    NEJ.copy(NEJ.P('nej.u'), _p);
}

module.exports = _p;
}.call(window));

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

/*** IMPORTS FROM imports-loader ***/
(function() {

/*
 * --------------------------------------------
 * 原生对象扩展接口
 * @version 1.0
 * @author  genify(caijf)
 * --------------------------------------------
 */
/**
 * 全局window对象
 * @external window
 */
/**
 * 全局页面文档对象
 * @external document
 */
/**
 * 全局location对象
 * @external location
 */
/**
 * 全局history对象
 * @external history
 */
/**
 * 内置函数对象扩展
 * @external Function
 */
function module_exports() {
    var _p = {};
    var _o = {};
    var _f = function() {
        return !1;
    };
    var _r = [];
    /*
     * --------------------------------------------
     * 以下代码需要在 NEJ 版本升级后 人为添加
     */
    // DEBUG default false
    if (false) {
        window.DEBUG = 0;
    }

    // 禁用兼容模式
    if (false) {
        window.CMPT = false;
    }

    /*
     * --------------------------------------------
     * 以上代码需要在 NEJ 版本升级后 人为添加
     */


    var _extpro = Function.prototype;
    /**
     * AOP增强操作，增强操作接受一个输入参数包含以下信息
     *
     *  | 参数名称 | 参数类型  | 参数描述 |
     *  | :--     | :--      | :-- |
     *  | args    | Array    | 函数调用时实际输入参数，各增强操作中可以改变值后将影响至后续的操作 |
     *  | value   | Variable | 输出结果 |
     *  | stopped | Boolean  | 是否结束操作，终止后续操作 |
     *
     * @method external:Function#_$aop
     * @param  {Function} arg0 - 前置操作，接受一个输入参数，见描述信息
     * @param  {Function} arg1 - 后置操作，接受一个输入参数，见描述信息
     * @return {Function}        增强后操作函数
     */
    _extpro._$aop = function(_before, _after) {
        var _after = _after || _f,
            _before = _before || _f,
            _handler = this;
        return function() {
            var _event = {
                args: _r.slice.call(arguments, 0)
            };
            _before(_event);
            if (!_event.stopped) {
                _event.value = _handler.apply(this, _event.args);
                _after(_event);
            }
            return _event.value;
        };
    };
    /**
     * 绑定接口及参数，使其的调用对象保持一致
     *
     *  ```javascript
     *  var scope = {a:0};
     * 
     *  var func = function(a,b){
     *      // 第一个参数 ：1
     *      console.log(a);
     *      // 第二个参数 ： 2
     *      consoel.log(b);
     *      // 当前this.a ： 0
     *      console.log(this.a);
     *  };
     * 
     *  func._$bind(scope,"1")(2);
     *  ```
     *
     * @method external:Function#_$bind
     * @see    external:Function#_$bind2
     * @param  {Object} arg0 - 需要保持一致的对象，null表示window对象，此参数外的其他参数作为绑定参数
     * @return {Function}      返回绑定后的函数
     */
    _extpro._$bind = function() {
        var _args = arguments,
            _object = arguments[0],
            _function = this;
        return function() {
            // not use slice for chrome 10 beta and Array.apply for android
            var _argc = _r.slice.call(_args, 1);
            _r.push.apply(_argc, arguments);
            return _function.apply(_object || null, _argc);
        };
    };
    /**
     * 绑定接口及参数，使其的调用对象保持一致，
     * 该接口与_$bind接口的差别在于绑定时参数和调用时参数的顺序不一样，
     * _$bind优先传入绑定时参数，_$bind2优先传入调用时参数
     *
     *  ```javascript
     *  var scope = {a:0};
     * 
     *  var func = function(a,b){
     *      // 第一个参数 ：2
     *      console.log(a);
     *      // 第二个参数 ： 1
     *      consoel.log(b);
     *      // 当前this.a ： 0
     *      console.log(this.a);
     *  };
     * 
     *  func._$bind(scope,"1")(2);
     *  ```
     *
     * @method external:Function#_$bind2
     * @see    external:Function#_$bind
     * @param  {Object} arg0 - 需要保持一致的对象，null表示window对象，此参数外的其他参数作为绑定参数
     * @return {Function}      返回绑定后的事件函数
     */
    _extpro._$bind2 = function() {
        var _args = arguments,
            _object = _r.shift.call(_args),
            _function = this;
        return function() {
            _r.push.apply(arguments, _args);
            return _function.apply(_object || null, arguments);
        };
    };
    // for compatiable
    var _extpro = String.prototype;
    if (!_extpro.trim) {
        _extpro.trim = (function() {
            var _reg = /(?:^\s+)|(?:\s+$)/g;
            return function() {
                return this.replace(_reg, '');
            };
        })();
    }
    if (!this.console) {
        this.console = {
            log: _f,
            error: _f
        };
    }

    if (true) {
        NEJ = this.NEJ || {};
        // copy object properties
        // only for nej compatiable
        NEJ.copy = function(a, b) {
            a = a || {};
            b = b || _o;
            for (var x in b) {
                if (b.hasOwnProperty(x)) {
                    a[x] = b[x];
                }
            }
            return a;
        };
        // NEJ namespace
        NEJ = NEJ.copy(
            NEJ, {
                O: _o,
                R: _r,
                F: _f,
                P: function(_namespace) {
                    if (!_namespace || !_namespace.length) {
                        return null;
                    }
                    var _package = window;
                    for (var a = _namespace.split('.'),
                            l = a.length, i = (a[0] == 'window') ? 1 : 0; i < l; _package = _package[a[i]] = _package[a[i]] || {}, i++);
                    return _package;
                }
            }
        );

        return NEJ;
    }

    return _p;
}
module.exports = module_exports.apply(this);
}.call(window));

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

/*** IMPORTS FROM imports-loader ***/
(function() {

/*
 * ------------------------------------------
 * 平台接口实现文件
 * @version  1.0
 * @author   genify(caijf)
 * ------------------------------------------
 */
/** @module base/platform */
var NEJ = __webpack_require__(1);
var _p = {};
var _o = {};
var _f = function() {
    return !1;
};
var _r = [];
var _platform = this.navigator.platform,
    _useragent = this.navigator.userAgent;
/**
 * 平台判断信息
 * 
 * ```javascript
 * NEJ.define([
 *     'base/platform'
 * ],function(_m){
 *     var _is = _m._$IS;
 *     // 是否MAC系统
 *     console.log(_is.mac);
 *     // 是否IPhone
 *     console.log(_is.iphone);
 *     // ...
 * });
 * ```
 * 
 * @const    module:base/platform._$IS
 * @see      module:base/platform._$is
 * @type     {Object}
 * @property {Boolean} mac     - 是否Mac系统
 * @property {Boolean} win     - 是否windows系统
 * @property {Boolean} linux   - 是否linux系统
 * @property {Boolean} ipad    - 是否Ipad
 * @property {Boolean} iphone  - 是否IPhone
 * @property {Boolean} android - 是否Android系统
 * @property {Boolean} ios     - 是否IOS系统
 * @property {Boolean} tablet  - 是否平板
 * @property {Boolean} desktop - 是否桌面系统
 */
var _is = {
    mac: _platform,
    win: _platform,
    linux: _platform,
    ipad: _useragent,
    ipod: _useragent,
    iphone: _platform,
    android: _useragent
};
_p._$IS = _is;
for (var x in _is) {
    _is[x] = new RegExp(x, 'i').test(_is[x]);
}
_is.ios = _is.ipad || _is.iphone || _is.ipod;
_is.tablet = _is.ipad;
_is.desktop = _is.mac || _is.win || (_is.linux && !_is.android);
/**
 * 判断是否指定平台
 * 
 * ```javascript
 * NEJ.define([
 *     'base/platform'
 * ],function(_m){
 *     // 是否MAC系统
 *     console.log(_m._$is('mac'));
 *     // 是否iphone
 *     console.log(_m._$is('iphone'));
 *     // ...
 * });
 * ```
 * 
 * @method module:base/platform._$is
 * @see    module:base/platform._$IS
 * @param  {String} arg0 - 平台名称
 * @return {Boolean}       是否指定平台
 */
_p._$is = function(_platform) {
    return !!_is[_platform];
};
// parse kernel information
/**
 * 引擎内核信息
 * 
 * ```javascript
 * NEJ.define([
 *     'base/platform'
 * ],function(_m){
 *     var _kernel = _m._$KERNEL;
 *     // 打印平台信息
 *     console.log(_kernel.engine);
 *     console.log(_kernel.release);
 *     console.log(_kernel.browser);
 *     console.log(_kernel.version);
 * });
 * ```
 * 
 * @const    module:base/platform._$KERNEL
 * @type     {Object}
 * @property {String} engine  - 布局引擎，trident/webkit/gecko/presto...
 * @property {Number} release - 布局引擎版本
 * @property {String} browser - 浏览器名称，ie/chrome/safari/opera/firefox/maxthon...
 * @property {Number} version - 浏览器版本
 * @property {Object} prefix  - 平台前缀，html5/css3 attribute/method/constructor
 */
var _kernel = {
    engine: 'unknow',
    release: 'unknow',
    browser: 'unknow',
    version: 'unknow',
    prefix: {
        css: '',
        pro: '',
        clz: ''
    }
};
_p._$KERNEL = _kernel;
if (/msie\s+(.*?);/i.test(_useragent) ||
    /trident\/.+rv:([\d\.]+)/i.test(_useragent)) {
    _kernel.engine = 'trident';
    _kernel.browser = 'ie';
    _kernel.version = RegExp.$1;
    _kernel.prefix = {
        css: 'ms',
        pro: 'ms',
        clz: 'MS',
        evt: 'MS'
    };
    // 4.0-ie8 5.0-ie9 6.0-ie10 7.0-ie11
    // adjust by document mode setting in develop toolbar
    var _test = {
        6: '2.0',
        7: '3.0',
        8: '4.0',
        9: '5.0',
        10: '6.0',
        11: '7.0'
    };
    _kernel.release = _test[document.documentMode] ||
        _test[parseInt(_kernel.version)];
} else if (/webkit\/?([\d.]+?)(?=\s|$)/i.test(_useragent)) {
    _kernel.engine = 'webkit';
    _kernel.release = RegExp.$1 || '';
    _kernel.prefix = {
        css: 'webkit',
        pro: 'webkit',
        clz: 'WebKit'
    };
} else if (/rv\:(.*?)\)\s+gecko\//i.test(_useragent)) {
    _kernel.engine = 'gecko';
    _kernel.release = RegExp.$1 || '';
    _kernel.browser = 'firefox';
    _kernel.prefix = {
        css: 'Moz',
        pro: 'moz',
        clz: 'Moz'
    };
    if (/firefox\/(.*?)(?=\s|$)/i.test(_useragent))
        _kernel.version = RegExp.$1 || '';
} else if (/presto\/(.*?)\s/i.test(_useragent)) {
    _kernel.engine = 'presto';
    _kernel.release = RegExp.$1 || '';
    _kernel.browser = 'opera';
    _kernel.prefix = {
        css: 'O',
        pro: 'o',
        clz: 'O'
    };
    if (/version\/(.*?)(?=\s|$)/i.test(_useragent))
        _kernel.version = RegExp.$1 || '';
}
if (_kernel.browser == 'unknow') {
    var _test = ['chrome', 'maxthon', 'safari'];
    for (var i = 0, l = _test.length, _name; i < l; i++) {
        if (_test[i] == 'safari') {
            _name = 'version';
        } else if (_test[i] == 'chrome') {
            _name = '[chrome|CriOS]'; // CriOS is Google Chrome for iOS
        } else {
            _name = _test[i];
        }
        if (new RegExp(_name + '/(.*?)(?=\\s|$)', 'i').test(_useragent)) {
            _kernel.browser = _test[i];
            _kernel.version = RegExp.$1.trim();
            break;
        }
    }
}
/**
 * 引擎特性支持信息
 * 
 * ```javascript
 * NEJ.define([
 *     'base/platform'
 * ],function(_m){
 *     var _support = _m._$SUPPORT;
 *     // 打印平台是否支持CSS3 3D特效
 *     console.log(_support.css3d);
 * });
 * ```
 * @const    module:base/platform._$SUPPORT
 * @see      module:base/platform._$support
 * @type     {Object}
 * @property {Boolean} css3d  - 是否支持CSS3 3D
 */
_p._$SUPPORT = {};
/**
 * 判断平台是否支持指定特性
 * 
 * ```javascript
 * NEJ.define([
 *     'base/platform'
 * ],function(_m){
 *     // 是否支持CSS3 3D特效
 *     console.log(_m._$support('css3d'));
 * });
 * ```
 * 
 * @method module:base/platform._$support
 * @see    module:base/platform._$SUPPORT
 * @param  {String} arg0 - 特性标识
 * @return {Boolean}       是否支持指定特性
 */
_p._$support = function(_feature) {
    return !!_p._$SUPPORT[_feature];
};

if (true) {
    NEJ.copy(NEJ.P('nej.p'), _p);
}

module.exports = _p;this.NEJ = this.NEJ || {};
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
}.call(window));

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

/*** IMPORTS FROM imports-loader ***/
(function() {

/*
 * ------------------------------------------
 * 节点接口实现文件
 * @version  1.0
 * @author   genify(caijf)
 * ------------------------------------------
 */
/** @module base/element */
var NEJ = __webpack_require__(1);
var _g = __webpack_require__(10);
var _u = __webpack_require__(0);
var _v = __webpack_require__(11);
var _x = __webpack_require__(4);
var _h = __webpack_require__(6);
__webpack_require__(13);
var _p = {};
var _o = {};
var _f = function() {
    return !1;
};
var _r = [];
// variables
var _y = {}, // chainable methods
    _cspol, // css text pool
    _empol = {}, // elements without id property, eg. document,window
    _dirty = {}, // temporary element with id
    _fragment = document.createDocumentFragment(); // node in memory
// init
if (!document.head) {
    document.head = document.getElementsByTagName('head')[0] || document.body;
}
// only for test
_p.dump = function() {
    return {
        pool: _empol,
        dirty: _dirty,
        fragment: _fragment
    };
};
/**
 * 为节点设置一个唯一的标识
 *
 * 结构举例
 * ```html
 *    <div id="abc">aaaaa</div>
 * ```
 *
 * 脚本举例
 * ```javascript
 *   NEJ.define([
 *       'base/element'
 *   ],function(_e){
 *       // 如果有id，返回原来的id,否则返回auto-id-12345678(8位随机字符串)
 *       var _id = _e._$id(_node||"abc");
 *   });
 * ```
 *
 * @method module:base/element._$id
 * @param  {String|Node} arg0 - 节点标识或者对象
 * @return {String}             节点标识
 */
/**
 * @method CHAINABLE._$id
 * @see module:base/element._$id
 */
_p._$id =
    _y._$id = function(_element) {
        _element = _p._$get(_element);
        if (!_element) return;
        var _id = !!_element.id ? _element.id :
            'auto-id-' + _u._$uniqueID();
        if (!('id' in _element)) {
            _empol[_id] = _element;
        }
        _element.id = _id;
        // check if element can be getted
        if (!_p._$get(_id)) {
            _dirty[_id] = _element;
        }
        return _id;
    };
/**
 * 根据标识取节点对象，包括在内存中的节点
 *
 * 结构举例
 * ```html
 *   <div id="abc">123</div>
 * ```
 *
 * 脚本举例
 * ```javascript
 *   NEJ.define([
 *       'base/element'
 *   ],function(_e){
 *       // 先根据id从内存中取，再从页面取
 *       var _node = _e._$get("abc");
 *   });
 * ```
 *
 * @method module:base/element._$get
 * @param  {String|Node} arg0 - 节点标识或者对象
 * @return {Node}               节点对象
 */
_p._$get = function(_element) {
    // for document/window
    // fix dirty window object in mac safari
    try {
        var _node = _empol['' + _element];
    } catch (ex) {
        // ignore
    }
    if (!!_node) {
        return _node;
    }
    // element is node
    if (!_u._$isString(_element) &&
        !_u._$isNumber(_element)) {
        return _element;
    }
    // element is id
    // check node in page first
    var _node = document.getElementById(_element);
    if (!_node) {
        _node = _h.__getElementById(_fragment, _element);
    }
    // remove dirty element
    if (!!_node) {
        delete _dirty[_element];
    }
    return _node || _dirty[_element];
};
/**
 * 取节点的子节点列表
 *
 * 结构举例
 * ```html
 *   <div id="abc">
 *       <p>1</p>
 *       <p><span>2</span></p>
 *       <p>3</p>
 *   </div>
 * ```
 *
 * 脚本举例
 * ```javascript
 *   NEJ.define([
 *       'base/element'
 *   ],function(_e){
 *       // 取直接的3个子节点(p标签)
 *       var _childs = _e._$getChildren('abc');
 *
 *       // 使用类名过滤，去带a或者b样式类的子节点
 *       var _childs = _e._$getChildren('abc','a b');
 *   });
 * ```
 *
 * @method module:base/element._$getChildren
 * @param  {String|Node} arg0 - 节点标识或者对象
 * @param  {String}      arg1 - 样式标识
 * @return {Array}              子节点列表
 */
/**
 * @method CHAINABLE._$getChildren
 * @see module:base/element._$getChildren
 */
_p._$getChildren =
    _y._$getChildren = function(_element, _clazz) {
        _element = _p._$get(_element);
        if (!_element) return null;
        var _list = _h.__getChildren(_element);
        if (!!_clazz) {
            _u._$reverseEach(
                _list,
                function(_node, _index, _list) {
                    if (!_p._$hasClassName(_node, _clazz)) {
                        _list.splice(_index, 1);
                    }
                }
            );
        }
        return _list;
    };
/**
 * 根据过滤条件取第一个满足条件的父节点
 *
 * 结构举例
 * ```html
 *   <div data-a="aaa">
 *       <p>1</p>
 *       <div a="aaaaaa">
 *           <p class="a">
 *               <span id="abc">2</span>
 *           </p>
 *       </div>
 *       <p>3</p>
 *   </div>
 * ```
 *
 * 脚本举例
 * ```javascript
 *   NEJ.define([
 *       'base/element'
 *   ],function(_e){
 *       // 返回包含样式a的节点 <p class="a">
 *       var node = _e._$getParent('abc','c:a');
 *
 *       // 返回包含属性a的节点 <div a="aaaaaa">
 *       var node = _e._$getParent('abc','a:a')
 *
 *       // 返回包含data属性a的节点 <div data-a="aaa">
 *       var node = _e._$getParent('abc','d:a');
 *
 *       // 返回标签为p的节点 <p class="a">
 *       var node = _e._$getParent('abc','t:p');
 *
 *       // 返回符合过滤条件的父节点
 *       var node = _e._$getParent('abc',function(_element){
 *           return _element.scrollHeight>_element.clientHeight;
 *       });
 *   });
 * ```
 *
 * @method module:base/element._$getChildren
 * @param  {String|Node}      arg0 - 节点标识或者对象
 * @param  {String|Function}  arg1 - 过滤规则
 * @return {Node}             父节点
 */
_p._$getParent = (function() {
    var _exmap;
    var _doFilter = function(_name, _element) {
        var _arr = _name.split(':');
        if (_arr.length > 1) {
            if (!_exmap) {
                _exmap = {
                    a: _p._$attr,
                    d: _p._$dataset,
                    c: _p._$hasClassName,
                    t: function(n, v) {
                        return (n.tagName || '').toLowerCase() === v;
                    }
                };
            }
            var _check = _exmap[_arr[0]];
            if (!!_check) {
                return !!_check(_element, _arr[1]);
            }
            _name = _arr[1];
        }
        return !!_p._$attr(_element, _name) ||
            !!_p._$dataset(_element, _name) ||
            _p._$hasClassName(_element, _name);
    };
    return function(_element, _filter) {
        _element = _p._$get(_element);
        if (!_element) {
            return;
        }
        if (!_filter) {
            return _element;
        }
        if (_u._$isString(_filter)) {
            _filter = _doFilter._$bind(null, _filter);
        }
        if (_u._$isFunction(_filter)) {
            while (_element) {
                if (!!_filter(_element)) {
                    return _element;
                }
                _element = _element.parentNode;
            }
            return null;
        }
        return _element;
    };
})();
/**
 * 根据类名取节点列表
 *
 * 结构举例
 * ```html
 *   <div id="abc">
 *     <p class="item">1</p>
 *     <div><p class="item">2</p></div>
 *     <p class="item">3</p>
 *   </div>
 * ```
 *
 * 脚本举例
 * ```javascript
 *   NEJ.define([
 *       'base/element'
 *   ],function(_e){
 *       // 获取abc节点下样式带有"item"的节点列表,如果没有父节点，返回null
 *       var _list = _e._$getByClassName('abc','item');
 *   });
 * ```
 *
 * @method module:base/element._$getByClassName
 * @param  {String|Node} arg0 - 节点标识或者对象
 * @param  {String}      arg1 - 类名
 * @return {Array}              节点列表
 */
/**
 * @method CHAINABLE._$getByClassName
 * @see module:base/element._$getByClassName
 */
_p._$getByClassName =
    _y._$getByClassName = function(_element, _class) {
        _element = _p._$get(_element);
        return !_element ? null :
            _h.__getElementsByClassName(
                _element, _class.trim()
            );
    };
/**
 * 根据从兄弟节点中搜索符合条件的节点
 *
 * 结构举例
 * ```html
 *   <div>
 *     <p class="item" id="a1">1</p>
 *     <p class="item" id="a2">2</p>
 *     <p class="item" id="a3">3</p>
 *   </div>
 * ```
 *
 * 脚本举例
 * ```javascript
 *   NEJ.define([
 *       'base/element'
 *   ],function(_e){
 *       // 取a2的后一个兄弟节点a3
 *       var _node = _e._$getSibling('a2');
 *
 *       // 取a2的前一个兄弟节点a1
 *       var _node = _e._$getSibling('a2',{backward:true});
 *
 *       // 过滤搜索，从a2向后搜索找id为a4的节点
 *       var _node = _e._$getSibling('a2',function(_element){
 *           return _element.id=='a4'
 *       });
 *
 *       // 过滤搜索，从a2向前搜索找id为a0的节点
 *       var _node = _e._$getSibling('a2',{
 *           backward:true,
 *           filter:function(_element){
 *               return _element.id=='a0'
 *           }
 *       });
 *   });
 * ```
 *
 * @method   module:base/element._$getSibling
 * @param    {String|Node}     arg0     - 节点标识或者对象
 * @param    {Function|Object} arg1     - 如果是函数则表示过滤器，否则为配置信息
 * @property {Boolean}         backward - 是否后向搜索，默认前向搜索
 * @property {Function}        filter   - 节点过滤器，返回true表示需要返回的节点，找到第一个即返回
 * @return   {Node}                       符合条件的节点
 */
/**
 * @method CHAINABLE._$getSibling
 * @see module:base/element._$getSibling
 */
_p._$getSibling =
    _y._$getSibling = (function() {
        var _doFilter = function() {
            return !0;
        };
        return function(_element, _filter) {
            _element = _p._$get(_element);
            if (!_element) {
                return null;
            }
            var _conf = {
                backward: !1,
                filter: _doFilter
            };
            if (_u._$isFunction(_filter)) {
                _conf.filter = _filter;
            } else {
                _conf = _u._$fetch(_conf, _filter);
            }
            var _next = _conf.backward ?
                _h.__previousSibling :
                _h.__nextSibling;
            while (_element = _next(_element)) {
                if (_conf.filter(_element)) {
                    break;
                }
            }
            return _element;
        };
    })();
/**
 * 取节点所在的滚动容器，
 * 从当前节点开始往上遍历，直到出现滚动条的节点
 *
 * 结构举例
 * ```html
 *   <div id="efg">
 *     <div id="abc">123</div>
 *   </div>
 * ```
 *
 * 脚本举例
 * ```javascript
 *   NEJ.define([
 *       'base/element'
 *   ],function(_e){
 *       // 加入efg节点出现滚动条，则这里找到的是efg节点
 *       var _sbody = _e._$getScrollViewPort('abc');
 *
 *       // 不带任何参数取页面滚动条所在节点
 *       var _sbody = _e._$getScrollViewPort();
 *   });
 * ```
 *
 * @method module:base/element._$getScrollViewPort
 * @param  {String|Node} arg0 - 节点标识或者对象
 * @return {Node}               视窗节点
 */
_p._$getScrollViewPort = function(_element) {
    _element = _p._$get(_element);
    if (!!_element) {
        _element = _element.parentNode;
        while (!!_element) {
            if (_element.scrollHeight >
                _element.clientHeight) {
                break;
            }
            _element = _element.parentNode;
        }
        if (!!_element) {
            return _element;
        }
    }
    var _tmp1 = document.body.scrollHeight,
        _tmp2 = document.documentElement.scrollHeight;
    return _tmp2 >= _tmp1 ? document.documentElement : document.body;
};
/**
 * 盒模型结构
 *
 * @typedef  {Object} module:base/element~BoxModel
 * @property {Number} scrollTop    - 滚动垂直偏移
 * @property {Number} scrollLeft   - 滚动水平偏移
 * @property {Number} clientWidth  - 页面可视宽度
 * @property {Number} clientHeight - 页面可视高度
 * @property {Number} scrollWidth  - 页面滚动宽度
 * @property {Number} scrollHeight - 页面滚动高度
 */
/**
 * 取页面盒信息，返回盒信息内容：
 *
 * 脚本举例
 * ```javascript
 *   NEJ.define([
 *       'base/element'
 *   ],function(_e){
 *       // 返回信息见说明
 *       var _box = _e._$getPageBox();
 *   });
 * ```
 *
 * @method module:base/element._$getPageBox
 * @param  {Document} arg0 - 文档对象
 * @return {module:base/element~BoxModel} 盒信息
 */
_p._$getPageBox = (function() {
    // get min value but not zero
    var _getClientBox = function(_list) {
        var _result = 0;
        _u._$forEach(
            _list,
            function(_size) {
                if (!_size) return;
                if (!_result) {
                    _result = _size;
                } else {
                    _result = Math.min(_result, _size);
                }
            }
        );
        return _result;
    };
    var _farr = [{
            main: 'scroll',
            sub: ['Top', 'Left'],
            func: function(_key, _body0, _body1) {
                return Math.max(
                    _body0['scroll' + _key],
                    _body1['scroll' + _key]
                );
            }
        },
        {
            main: 'client',
            sub: ['Width', 'Height'],
            func: function(_key, _body0, _body1) {
                return _getClientBox([
                    _body0['client' + _key],
                    _body0['offset' + _key],
                    _body1['client' + _key],
                    _body1['offset' + _key]
                ]);
            }
        },
        {
            main: 'scroll',
            sub: ['Width', 'Height'],
            func: function(_key, _body0, _body1, _result) {
                return Math.max(
                    _result['client' + _key],
                    _body0['scroll' + _key],
                    _body1['scroll' + _key]
                );
            }
        }
    ];
    return function(_document) {
        var _result = {},
            _doc = _document || document,
            _body0 = _doc.body,
            _body1 = _doc.documentElement;
        _u._$forEach(
            _farr,
            function(_item) {
                var _main = _item.main;
                _u._$forEach(
                    _item.sub,
                    function(_key) {
                        _result[_main + _key] = _item.func(
                            _key, _body0, _body1, _result
                        );
                    }
                );
            }
        );
        return _result;
    };
})();
/**
 * 按比例将给定大小缩放至限制区域内
 *
 * 脚本举例
 * ```javascript
 *   NEJ.define([
 *       'base/element'
 *   ],function(_e){
 *       // 限制区域大小 100*10
 *       var _limit = {width:100,height:10};
 *
 *       // 给定200*10的大小，由于宽度超出，缩放后为{width:100,height:5}
 *       var _box = _e._$getMaxBox({width:200,height:10},_limit);
 *
 *       // 给定100*20的大小，由于高度超出，缩放后为{width:50,height:10}
 *       var _box = _e._$getMaxBox({width:100,height:20},_limit);
 *
 *       // 给定 50*5，没有超出限制，返回{width:50,height:5}
 *       var _box = _e._$getMaxBox({width:50,height:5},_limit);
 *   });
 * ```
 *
 * @method   module:base/element._$getMaxBox
 * @param    {module:base/element~SizeModel} arg0 - 原始大小
 * @param    {module:base/element~SizeModel} arg1 - 最大限制大小
 * @return   {module:base/element~SizeModel}        按比例计算出的最大值信息
 */
_p._$getMaxBox = function(_org, _max) {
    var _result = _u._$merge({}, _org),
        _mrto = _max.width / _max.height,
        _orto = _org.width / _org.height;
    // height overflow
    if (_mrto > _orto &&
        _org.height > _max.height) {
        _result.height = _max.height;
        _result.width = _result.height * _orto;
    }
    // width overflow
    if (_mrto < _orto &&
        _org.width > _max.width) {
        _result.width = _max.width;
        _result.height = _result.width / _orto;
    }
    return _result;
};
/**
 * 滚动到指定节点
 *
 * 结构举例
 * ```html
 *   <div id="a" style="padding:5px 0 0 10px;"></div>
 * ```
 *
 * 脚本举例
 * ```javascript
 *   NEJ.define([
 *       'base/element'
 *   ],function(_e){
 *       // 滚动到页面上a这节点的位置
 *       _e._$scrollTo('a');
 *   });
 * ```
 *
 * @method module:base/element._$scrollTo
 * @param  {Node|String} arg0 - 节点
 * @return {Void}
 */
/**
 * @method CHAINABLE._$scrollTo
 * @see module:base/element._$scrollTo
 */
_p._$scrollTo =
    _y._$scrollTo = function(_element) {
        var _offset = _p._$offset(_element);
        window.scrollTo(_offset.x, _offset.y);
    };
/**
 * 大小信息对象
 * @typedef  {Object} module:base/element~SizeModel
 * @property {Number} width  - 宽度
 * @property {Number} height - 高度
 */
/**
 * 位置信息对象
 * @typedef  {Object} module:base/element~PositionModel
 * @property {Number} top  - 垂直位置
 * @property {Number} left - 水平位置
 */
/**
 * 计算在容器中对齐时的位置信息
 *
 * 脚本举例
 * ```javascript
 *   NEJ.define([
 *       'base/element'
 *   ],function(_e){
 *       // 容器大小
 *       var _box = {width:100,height:40};
 *
 *       // 默认居中对齐返回 {top:15,left:40}
 *       var _pos = _e._$align(_box,{width:20,height:10});
 *
 *       // 左下对齐返回 {top:30,left:0}
 *       var _pos = _e._$align(_box,{width:20,height:10},'left bottom');
 *   });
 * ```
 *
 * @method module:base/element._$align
 * @param  {module:base/element~SizeModel} arg0 - 容器大小
 * @param  {module:base/element~SizeModel} arg1 - 原始大小
 * @param  {String} arg2 - 对齐方式，水平+空格+垂直，如left top，默认为 center middle，
 *                         水平：left/center/right，
 *                         垂直：top/middle/bottom
 * @return {module:base/element~PositionModel} 位置信息
 */
_p._$align = (function() {
    var _reg = /\s+/;
    var _fmap = {
        left: function() {
            return 0;
        },
        center: function(_box, _org) {
            return (_box.width - _org.width) / 2;
        },
        right: function(_box, _org) {
            return _box.width - _org.width;
        },
        top: function() {
            return 0;
        },
        middle: function(_box, _org) {
            return (_box.height - _org.height) / 2;
        },
        bottom: function(_box, _org) {
            return _box.height - _org.height;
        }
    };
    return function(_box, _org, _align) {
        var _result = {},
            _arr = (_align || '').split(_reg),
            _top = _fmap[_arr[1]] || _fmap.middle,
            _left = _fmap[_arr[0]] || _fmap.center;
        _result.top = _top(_box, _org);
        _result.left = _left(_box, _org);
        return _result;
    };
})();
/**
 * 计算两个节点之间的偏移量
 *
 * 结构举例
 * ```html
 *   <div id="a" style="position:relative;padding:5px 0 0 10px;">
 *     <span id="b">123</span>
 *   </div>
 * ```
 *
 * 脚本举例
 * ```javascript
 *   NEJ.define([
 *       'base/element'
 *   ],function(_e){
 *       // 计算节点b到节点a(外层需要定位属性)的距离，如果没有指定节点，默认计算的根节点
 *       // _result : {x:10,y:5}
 *       var _result = _e._$offset('b','a');
 *   });
 * ```
 *
 * @method module:base/element._$offset
 * @param  {String|Node} arg0 - 起始节点
 * @param  {String|Node} arg1 - 结束节点，没有该参数则计算到根节点
 * @return {Object}             偏移量，如{x:234,y:987}
 */
/**
 * @method CHAINABLE._$offset
 * @see module:base/element._$offset
 */
_p._$offset =
    _y._$offset = (function() {
        var _isRoot = function(_element) {
            return _element == document.body ||
                _element == document.documentElement;
        };
        return function(_from, _to) {
            _from = _p._$get(_from);
            if (!_from) {
                return null;
            }
            _to = _p._$get(_to) || null;
            var _node = _from,
                _result = {
                    x: 0,
                    y: 0
                },
                _isroot, _delta, _border;
            while (!!_node && _node != _to) {
                _isroot = _isRoot(_node) || _node == _from;
                _delta = _isroot ? 0 : _node.scrollLeft;
                _border = parseInt(_p._$getStyle(_node, 'borderLeftWidth')) || 0;
                _result.x += _node.offsetLeft + _border - _delta;
                _delta = _isroot ? 0 : _node.scrollTop;
                _border = parseInt(_p._$getStyle(_node, 'borderTopWidth')) || 0;
                _result.y += _node.offsetTop + _border - _delta;
                _node = _node.offsetParent;
            }
            return _result;
        };
    })();
/**
 * 节点占全屏
 *
 * @method module:base/element._$fullScreen
 * @param  {Node} arg0 - 节点
 * @return {Void}
 */
/**
 * @method CHAINABLE._$fullScreen
 * @see module:base/element._$fullScreen
 */
_p._$fullScreen =
    _y._$fullScreen = function(_element) {
        _element = _p._$get(_element);
        if (!!_element) {
            _h.__fullScreen(
                _element,
                _p._$getPageBox()
            );
        }
    };
/**
 * 为节点增加用于盖select/flash等控件的层
 *
 * @method module:base/element._$mask
 * @see    module:base/element._$unmask
 * @param  {Node} arg0 - 节点
 * @return {Node}        盖层节点
 */
/**
 * @method CHAINABLE._$mask
 * @see module:base/element._$mask
 */
_p._$mask =
    _y._$mask = function(_element) {
        _element = _p._$get(_element);
        if (!!_element) {
            _p._$id(_element);
            return _h.__mask(_element);
        }
        return null;
    };
/**
 * 为节点移除用于盖select/flash等控件的层
 *
 * @method module:base/element._$unmask
 * @see    module:base/element._$mask
 * @param  {Node} arg0 - 节点
 * @return {Node}        盖层节点
 */
/**
 * @method CHAINABLE._$unmask
 * @see module:base/element._$unmask
 */
_p._$unmask =
    _y._$unmask = function(_element) {
        _element = _p._$get(_element);
        if (!!_element) {
            _p._$id(_element);
            return _h.__unmask(_element);
        }
        return null;
    };
/**
 * 创建节点，使用该接口创建的结构后续可通过_$get接口根据ID取到节点
 *
 * 结构举例
 * ```javascript
 *   <div id="abc">1</div>
 * ```
 *
 * 脚本举例
 * ```javascript
 *   NEJ.define([
 *       'base/element'
 *   ],function(_e){
 *       // 创建一个节点，挂到body上
 *       _e._$create("div","m-body",document.body);
 *
 *       // 创建一个节点挂到id是abc的节点上
 *       // 结果：<div id="abc">1<p class="m-list"></p></div>
 *       _e._$create("p","m-list","abc");
 * 
 *       // 创建一个节点放在内存中
 *       var _node = _e._$create('div');
 *       _node.innerHTML = '<p id="a">aaaaaa</p><p id="b">bbbbbb</p>';
 *       // 后续可以通过id取id为a的节点
 *       var _pa = _e._$get('a');
 *   });
 * ```
 *
 * @method module:base/element._$create
 * @param  {String}      arg0 - 标签
 * @param  {String}      arg1 - 样式
 * @param  {String|Node} arg2 - 父节点标识或者对象
 * @return {Node}               节点
 */
_p._$create = (function() {
    var _map = {
        a: {
            href: '#',
            hideFocus: !0
        },
        style: {
            type: 'text/css'
        },
        link: {
            type: 'text/css',
            rel: 'stylesheet'
        },
        iframe: {
            frameBorder: 0
        },
        script: {
            defer: !0,
            type: 'text/javascript'
        }
    };
    return function(_tag, _class, _parent) {
        var _element = document.createElement(_tag),
            _config = _map[_tag.toLowerCase()];
        _u._$merge(_element, _config);
        if (!!_class) _element.className = _class;
        _parent = _p._$get(_parent);
        if (!!_parent) {
            _parent.appendChild(_element);
        } else {
            // append to documentfragment for get by id
            if (!_config) {
                _fragment.appendChild(_element);
            }
        }
        return _element;
    };
})();
/**
 * 创建可交互框架
 *
 * 结构举例
 * ```html
 *   <div id="frameCnt"></div>
 * ```
 *
 * 脚本举例
 * ```javascript
 *   NEJ.define([
 *       'base/element'
 *   ],function(_e){
 *      var _xFrame = _e._$createXFrame({
 *          src:'http://www.baidu.com',
 *          name:'百度',
 *          parent:'frameCnt',
 *          visible:false,
 *          onload:function(){
 *              // 加载frame成功后，name设置成功，为百度
 *              // 加载frame成功后，显示效果正确，display:none
 *          }
 *      });
 *   });
 * ```
 *
 * @method   module:base/element._$createXFrame
 * @param    {Object}               arg0    - 可选配置参数
 * @property {String}               src     - 框架地址
 * @property {String}               name    - 框架名称
 * @property {String|Node|Function} parent  - 父节点或者框架加入父容器的执行函数
 * @property {Boolean}              visible - 是否可见
 * @property {Function}             onload  - 框架载入回调
 * @return {Node}                             框架节点
 */
_p._$createXFrame = (function() {
    var _getFrameSrc = function() {
        if (location.hostname == document.domain) {
            return 'about:blank';
        }
        return 'javascript:(function(){document.open();document.domain="' + document.domain + '";document.close();})();';
    };
    var _getFrameWithName = function(_name) {
        _name = _name.trim();
        if (!_name) {
            return _p._$create('iframe');
        }
        // pass name to frame
        var _iframe;
        try {
            _iframe = document.createElement(
                '<iframe name="' + _name + '"></iframe>');
            _iframe.frameBorder = 0;
        } catch (e) {
            _iframe = _p._$create('iframe');
            _iframe.name = _name;
        }
        return _iframe;
    };
    return function(_options) {
        _options = _options || _o;
        var _iframe = _getFrameWithName(_options.name || '');
        if (!_options.visible) {
            _iframe.style.display = 'none';
        }
        if (_u._$isFunction(_options.onload)) {
            _v._$addEvent(_iframe, 'load', function(_event) {
                if (!_iframe.src) return;
                _v._$clearEvent(_iframe, 'load');
                _options.onload(_event);
            });
        }
        // will trigger onload
        var _parent = _options.parent;
        if (_u._$isFunction(_parent)) {
            try {
                _parent(_iframe);
            } catch (e) {}
        } else {
            (_p._$get(_parent) || document.body).appendChild(_iframe);
        }
        // ensure trigger onload async
        var _src = _options.src || _getFrameSrc();
        window.setTimeout(function() {
            _iframe.src = _src;
        }, 0);
        return _iframe;
    };
})();
/**
 * 删除节点
 *
 * 结构举例
 * ```html
 *   <div id="abc">123</div>
 * ```
 *
 * 脚本举例
 * ```javascript
 *   NEJ.define([
 *       'base/element'
 *   ],function(_e){
 *       // 移除节点前先清理节点上的事件
 *       _e._$remove('abc',false);
 *       // 移除节点前不清理节点上的事件
 *       _e._$remove('abc',true);
 *   });
 * ```
 *
 * @method module:base/element._$remove
 * @see    module:base/element._$removeByEC
 * @param  {String|Node} arg0 - 节点标识或者对象
 * @param  {Boolean}     arg1 - 是否禁止事件清理
 * @return {Void}
 */
/**
 * @method CHAINABLE._$remove
 * @see module:base/element._$remove
 */
_p._$remove =
    _y._$remove = (function() {
        var _fmap = {
            img: function(_node) {
                _node.src = _g._$BLANK_IMAGE;
            },
            iframe: function(_node) {
                _node.src = 'about:blank';
            }
        };
        var _doClear = function(_node, _tag) {
            if (!_tag) {
                var _xtag = (_node.tagName || '').toLowerCase(),
                    _func = _fmap[_xtag];
                if (!!_func) {
                    _func(_node);
                }
                return;
            }
            if (!!_node.getElementsByTagName) {
                _u._$forEach(
                    _node.getElementsByTagName(_tag),
                    _doClear
                );
            }
        };
        return function(_element) {
            _element = _p._$get(_element);
            if (!!_element) {
                // clear events
                if (!arguments[1]) {
                    _v._$clearEvent(_element);
                }
                // clear elements
                _doClear(_element);
                _doClear(_element, 'img');
                _doClear(_element, 'iframe');
                // remove node
                if (!!_element.parentNode) {
                    _element.parentNode.removeChild(_element);
                }
            }
        };
    })();
/**
 * 节点移至内存
 *
 * 脚本举例
 * ```javascript
 *   NEJ.define([
 *       'base/element'
 *   ],function(_e){
 *       // 先生成一个节点加到body下
 *       var _node = _e._$create('div','js-div',document.body);
 *       // 把节点移动到内存中
 *       _e._$removeByEC(_node);
 *       // 从body上没有取到节点,结果为[]
 *       _e._$getByClassName(document.body,'js-div');
 *   });
 * ```
 *
 * @method module:base/element._$removeByEC
 * @see    module:base/element._$remove
 * @param  {String|Node} arg0 - 节点标识或者对象
 * @return {Void}
 */
/**
 * @method CHAINABLE._$removeByEC
 * @see module:base/element._$removeByEC
 */
_p._$removeByEC =
    _y._$removeByEC = function(_element) {
        _element = _p._$get(_element);
        if (!!_element) {
            try {
                _fragment.appendChild(_element);
            } catch (ex) {
                // ignore
                console.error(ex);
            }
        }
    };
/**
 * 清除所有子节点
 *
 * 结构举例
 * ```html
 *   <ul id="abc">
 *     <li>aaaaaaaaaaaaa</li>
 *     <li>bbbbbbbbbbbbb</li>
 *     <li>ccccccccccccc</li>
 *   </ul>
 *
 *   <table id="efg">
 *     <tr><td>1111</td><td>1111</td></tr>
 *     <tr><td>2222</td><td>2222</td></tr>
 *     <tr><td>3333</td><td>3333</td></tr>
 *   </table>
 * ```
 *
 * 脚本举例
 * ```javascript
 *   NEJ.define([
 *       'base/element'
 *   ],function(_e){
 *       // 清除ul下的子节点
 *       _e._$clearChildren('abc');
 *
 *       // 清除table下的子节点
 *       _e._$clearChildren('efg');
 *   });
 * ```
 *
 * @method module:base/element._$clearChildren
 * @see    module:base/element._$remove
 * @param  {String|Node} arg0 - 容器节点
 * @return {Void}
 */
/**
 * @method CHAINABLE._$clearChildren
 * @see module:base/element._$clearChildren
 */
_p._$clearChildren =
    _y._$clearChildren = function(_element) {
        _element = _p._$get(_element);
        if (!!_element) {
            _u._$reverseEach(
                _element.childNodes,
                function(_node) {
                    _p._$remove(_node);
                }
            );
        }
    };
/**
 * 内联元素增加定位封装
 *
 * 结构举例
 * ```html
 *   <input type="text" id="abc"/>
 * ```
 *
 * 脚本举例
 * ```javascript
 *   NEJ.define([
 *       'base/element'
 *   ],function(_e){
 *       // 包装定位的span
 *       _e._$wrapInline('abc');
 *   });
 * ```
 *
 * 生成结构如下
 * ```html
 *   <span style="position:relative;zoom:1">
 *     <input type="text" id="abc"/>
 *     <!-- 此api返回以下这个节点 -->
 *     <span style="position:absolute;top:0;left:0;"></span>
 *   </span>
 * ```
 *
 * 应用举例
 * ```javascript
 *   NEJ.define([
 *       'base/element'
 *   ],function(_e){
 *       // 返回容器的样式名称
 *       // 通过这个样式名称可以取到一个绝对定位的样式名 class+'-show'
 *       var _node = _e._$wrapInline('abc',{
 *           tag:'label',
 *           clazz:'js-xxx'
 *       });
 *       // 可以在返回的节点里添加想要显示的结构
 *       _node.innerHTML = '<span>aaa</span><span>aaa</span>';
 *   });
 * ```
 *
 * @method   module:base/element._$wrapInline
 * @param    {String|Node}  arg0  - 内联节点
 * @param    {Object}       arg1  - 绝对定位节点配置信息
 * @property {String}       tag   - 标记名称，默认span
 * @property {String}       nid   - 节点识别样式名，这个会被添加到样式中作为标识
 * @property {String}       clazz - 样式名称
 * @return   {Node}                 绝对定位的节点
 */
/**
 * @method CHAINABLE._$wrapInline
 * @see module:base/element._$wrapInline
 */
_p._$wrapInline =
    _y._$wrapInline = (function() {
        var _clazz,
            _reg0 = /\s+/;
        var _doInitStyle = function() {
            if (!!_clazz) return;
            _clazz = _p._$pushCSSText('.#<uispace>{position:relative;zoom:1;}.#<uispace>-show{position:absolute;top:0;left:100%;cursor:text;white-space:nowrap;overflow:hidden;}');
            _p._$dumpCSSText();
        };
        return function(_element, _options) {
            _element = _p._$get(_element);
            if (!_element) {
                return null;
            }
            // init style
            _doInitStyle();
            _options = _options || _o;
            // check relative parent
            var _parent = _element.parentNode;
            if (!_p._$hasClassName(_parent, _clazz)) {
                // build wrapper box
                _parent = _p._$create('span', _clazz);
                _element.insertAdjacentElement('beforeBegin', _parent);
                _parent.appendChild(_element);
            }
            // check absolute node
            var _nid = _options.nid || '',
                _node = _p._$getByClassName(
                    _parent, _nid ||
                    (_clazz + '-show')
                )[0];
            if (!_node) {
                var _klass = ((_options.clazz || '') + ' ' + _nid).trim();
                _klass = _clazz + '-show' + (!_klass ? '' : ' ') + _klass;
                _node = _p._$create(_options.tag || 'span', _klass);
                _parent.appendChild(_node);
            }
            // append class to parent node
            var _klass = _options.clazz;
            if (!!_klass) {
                _klass = (_klass || '').trim().split(_reg0)[0] + '-parent';
                _p._$addClassName(_parent, _klass);
            }
            return _node;
        };
    })();
/**
 * 设置或者获取指定标识的数据
 *
 * 结构举例
 * ```html
 *   <div id="abc">123</div>
 * ```
 *
 * 脚本举例
 * ```javascript
 *   NEJ.define([
 *       'base/element'
 *   ],function(_e){
 *       // 设置值操作
 *       // <div id="abc" data-img="http://a.b.com/a.png">123</div>
 *       // 返回value值: http://a.b.com/a.png
 *       var _src = _e._$dataset('abc','img','http://a.b.com/a.png');
 *       // 取值操作
 *       var _src = _e._$dataset('abc','img');
 * 
 *       // 批量设置
 *       var _map = _e._$dataset('abc',{
 *           a:'aaaaa',
 *           b:'bbbbbbbb',
 *           c:'ccccccccc'
 *       });
 * 
 *       // 批量取值
 *       // 返回：{a:'aaaaa',b:'bbbbbbbb',c:'ccccccccc'}
 *       var _map = _e._$dataset('abc',['a','b','c']);
 *   });
 * ```
 *
 * @method module:base/element._$dataset
 * @see    module:base/element._$attr
 * @param  {String}              arg0 - 数据标识
 * @param  {String|Object|Array} arg1 - 属性名
 * @return {String|Object}              数据值
 */
/**
 * @method CHAINABLE._$dataset
 * @see module:base/element._$dataset
 */
_p._$dataset =
    _y._$dataset = function(_element, _key, _value) {
        // check element
        var _id = _p._$id(_element);
        if (!_id) {
            return null;
        }
        // check single key-value
        if (_u._$isString(_key)) {
            return _h.__dataset(
                _p._$get(_element),
                _key, _value
            );
        }
        // check map set
        // ignore argument _value
        if (_u._$isObject(_key)) {
            var _ret = {};
            _u._$forIn(_key, function(_v, _k) {
                _ret[_k] = _p._$dataset(_id, _k, _v);
            });
            return _ret;
        }
        // check array get
        // ignore argument _value
        if (_u._$isArray(_key)) {
            var _ret = {};
            _u._$forEach(_key, function(_k) {
                _ret[_k] = _p._$dataset(_id, _k);
            });
            return _ret;
        }
        return null;
    };
/**
 * 取某个节点的属性值
 *
 * 结构举例
 * ```html
 *   <div id="abc">123</div>
 * ```
 *
 * 脚本举例
 * ```javascript
 *   NEJ.define([
 *       'base/element'
 *   ],function(_e){
 *       // 设置成 <div id="abc" data-img="http://a.b.com/a.png">123</div>
 *       // 返回value值: http://a.b.com/a.png
 *       var _src = _e._$attr('abc','data-img','http://a.b.com/a.png');
 *
 *       // 如果设置了img的值返回data-img，否则放回空字符串
 *       var _src = _e._$attr('abc','data-img');
 *   });
 * ```
 *
 * @method module:base/element._$attr
 * @see    module:base/element._$dataset
 * @param  {String|Node} arg0 - 节点标识或者对象
 * @param  {String}      arg1 - 属性名称
 * @param  {String}      arg2 - 属性值，如果没有设置此参数则表示取值
 * @return {String}             属性值
 */
/**
 * @method CHAINABLE._$attr
 * @see module:base/element._$attr
 */
_p._$attr =
    _y._$attr = function(_element, _name, _value) {
        _element = _p._$get(_element);
        if (!_element) {
            return '';
        }
        if (_value !== undefined && !!_element.setAttribute) {
            _element.setAttribute(_name, _value);
        }
        return _h.__getAttribute(_element, _name);
    };
/**
 * html代码转节点对象，
 * 如果转换出来的节点数量超过[包含]2个，
 * 则最外面增加一个容器节点，即返回的始终是一个节点
 *
 * 结构举例
 * ```html
 *   <div id="abc">
 *     <span>123</span>
 *   </div>
 * ```
 *
 * 代码举例
 * ```javascript
 *   NEJ.define([
 *       'base/element'
 *   ],function(_e){
 *       var _node = _e._$html2node('<div>1</div><div><span>2</span></div>');
 *   });
 * ```
 *
 * 返回结果
 * ```html
 *   <div> <!-- 返回此节点 -->
 *     <div>1</div>
 *     <div><span>2</span></div>
 *   </div>
 * ```
 *
 * @method module:base/element._$html2node
 * @param  {String} arg0 - 代码
 * @return {Node}          节点
 */
_p._$html2node = (function() {
    var _reg = /<(.*?)(?=\s|>)/i, // first tag name
        _tmap = {
            li: 'ul',
            tr: 'tbody',
            td: 'tr',
            th: 'tr',
            option: 'select'
        };
    return function(_html) {
        var _tag;
        if (_reg.test(_html)) {
            _tag = _tmap[(RegExp.$1 || '').toLowerCase()] || '';
        }
        var _div = _p._$create(_tag || 'div');
        _div.innerHTML = _html;
        var _list = _p._$getChildren(_div);
        return _list.length > 1 ? _div : _list[0];
    };
})();
/**
 * 将dom节点转为xml串
 *
 * 结构举例
 * ```html
 *   <div id="abc">123</div>
 * ```
 *
 * 脚本举例
 * ```javascript
 *   NEJ.define([
 *       'base/element'
 *   ],function(_p){
 *       // 生成<div id="abc">123</div>字符串
 *       var _xml = _p._$dom2xml('abc'));
 *   });
 * ```
 *
 * @see    module:base/element._$xml2dom
 * @method module:base/element._$dom2xml
 * @param  {String|Node} arg0 - 节点
 * @return {String}             XML代码
 */
/**
 * @method CHAINABLE._$dom2xml
 * @see module:base/element._$dom2xml
 */
_p._$dom2xml =
    _y._$dom2xml = function(_element) {
        _element = _p._$get(_element);
        return !_element ? '' : _h.__serializeDOM2XML(_element);
    };
/**
 * 将xml转为dom节点
 *
 * 脚本举例
 * ```javascript
 *   NEJ.define([
 *       'base/element'
 *   ],function(_e){
 *       // 生成<div id="abc">123</div>节点
 *       var _node = _e._$xml2dom('<div id="abc">123</div>');
 *   });
 * ```
 *
 * @method module:base/element._$xml2dom
 * @see    module:base/element._$dom2xml
 * @param  {String} arg0 - xml文本
 * @return {Node}          DOM节点
 */
_p._$xml2dom = function(_xml) {
    _xml = (_xml || '').trim();
    return !_xml ? null : _h.__parseDOMFromXML(_xml);
};
/**
 * dom节点转对象，多用于XML DOM转数据对象
 *
 * 结构举例
 * ```html
 *   <div id="abc">123</div>
 *
 *   <div id="efg">
 *     <p>aaaa</p>
 *     <span>bbbb</span>
 *   </div>
 * ```
 *
 * 脚本举例
 * ```javascript
 *   NEJ.define([
 *       'base/element'
 *   ],function(_p){
 *       // 返回对象{div:'123'}
 *       var _obj = _p._$dom2object('abc');
 *
 *       // 返回对象{div:{p:'aaaa',span:'bbbb'}}
 *       var _obj = _p._$dom2object('efg');
 *   });
 * ```
 *
 * @method module:base/element._$dom2object
 * @see    module:base/element._$xml2object
 * @param  {String|Node} arg0 - 节点
 * @return {Object}             转换完成的对象
 */
/**
 * @method CHAINABLE._$dom2object
 * @see module:base/element._$dom2object
 */
_p._$dom2object =
    _y._$dom2object = function(_dom, _obj) {
        _obj = _obj || {};
        _dom = _p._$get(_dom);
        if (!_dom) return _obj;
        var _name = _dom.tagName.toLowerCase(),
            _list = _p._$getChildren(_dom);
        if (!_list || !_list.length) {
            _obj[_name] = _dom.textContent || _dom.text || '';
            return _obj;
        }
        var _tmp = {};
        _obj[_name] = _tmp;
        _u._$forEach(
            _list,
            function(_node) {
                _p._$dom2object(_node, _tmp);
            }
        );
        return _obj;
    };
/**
 * XML转对象
 *
 * 脚本举例
 * ```javascript
 *   NEJ.define([
 *       'base/element'
 *   ],function(_e){
 *       // 返回 {user:{id:'1',username:'aaa',password:'123456'}}
 *       var _obj = _e._$xml2object('\
 *           <?xml version="1.0" encoding="utf-8" ?>\
 *           <user>\
 *             <id>1</id>\
 *             <username>aaa</username>\
 *             <password>123456</password>\
 *           </user>\
 *       ');
 *   });
 * ```
 *
 * @method module:base/element._$xml2object
 * @see    module:base/element._$dom2object
 * @param  {String} arg0 - xml代码
 * @return {Object}        对象
 */
_p._$xml2object = function(_xml) {
    try {
        return _p._$dom2object(_p._$xml2dom(_xml));
    } catch (ex) {
        return null;
    }
};
/**
 * 文本转指定类型的数据
 *
 * 脚本举例
 * ```javascript
 *   NEJ.define([
 *       'base/element'
 *   ],function(_e){
 *       // 转成dom节点
 *       var _dom = _e._$text2type('<div id="abc">123</div>',"xml");
 *       // 转成json字符串
 *       var _json = _e._$text2type('{"a":"aaaaaaaaaaaaa"}',"json");
 *       // 原样返回
 *       var _text = _e._$text2type('<div id="abc">123</div>');
 *   });
 * ```
 *
 * @method module:base/element._$text2type
 * @param  {String} arg0 - 文本内容
 * @param  {String} arg1 - 类型，如xml/json/text
 * @return {Variable}      指定类型的数据
 */
_p._$text2type = (function() {
    var _fmap = {
        xml: function(_text) {
            return _p._$xml2dom(_text);
        },
        json: function(_text) {
            try {
                return JSON.parse(_text);
            } catch (ex) {
                return null;
            }
        },
        dft: function(_text) {
            return _text;
        }
    };
    return function(_text, _type) {
        _type = (_type || '').toLowerCase();
        return (_fmap[_type] || _fmap.dft)(_text || '');
    };
})();
/**
 * 批量设置节点样式
 *
 * 结构举例
 * ```html
 *   <div id="abc">123</div>
 * ```
 *
 * 脚本举例
 * ```javascript
 *   NEJ.define([
 *       'base/element'
 *   ],function(_e){
 *       _e._$style('abc',{color:'red',width:'100px'});
 *   });
 * ```
 *
 * 输出结果
 * ```html
 *   <div id="abc" style="color:red;width:100px;">123</div>
 * ```
 *
 * @method module:base/element._$style
 * @see    module:base/element._$setStyle
 * @param  {String|Node} arg0 - 节点
 * @param  {Object}      arg1 - 样式信息{color:'red',width:'100px'}
 * @return {Void}
 */
/**
 * @method CHAINABLE._$style
 * @see module:base/element._$style
 */
_p._$style =
    _y._$style = function(_element, _map) {
        _element = _p._$get(_element);
        if (!!_element) {
            _u._$loop(_map, function(_value, _name) {
                _p._$setStyle(_element, _name, _value);
            });
        }
    };
/**
 * 设置单个样式
 *
 * 结构举例
 * ```html
 *   <div id="abc">123</div>
 * ```
 *
 * 脚本举例
 * ```javascript
 *   NEJ.define([
 *       'base/element'
 *   ],function(_e){
 *       _e._$setStyle('abc','color','red');
 *   });
 * ```
 *
 * 输出结果
 * ```html
 *   <div id="abc" style="color:red;">123</div>
 * ```
 *
 * @method module:base/element._$setStyle
 * @see    module:base/element._$getStyle
 * @param  {String|Node} arg0 - 节点
 * @param  {String}      arg1 - 样式名称
 * @param  {String}      arg2 - 样式值
 * @return {Void}
 */
/**
 * @method CHAINABLE._$setStyle
 * @see module:base/element._$setStyle
 */
_p._$setStyle =
    _y._$setStyle = function(_element, _name, _value) {
        _element = _p._$get(_element);
        if (!!_element) {
            _h.__setStyleValue(
                _element, _name,
                _h.__processCSSText(_value)
            );
        }
    };
/**
 * 取样式值
 *
 * 结构举例
 * ```html
 *   <div id="abc" style="color:red;">123</div>
 * ```
 *
 * 脚本举例
 * ```javascript
 *   NEJ.define([
 *       'base/element'
 *   ],function(_e){
 *       // 返回节点的颜色值red（高版本浏览器返回rgb值），如果没有返回空字符串
 *       var _value = _e._$getStyle('abc','color');
 *   });
 * ```
 *
 * @method module:base/element._$getStyle
 * @see    module:base/element._$setStyle
 * @param  {String|Node} arg0 - 节点
 * @param  {String}      arg1 - 样式名称
 * @return {String}             样式值
 */
/**
 * @method CHAINABLE._$getStyle
 * @see module:base/element._$getStyle
 */
_p._$getStyle =
    _y._$getStyle = function(_element, _name) {
        _element = _p._$get(_element);
        return !_element ? '' :
            _h.__getStyleValue(
                _element, _name
            );
    };
/**
 * 页面注入脚本
 *
 * 结构举例
 * ```html
 *   <div id="abc">123</div>
 * ```
 *
 * 脚本举例
 * ```javascript
 *   NEJ.define([
 *       'base/element'
 *   ],function(_e){
 *       // 注入脚本，全局执行环境
 *       _e._$addScript('\
 *           document.getElementById("abc").style.color = "green"\
 *       ');
 *   });
 * ```
 *
 * 输出结果
 * ```html
 *   <div id="abc" style="color:green;">123</div>
 * ```
 *
 * @method module:base/element._$addScript
 * @param  {String} arg0 - 脚本内容
 * @return {Void}
 */
_p._$addScript = function(_script) {
    try {
        _script = _script.trim();
        if (!!_script) {
            return (new Function(_script))();
        }
    } catch (ex) {
        // ignore
        console.error(ex.message);
        console.error(ex.stack);
    }
};
/**
 * 注入页面内联样式，
 * 样式支持前缀标记$&lt;vendor&gt; ，
 * 如下样式值支持3D/2D切换，优先选用3D，格式：$&lt;NAME|VALUE&gt;
 *
 * * NAME支持：scale/rotate/translate/matrix
 * * VALUE格式：x=1&y=2&z=3&a=30
 *
 *
 * 范例如$&lt;scale|a=30&gt;，各名称支持的参数列表
 *
 * | 名称              | 参数 |
 * | :--        | :-- |
 * | scale      | x,y,z |
 * | rotate     | x,y,z,a |
 * | translate  | x,y,z |
 * | matrix     | m11,m12,m13,m14,m21,m22,m23,m24,m31,m32,m33,m34,m41,m42,m43,m44 |
 *
 *
 * 结构举例
 * ```html
 *   <html>
 *    <head>
 *        <title>test</title>
 *    </head>
 *   </html>
 * ```
 *
 * 脚本举例
 * ```javascript
 *   NEJ.define([
 *       'base/element'
 *   ],function(_e){
 *       // 注入样式
 *       _e._$addStyle('body{font-size:20px}');
 *
 *       // 注入样式支持变量
 *       _e._$addStyle('\
 *           .a{$<vendor>transform-origin:0 0;}\
 *           .b{$<vendor>transform:$<translate|x=0&y=1&z=1>}\
 *       ');
 *   });
 * ```
 *
 * 输出结果
 * ```html
 *   <html>
 *    <head>
 *        <title>test</title>
 *        <style>body{font-size:20px;}</style>
 *        <style>
 *           .a{-webkit-transform-origin:0 0;}\
 *           .b{-webkit-transform:translate3d(0,1,1);}\
 *        </style>
 *    </head>
 *   </html>
 * ```
 *
 * @method module:base/element._$addStyle
 * @param  {String} arg0 - 样式内容
 * @return {Node}          样式节点
 */
_p._$addStyle = (function() {
    var _reg = /[\s\r\n]+/gi;
    return function(_css) {
        _css = (_css || '').replace(_reg, ' ').trim();
        var _node = null;
        if (!!_css) {
            _node = _p._$create('style');
            document.head.appendChild(_node);
            _h.__injectCSSText(
                _node, _h.__processCSSText(_css)
            );
        }
        return _node;
    };
})();
/**
 * 缓存待激活样式
 *
 * 脚本举例
 * ```javascript
 *   NEJ.define([
 *       'base/element'
 *   ],function(_e){
 *       // 设置样式到缓存中，自动生成样式名，返回自动生成的类名#<class>
 *       var _class = _e._$pushCSSText('.#<uispace>{width:300px;}');
 *
 *       // 把缓存中的样式内联到页面
 *       _e._$dumpCSSText();
 *   });
 * ```
 *
 * @method module:base/element._$pushCSSText
 * @see    module:base/element._$dumpCSSText
 * @param  {String} arg0 - 样式
 * @return {String}        样式标识
 */
_p._$pushCSSText = (function() {
    var _reg = /#<(.*?)>/g,
        _seed = +new Date;
    return function(_css, _data) {
        if (!_cspol) {
            _cspol = [];
        }
        var _class = 'auto-' + _u._$uniqueID(),
            _dmap = _u._$merge({
                uispace: _class
            }, _data);
        _cspol.push(
            _css.replace(_reg, function($1, $2) {
                return _dmap[$2] || $1;
            })
        );
        return _class;
    };
})();
/**
 * 激活缓存中的样式
 *
 * 结构举例
 * ```html
 *   <div id="abc" class="item">123</div>
 * ```
 *
 * 脚本举例
 * ```javascript
 *   NEJ.define([
 *       'base/element'
 *   ],function(_e){
 *       // 设置样式.item{width:300px;}到缓存中
 *       _e._$pushCSSText('.item{width:300px;}');
 *
 *       // 把缓存中的样式内联到页面
 *       _e._$dumpCSSText();
 *   });
 * ```
 *
 * @method module:base/element._$dumpCSSText
 * @see    module:base/element._$pushCSSText
 * @return {Void}
 */
_p._$dumpCSSText = function() {
    if (!!_cspol) {
        _p._$addStyle(_cspol.join(' '));
        _cspol = null;
    }
};
/**
 * 追加CSS规则
 *
 * 结构举例
 * ```html
 *   <style id="abc"></style>
 * ```
 *
 * 脚本举例
 * ```javascript
 *   NEJ.define([
 *       'base/element'
 *   ],function(_e){
 *       // 设置样式.item{width:300px;}到缓存中
 *       _e._$appendCSSText('node-id','.item{width:300px;}');
 *   });
 * ```
 *
 * @method module:base/element._$appendCSSText
 * @see    module:base/element._$addStyle
 * @param  {Node}   arg0 - 样式节点
 * @param  {String} arg1 - 单条样式规则
 * @return {CSSRule}       样式规则对象
 */
/**
 * @method CHAINABLE._$appendCSSText
 * @see module:base/element._$appendCSSText
 */
_p._$appendCSSText =
    _y._$appendCSSText = function(_element, _css) {
        _element = _p._$get(_element);
        return !_element ? null :
            _h.__appendCSSText(
                _element,
                _h.__processCSSText(_css)
            );
    };
/**
 * 新增样式类，多个样式用空格分开
 *
 * 结构举例
 * ```html
 *   <div id="abc">123</div>
 * ```
 *
 * 脚本举例
 * ```javascript
 *   NEJ.define([
 *       'base/element'
 *   ],function(_e){
 *       // 添加样式 fc01 fc03
 *       _e._$addClassName('abc','fc01 fc03');
 *   });
 * ```
 *
 * 输出结果
 * ```html
 *   <div id="abc" class="fc01 fc03">123</div>
 * ```
 *
 * @method module:base/element._$addClassName
 * @see    module:base/element._$delClassName
 * @see    module:base/element._$replaceClassName
 * @param  {String|Node} arg0 - 要操作的节点标识或者节点对象
 * @param  {String}      arg1 - 要新增的样式类名称
 * @return {Void}
 */
/**
 * @method CHAINABLE._$addClassName
 * @see module:base/element._$addClassName
 */
_p._$addClassName =
    _y._$addClassName = function(_element, _class) {
        if (!_class) {
            return;
        }
        _element = _p._$get(_element);
        if (!!_element) {
            _h.__processClassName(
                _element, 'add', _class
            );
        }
    };
/**
 * 删除样式类，多个样式用空格分开
 *
 * 结构举例
 * ```html
 *   <div id="abc" class="fc01 fc03">123</div>
 * ```
 *
 * 脚本举例
 * ```javascript
 *   NEJ.define([
 *       'base/element'
 *   ],function(_e){
 *       // 删除fc02 fc03样式名
 *       _e._$delClassName('abc','fc02 fc03');
 *   });
 * ```
 *
 * 输出结果
 * ```html
 *   <div id="abc" class="fc01">123</div>
 * ```
 *
 * @method module:base/element._$delClassName
 * @see    module:base/element._$addClassName
 * @see    module:base/element._$replaceClassName
 * @param  {String|Node} arg0 - 要操作的节点标识或者节点对象
 * @param  {String}      arg1 - 要删除的样式类名称
 * @return {Void}
 */
/**
 * @method CHAINABLE._$delClassName
 * @see module:base/element._$delClassName
 */
_p._$delClassName =
    _y._$delClassName = function(_element, _class) {
        _element = _p._$get(_element);
        if (!!_element) {
            _h.__processClassName(
                _element, 'remove', _class
            );
        }
    };
/**
 * 替换节点的样式类名称，多个样式用空格分隔，
 * 操作过程为先删除待删样式，再添加待添样式，因此不需要删除样式存在才添加样式
 *
 * 结构举例
 * ```html
 *   <div id="abc" class="fc01 fc03">123</div>
 * ```
 *
 * 脚本举例
 * ```javascript
 *   NEJ.define([
 *       'base/element'
 *   ],function(_e){
 *       // 替换fc02为fc05
 *       // 这里不需要fc02存在
 *       _e._$replaceClassName('abc','fc02','fc05');
 *   });
 * ```
 *
 * 输出结果
 * ```html
 *   <div id="abc" class="fc01 fc03 fc05">123</div>
 * ```
 *
 * @method module:base/element._$replaceClassName
 * @see    module:base/element._$addClassName
 * @see    module:base/element._$delClassName
 * @param  {String|Node} arg0 - 要操作的节点标识或者节点对象
 * @param  {String}      arg1 - 要删除的样式类名称
 * @param  {String}      arg2 - 要新增的样式类名称
 * @return {Void}
 */
/**
 * @method CHAINABLE._$replaceClassName
 * @see module:base/element._$replaceClassName
 */
_p._$replaceClassName =
    _y._$replaceClassName = function(_element, _del, _add) {
        _element = _p._$get(_element);
        if (!!_element) {
            _h.__processClassName(
                _element, 'replace',
                _del, _add
            );
        }
    };
/**
 * 检测节点是否包含指定样式，多个样式用空格分隔，检测时包含其中之一即表示包含
 *
 * 结构举例
 * ```html
 *   <div id="abc" class="fc01 fc03">123</div>
 * ```
 *
 * 脚本举例
 * ```javascript
 *   NEJ.define([
 *       'base/element'
 *   ],function(_e){
 *       // 如果有fc01样式返回true，否则返回false
 *       _e._$hasClassName('abc',"fc01");
 *   });
 * ```
 *
 * @method module:base/element._$hasClassName
 * @param  {String|Node} arg0 - 节点标识或者对象
 * @param  {String}      arg1 - 样式串
 * @return {Boolean}            是否含指定样式
 */
/**
 * @method CHAINABLE._$hasClassName
 * @see module:base/element._$hasClassName
 */
_p._$hasClassName =
    _y._$hasClassName = function(_element, _class) {
        _element = _p._$get(_element);
        if (!!_element) {
            return _h.__hasClassName(_element, _class);
        }
        return !1;
    };
/**
 * 取样式变换矩阵对象
 *
 * 脚本举例
 * ```javascript
 *   NEJ.define([
 *       'base/element'
 *   ],function(_e){
 *       // 生成下面矩阵的对象
 *       // |a:1,b:0,c:0,d:1,e:0:f:0|
 *       // |m11:1,m12:0,m13:0,m14:0|
 *       // |m21:0,m22:1,m23:0,m24:0|
 *       // |m31:0,m32:0,m33:1,m34:0|
 *       // |m41:0,m42:0,m43:0,m44:1|
 *       var _matrix = _e._$matrix("matrix(1,0,0,1,0,0)");
 *   });
 * ```
 *
 * @method module:base/element._$matrix
 * @param  {String} arg0 - 变化信息
 * @return {CSSMatrix}     变换矩阵对象
 */
_p._$matrix = function(_matrix) {
    _matrix = (_matrix || '').trim();
    return _h.__getCSSMatrix(_matrix);
};
/**
 * 设置3D变换，对于不支持3D的系统自动切换为2D变换
 *
 * 结构举例
 * ```html
 *   <div id="abc"></div>
 * ```
 * 脚本举例
 * ```javascript
 *   NEJ.define([
 *       'base/element'
 *   ],function(_e){
 *       // 进行css3d变换，对应css样式为-webkit-transform:rotate3d( 2, 1, 1, -75deg);
 *       _e._$css3d('abc','rotate',{x:2,y:1,z:1,a:'-75deg'});
 *   });
 * ```
 *
 * @method module:base/element._$css3d
 * @see    module:base/element._$addStyle
 * @param  {String|Node} arg0 - 节点标识或者对象
 * @param  {String}      arg1 - 变换类型，matrix/translate/scale/rotate
 * @param  {Object}      arg2 - 变换值，{x:1,y:2,z:3,a:'30deg'}
 * @return {Void}
 */
/**
 * @method CHAINABLE._$css3d
 * @see module:base/element._$css3d
 */
_p._$css3d =
    _y._$css3d = function(_element, _name, _map) {
        _element = _p._$get(_element);
        if (!!_element) {
            var _value = _h.__processTransformValue(_name, _map);
            if (!!_value) {
                _p._$setStyle(_element, 'transform', _value);
            }
        }
    };
// for chainable
_x._$merge(_y);

if (true) {
    NEJ.copy(NEJ.P('nej.e'), _p);
}



for (var k in _p) {
    if (_p.hasOwnProperty(k)) {
        exports[k] = _p[k];
    }
}
}.call(window));

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

/*** IMPORTS FROM imports-loader ***/
(function() {

/*
 * ------------------------------------------
 * 可链式接口实现代理文件
 * @version  1.0
 * @author   genify(caijf)
 * ------------------------------------------
 */
/** @namespace CHAINABLE */
/** @module base/chain */
var _u = __webpack_require__(0);
var _p = {};
var _cache = {};
/**
 * 添加可链式调用的接口
 *
 * 添加可链式接口
 * ```javascript
 * NEJ.define([
 *     'base/chain'
 * ],function(_l){
 *     var _map = {};
 *
 *      _map._$api1 = function(){
 *          // TODO
 *      }
 *      
 *      _map._$api2 = function(){
 *          // TODO
 *      }
 * 
 *     _l._$merge(_map);
 * });
 * ```
 *
 * 使用链式调用接口
 * ```javascript
 * NEJ.define([
 *     '/path/to/api.js',
 *     'util/chain/chainable'
 * ],function(_x,$){
 *     // 使用链式调用api
 *     $('body > p')._$api1()._$api2();
 * });
 * ```
 * 
 * @method module:base/chain._$merge
 * @param  {Object} arg0 - 接口集合
 * @return {Void}
 */
_p._$merge = function(_map) {
    _u._$merge(_cache, _map);
};
/**
 * 导出链式接口列表
 * 
 * @method module:base/chain._$dump
 * @return {Object} 链式接口列表
 */
_p._$dump = function() {
    return _cache;
};
/**
 * 清除链式列表
 * 
 * @method module:base/chain._$clear
 * @return {Void}
 */
_p._$clear = function() {
    _cache = {};
};

module.exports = _p;
}.call(window));

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

/*** IMPORTS FROM imports-loader ***/
(function() {

/*
 * ------------------------------------------
 * 平台适配接口实现文件
 * @version  1.0
 * @author   genify(caijf)
 * ------------------------------------------
 */
var NEJ = __webpack_require__(1);
var _u = __webpack_require__(0);
var _p = {};
var _o = {};
var _f = function() {
    return !1;
};
var _r = [];
var _cache = {};
/*
 * URL地址转源信息
 * http://a.b.com:8080/a/bc/ -> http://a.b.com:8080
 * @param  {String} URL地址
 * @return {String} 源信息
 */
_p.__url2host = (function() {
    var _reg = /^([\w]+?:\/\/.*?(?=\/|$))/i;
    return function(_url) {
        _url = _url || '';
        if (_reg.test(_url))
            return RegExp.$1;
        return location.protocol + '//' + location.host;
    };
})();
/**
 * 设置NEJ配置信息
 * @param  {String}   配置标识
 * @param  {Variable} 配置信息
 * @return {Void}
 */
_p.__set = function(_key, _value) {
    _cache[_key] = _value;
};
/**
 * 获取NEJ配置信息
 * @param  {String}   配置标识
 * @return {Variable} 配置信息
 */
_p.__get = function(_key) {
    return _cache[_key];
};

// init
/*
 * 初始化配置信息
 * @param  {Object} 配置信息
 * @return {Void}
 */
var _doInit = (function() {
    var _conf = {
        'portrait': {
            name: 'portrait',
            dft: 'portrait/'
        },
        'ajax.swf': {
            name: 'ajax',
            dft: 'nej_proxy_flash.swf'
        },
        'chart.swf': {
            name: 'chart',
            dft: 'nej_flex_chart.swf'
        },
        'audio.swf': {
            name: 'audio',
            dft: 'nej_player_audio.swf'
        },
        'video.swf': {
            name: 'video',
            dft: 'nej_player_video.swf'
        },
        'clipboard.swf': {
            name: 'clipboard',
            dft: 'nej_clipboard.swf'
        },
        'upload.image.swf': {
            name: 'uploadimage',
            dft: 'nej_upload_image.swf'
        }
    };
    var _doInitProxy = function(_list) {
        var _map = {};
        if (!_list || !_list.length) {
            return _map;
        }
        for (var i = 0, l = _list.length, _path; i < l; i++) {
            _path = _list[i];
            if (_path.indexOf('://') > 0)
                _map[_p.__url2host(_path)] = _path;
        }
        return _map;
    };
    return function(_config) {
        // check path config
        _p.__set('root', _config.root || '/res/');
        var _root = _p.__get('root');
        _u._$loop(_conf, function(v, k, m) {
            _p.__set(k, _config[v.name] || (_root + v.dft));
        });
        // csrf config
        var _csrf = _config.p_csrf;
        if (_csrf === !0) {
            _csrf = {
                cookie: 'AntiCSRF',
                param: 'AntiCSRF'
            };
        }
        _csrf = _csrf || _o;
        _p.__set('csrf', {
            param: _csrf.param || '',
            cookie: _csrf.cookie || ''
        });
        // ajax by frame proxy
        _p.__set('frames', _doInitProxy(_config.p_frame));
        // ajax by flash proxy
        _p.__set('flashs', _doInitProxy(_config.p_flash));
    };
})();
_doInit(this.NEJ_CONF || _o);

module.exports = _p;
}.call(window));

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

/*** IMPORTS FROM imports-loader ***/
(function() {

/*
 * ------------------------------------------
 * 平台适配接口实现文件
 * @version  1.0
 * @author   genify(caijf)
 * ------------------------------------------
 */
var _u = __webpack_require__(0);
var _m = __webpack_require__(2);
var _p = {};
var _o = {};
var _f = function() {
    return !1;
};
var _r = [];
/**
 * 从DocumentFragment中取指定ID的节点
 * @param  {Document} 文档对象
 * @param  {String}   节点标识
 * @return {Node}     指定标识的节点
 */
_p.__getElementById = function(_fragment, _id) {
    if (!!_fragment.getElementById) {
        return _fragment.getElementById('' + _id);
    }
    try {
        return _fragment.querySelector('#' + _id);
    } catch (e) {
        return null;
    }
};
/**
 * 取节点的子节点列表
 * @param  {Node}  节点ID或者对象
 * @return {Array} 子节点列表
 */
_p.__getChildren = function(_element) {
    return _u._$object2array(_element.children);
};
/**
 * 根据类名取节点列表
 * @param  {Node}   节点ID或者对象
 * @param  {String} 类名
 * @return {Array}  节点列表
 */
_p.__getElementsByClassName = function(_element, _class) {
    return _u._$object2array(_element.getElementsByClassName(_class));
};
/**
 * 取下一个兄弟节点
 * @param  {Node}  节点对象
 * @return {Node}  节点
 */
_p.__nextSibling = function(_element) {
    return _element.nextElementSibling;
};
/**
 * 取上一个兄弟节点
 * @param  {Node}  节点对象
 * @return {Node}  节点
 */
_p.__previousSibling = function(_element) {
    return _element.previousElementSibling;
};
/**
 * 设置、获取数据
 * @param {Node}     节点
 * @param {String}   标识
 * @param {Variable} 值
 */
_p.__dataset = function(_element, _name, _value) {
    _element.dataset = _element.dataset || {};
    if (_value !== undefined) {
        _element.dataset[_name] = _value;
    }
    return _element.dataset[_name];
};
/**
 * 取节点属性值
 * @param  {Node}   节点
 * @param  {String} 属性名
 * @return {String} 属性值
 */
_p.__getAttribute = function(_element, _name) {
    if ('getAttribute' in _element) {
        return _element.getAttribute(_name);
    }
};
/**
 * 将dom节点转为xml串
 * @param  {Node}   节点
 * @return {String} XML代码
 */
_p.__serializeDOM2XML = function(_dom) {
    return new XMLSerializer().serializeToString(_dom) || '';
};
/**
 * 将xml转为dom节点
 * @param  {String} XML代码
 * @return {Node}   节点
 */
_p.__parseDOMFromXML = function(_xml) {
    var _root = new DOMParser()
        .parseFromString(_xml, 'text/xml')
        .documentElement;
    return _root.nodeName == 'parsererror' ? null : _root;
};
/**
 * 节点占全屏
 * @param  {Node}   节点
 * @param  {Object} 视窗模型
 * @return {Void}
 */
_p.__fullScreen = function() {
    // use css fixed position
};
/**
 * 为节点增加用于盖select/flash等控件的层
 * @param  {Node} 节点
 * @return {Void}
 */
_p.__mask = function() {
    // do nothing
};
/**
 * 去除用于盖select/flash等控件的层
 * @param  {Node} 节点
 * @return {Void}
 */
_p.__unmask = function() {
    // do nothing
};
// variables
var _ospt = _m._$SUPPORT,
    _opfx = _m._$KERNEL.prefix;
/**
 * 指定名称是否在配置表中
 * @param  {String}  名称
 * @param  {Object}  配置表
 * @return {Boolean} 是否命中
 */
_p.__isMatchedName = (function() {
    var _reg = /^([a-z]+?)[A-Z]/;
    return function(_name, _map) {
        return !!(_map[_name] || (_reg.test(_name) && _map[RegExp.$1]));
    };
})();
/**
 * 样式名称做前缀增强
 * @param  {String}  名称
 * @return {Boolean} 是否需要前缀增强
 */
_p.__isNeedPrefixed = (function() {
    var _pmap = _u._$array2object([
        'animation', 'transform', 'transition',
        'appearance', 'userSelect', 'box', 'flex', 'column'
    ]);
    return function(_name) {
        return _p.__isMatchedName(_name, _pmap);
    };
})();
/**
 * 格式化样式属性名称
 * border-width -> borderWidth
 * @param  {String} 样式样式名
 * @return {String} 格式化后样式名
 */
_p.__fmtStyleName = (function() {
    var _reg = /-([a-z])/g;
    return function(_name) {
        _name = _name || '';
        return _name.replace(_reg, function($1, $2) {
            return $2.toUpperCase();
        });
    };
})();
/**
 * 针对样式名称做格式化及前缀增强
 * @param  {String} 样式名
 * @return {String} 增强后的样式名
 */
_p.__getStyleName = (function() {
    var _reg = /^[a-z]/,
        _prefix = _opfx.css || '';
    return function(_name) {
        _name = _p.__fmtStyleName(_name);
        if (!_p.__isNeedPrefixed(_name)) {
            return _name;
        }
        // add prefix
        // userSelect -> webkitUserSelect
        return _prefix + _name.replace(_reg, function($1) {
            return $1.toUpperCase();
        });
    };
})();
/**
 * 取样式值
 * @param  {String|Node} 节点
 * @param  {String}      样式名称
 * @return {Variable}    样式值
 */
_p.__getStyleValue = function(_element, _name) {
    var _current = window.getComputedStyle(_element, null);
    return _current[_p.__getStyleName(_name)] || '';
};
/**
 * 设置样式
 * @param  {String|Node} 节点
 * @param  {String}      样式名称
 * @param  {String}      样式值
 * @return {Void}
 */
_p.__setStyleValue = function(_element, _name, _value) {
    _element.style[_p.__getStyleName(_name)] = _value;
};
/**
 * 取样式变换矩阵对象
 * @param  {String}    变换信息
 * @return {CSSMatrix} 变换矩阵对象
 */
_p.__getCSSMatrix = (function() {
    var _reg0 = /\((.*?)\)/,
        _reg1 = /\s*,\s*/,
        _klss = ['CSSMatrix', _opfx.clz + 'CSSMatrix'],
        _list = ['m11', 'm12', 'm21', 'm22', 'm41', 'm42'];
    // matrix(1,2,3,4,5,6)
    // -> {m11:1,m12:2,m21:3,m22:4,m41:5,m42:6}
    var _doParse = function(_matrix) {
        var _obj = {};
        if (_reg0.test(_matrix || '')) {
            // 11,12,21,22,41,42
            _u._$forEach(
                RegExp.$1.split(_reg1),
                function(_value, _index) {
                    _obj[_list[_index]] = _value;
                }
            );
        }
        return _obj;
    };
    return function(_matrix) {
        var _mtrx;
        _u._$forIn(_klss, function(_name) {
            if (!!this[_name]) {
                _mtrx = new this[_name](_matrix || '');
                return !0;
            }
        });
        return !_mtrx ? _doParse(_matrix) : _mtrx;
    };
})();
/**
 * 注入样式
 * @param  {Node}   样式节点
 * @param  {String} 样式内容
 * @return {Void}
 */
_p.__injectCSSText = function(_style, _css) {
    _style.textContent = _css;
};
/**
 * 对样式进行预处理
 * @param  {String} 待处理样式内容
 * @return {String} 处理后样式内容
 */
_p.__processCSSText = (function() {
    var _reg0 = /\$<(.*?)>/gi,
        _reg1 = /\{(.*?)\}/g,
        _pfx = '-' + _opfx.css.toLowerCase() + '-',
        _2dmap = {
            scale: 'scale({x|1},{y|1})',
            rotate: 'rotate({a})',
            translate: 'translate({x},{y})',
            matrix: 'matrix({m11},{m12},{m21},{m22},{m41},{m42})'
        },
        _3dmap = {
            scale: 'scale3d({x|1},{y|1},{z|1})',
            rotate: 'rotate3d({x},{y},{z},{a})',
            translate: 'translate3d({x},{y},{z})',
            matrix: 'matrix3d({m11},{m12},{m13},{m14},{m21},{m22},{m23},{m24},{m31},{m32},{m33|1},{m34},{m41},{m42},{m43},{m44|1})'
        };
    // merge template and data
    var _getTransformValue = function(_tpl, _map) {
        _map = _map || _o;
        return _tpl.replace(_reg1, function($1, $2) {
            var _arr = $2.split('|');
            return _map[_arr[0]] || _arr[1] || '0';
        });
    };
    // process transform value
    _p.__processTransformValue = function(_name, _data) {
        var _tpl = (!_ospt.css3d ? _2dmap : _3dmap)[_name.trim()];
        if (!!_tpl) {
            return _getTransformValue(_tpl, _data);
        }
        return '';
    };
    return function(_css) {
        if (!_css.replace) {
            return _css;
        }
        return _css.replace(_reg0, function($1, $2) {
            // prefix for css3
            if ($2 === 'vendor') {
                return _pfx;
            }
            // parse 3D value
            var _arr = ($2 || '').split('|');
            return _p.__processTransformValue(
                _arr[0], _u._$query2object(_arr[1])
            ) || $1;
        });
    };
})();
/**
 * 追加CSS规则
 * @param  {Node}    样式节点
 * @param  {String}  单条样式规则
 * @return {CSSRule} 样式规则对象
 */
_p.__appendCSSText = function(_element, _css) {
    var _sheet = _element.sheet,
        _length = _sheet.cssRules.length;
    _sheet.insertRule(_css, _length);
    return _sheet.cssRules[_length];
};
/**
 * 取待验证的样式列表
 * @param  {String} 样式，多个以空格分隔
 * @return {Array}  样式列表
 */
_p.__getClassList = (function() {
    var _reg = /\s+/;
    return function(_class) {
        _class = (_class || '').trim();
        return !!_class ? _class.split(_reg) : null;
    };
})();
/**
 * 操作样式
 * @param  {Node}   节点
 * @param  {String} 操作
 * @param  {String} 样式
 * @return {Void}
 */
_p.__processClassName = function(_element, _type, _class) {
    if (_type == 'replace') {
        _p.__processClassName(
            _element, 'remove', _class
        );
        _p.__processClassName(
            _element, 'add', arguments[3]
        );
        return;
    }
    _u._$forEach(
        _p.__getClassList(_class),
        function(_clazz) {
            _element.classList[_type](_clazz);
        }
    );
};
/**
 * 检测节点是否包含指定样式，多个样式用空格分隔，检测时包含其中之一即表示包含
 * @param  {Node}    节点ID或者对象
 * @param  {String}  样式串
 * @return {Boolean} 是否含指定样式
 */
_p.__hasClassName = function(_element, _class) {
    var _list = _element.classList;
    if (!_list || !_list.length) {
        return !1;
    }
    return _u._$indexOf(
        _p.__getClassList(_class),
        function(_clazz) {
            return _list.contains(_clazz);
        }
    ) >= 0;
};
// for init
(function() {
    if (!_ospt.css3d) {
        var _matrix = _p.__getCSSMatrix();
        _ospt.css3d = !!_matrix && _matrix.m41 != null;
    }
})();

module.exports = _p;
}.call(window));

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

/*** IMPORTS FROM imports-loader ***/
(function() {

/*
 * ------------------------------------------
 * 平台适配接口实现文件
 * @version  1.0
 * @author   genify(caijf)
 * ------------------------------------------
 */
var _u = __webpack_require__(0);
var _m = __webpack_require__(2);
var _p = {};
var _o = {};
var _f = function() {
    return !1;
};
var _r = [];
/**
 * 验证事件信息
 * @param  {Node}     节点
 * @param  {String}   事件类型
 * @param  {Function} 处理函数
 * @return {Object}   验证后事件信息 type/handler
 */
_p.__checkEvent = (function() {
    // need change event name
    var _tmap = {
            touchstart: 'mousedown',
            touchmove: 'mousemove',
            touchend: 'mouseup'
        },
        // need prefix
        _pfix = _m._$KERNEL.prefix,
        _emap = {
            transitionend: 'TransitionEnd',
            animationend: 'AnimationEnd',
            animationstart: 'AnimationStart',
            animationiteration: 'AnimationIteration',
            visibilitychange: 'visibilitychange',
            fullscreenchange: 'fullscreenchange'
        };
    var _fmap = {
        enter: function(_element, _type, _handler) {
            var _result = {
                type: 'keypress'
            };
            if (!!_handler) {
                _result.handler = function(_event) {
                    if (_event.keyCode === 13) {
                        _handler.call(_element, _event);
                    }
                };
            }
            return _result;
        }
    };
    var _doPrefix = function(_name) {
        return (_pfix.evt || _pfix.pro) + _name;
    };
    return function(_element, _type, _handler) {
        var _result = {
            type: _type,
            handler: _handler
        };
        if (!(('on' + _type) in _element)) {
            // check name convert
            var _name = _tmap[_type];
            if (!!_name) {
                _result.type = _name;
                return _result;
            }
            // check prefix complete
            var _name = _emap[_type];
            if (!!_name) {
                _result.type = _doPrefix(_name);
                return _result;
            }
            // check event update
            var _func = _fmap[_type];
            if (!!_func) {
                return _func.apply(null, arguments);
            }
        }
        return _result;
    };
})();
/**
 * 添加事件
 * @param  {Node}     节点
 * @param  {String}   事件
 * @param  {Function} 处理函数
 * @param  {Boolean}  是否捕捉阶段
 * @return {Void}
 */
_p.__addEvent = function() {
    var _args = arguments;
    if (false) {
        if (!(('on' + _args[1]) in _args[0])) {
            console.log('not support event[' + _args[1] + '] for ' + _args[0]);
        }
    }
    _args[0].addEventListener(
        _args[1], _args[2], _args[3]
    );
};
/**
 * 删除事件
 * @param  {Node}     节点
 * @param  {String}   事件
 * @param  {Function} 处理函数
 * @param  {Boolean}  是否捕捉阶段
 * @return {Void}
 */
_p.__delEvent = function() {
    var _args = arguments;
    _args[0].removeEventListener(
        _args[1], _args[2], _args[3]
    );
};
/**
 * 触发对象的某个事件
 * @param  {String|Node} 节点ID或者对象
 * @param  {String}      鼠标事件类型
 * @return {Void}
 */
_p.__dispatchEvent = function(_element, _type, _options) {
    var _event = document.createEvent('Event');
    _event.initEvent(_type, !0, !0);
    _u._$merge(_event, _options);
    _element.dispatchEvent(_event);
};

module.exports = _p;
}.call(window));

/***/ }),
/* 8 */
/***/ (function(module, exports) {

/*** IMPORTS FROM imports-loader ***/
(function() {

/*
 * ------------------------------------------
 * 平台适配接口实现文件
 * @version  1.0
 * @author   genify(caijf)
 * ------------------------------------------
 */
var _p = {};
var _o = {};
var _f = function() {
    return !1;
};
var _r = [];
/**
 * 遍历对象
 * @param  {Object}   对象
 * @param  {Function} 迭代回调
 * @param  {Object}   回调执行对象
 * @return {String}   循环中断时的key值
 */
_p.__forIn = function(_obj, _callback, _this) {
    if (!_obj || !_callback) {
        return null;
    }
    var _keys = Object.keys(_obj);
    for (var i = 0, l = _keys.length, _key, _ret; i < l; i++) {
        _key = _keys[i];
        _ret = _callback.call(
            _this || null,
            _obj[_key], _key, _obj
        );
        if (!!_ret) {
            return _key;
        }
    }
    return null;
};
/**
 * 遍历列表
 * @param  {Array}    列表
 * @param  {Function} 迭代回调
 * @param  {Object}   回调执行对象
 * @return {Void}
 */
_p.__forEach = function(_list, _callback, _this) {
    _list.forEach(_callback, _this);
};
/**
 * 集合转数组
 * @param  {Object} 集合
 * @return {Array}  数组
 */
_p.__col2array = function(_list) {
    return _r.slice.call(_list, 0);
};
/**
 * YYYY-MM-DDTHH:mm:ss.sssZ格式时间串转时间戳
 * @param  {String} 时间串
 * @return {Number} 时间戳
 */
_p.__str2time = function(_str) {
    return Date.parse(_str);
};

module.exports = _p;
}.call(window));

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

/*** IMPORTS FROM imports-loader ***/
(function() {

/*
 * ------------------------------------------
 * 平台配置信息
 * @version  1.0
 * @author   genify(caijf)
 * ------------------------------------------
 */
/** @module base/config */
var NEJ = __webpack_require__(1);
var _h = __webpack_require__(5);
__webpack_require__(12);
var _p = {};
var _o = {};
var _f = function() {
    return !1;
};
var _r = [];
/**
 * 取Frame跨域Ajax代理文件，通过NEJ_CONF的p_frame配置给定域名的代理文件地址
 *
 * @method module:base/config._$getFrameProxy
 * @see    module:base/config._$get
 * @param  {String} arg0 - 请求地址或者域名
 * @return {String}        代理文件地址
 */
_p._$getFrameProxy = function(_url) {
    var _host = _h.__url2host(_url);
    return _p._$get('frames')[_host] ||
        (_host + '/res/nej_proxy_frame.html');
};
/**
 * 取Flash跨域Ajax配置文件，通过NEJ_CONF的p_flash配置给定域名的代理文件地址
 *
 * @method module:base/config._$getFlashProxy
 * @see    module:base/config._$get
 * @param  {String} arg0 - 请求地址或者域名
 * @return {String}        代理文件地址
 */
_p._$getFlashProxy = function(_url) {
    return _p._$get('flashs')[_h.__url2host(_url)];
};
/**
 * 获取NEJ配置信息，通过NEJ_CONF配置相关信息
 *
 * ```javascript
 *  window.NEJ_CONF = {
 *      // resource root
 *      // defalut value -> '/res/'
 *      root : '/nej/'
 *      // blank image for ie6-ie7
 *      // default value -> $root+'nej_blank.gif'
 *      blank : '/res/nej_blank.gif'
 *      // localstorage flash
 *      // default value -> $root+'nej_storage.swf'
 *      storage : '/res/nej_storage.swf'
 *      // audio player flash
 *      // default value -> $root+'nej_player_audio.swf'
 *      audio : '/res/nej_player_audio.swf'
 *      // video player flash
 *      // default value -> $root+'nej_player_video.swf'
 *      video : '/res/nej_player_video.swf'
 *      // clipboard flash
 *      // default value -> $root+'nej_clipboard.swf'
 *      clipboard : '/res/nej_clipboard.swf'
 *      // https request proxy
 *      // default value -> $root+'nej_proxy_flash.swf'
 *      ajax : '/res/nej_proxy_flash.swf'
 *      // portrait root
 *      // default value -> $root+'portrait/'
 *      portrait : '/res/portrait/'
 *      // cross domain xhr request for ie6-ie9
 *      // if path not start with http[s]://
 *      // will use /res/nej_proxy_frame.html as default
 *      p_frame:['http://c.d.com/html/nej_proxy_frame.html']
 *      // flash crossdomain.xml file path
 *      // default value -> http://a.b.com/crossdomain.xml
 *      p_flash:['http://a.b.com/proxy/crossdomain.xml']
 *      // CSRF cookie name and parameter name
 *      // set p_csrf:true to use URS config {cookie:'AntiCSRF',param:'AntiCSRF'}
 *      // default value -> {cookie:'',param:''}
 *      p_csrf:{cookie:'AntiCSRF',param:'AntiCSRF'}
 *  };
 * ```
 *
 * 配置标识支持
 *
 * | 标识                          | 说明 |
 * | :--              | :-- |
 * | portrait         | 表情根路径 |
 * | blank.png        | 空白图片文件地址 |
 * | ajax.swf         | Ajax代理Flash文件地址 |
 * | chart.swf        | 图标Flash文件地址 |
 * | audio.swf        | 实现Audio功能的Flash文件地址 |
 * | video.swf        | 实现Video功能的Flash文件地址 |
 * | clipboard.swf    | 实现剪切板功能的Flash文件地址 |
 * | upload.image.swf | 实现图片上传功能的Flash文件地址 |
 * | storage.swf      | 实现本地存储功能的Flash文件地址 |
 *
 * @method module:base/config._$get
 * @param  {String}   arg0 - 配置标识
 * @return {Variable}        配置信息
 */
_p._$get = function(_key) {
    return _h.__get(_key);
};

if (true) {
    NEJ.copy(NEJ.P('nej.c'), _p);
}

module.exports = _p;
}.call(window));

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

/*** IMPORTS FROM imports-loader ***/
(function() {

/*
 * ------------------------------------------
 * 常量定义文件
 * @version  1.0
 * @author   genify(caijf)
 * ------------------------------------------
 */
/** @module base/constant */
var NEJ = __webpack_require__(1);
var _c = __webpack_require__(9);
var _p = {};
var _o = {};
var _f = function() {
    return !1;
};
var _r = [];
var _seed = +new Date;
/**
 * 找不到指定内容的错误码
 *
 * @const {Number} module:base/constant._$CODE_NOTFUND
 */
_p._$CODE_NOTFUND = 10000 - _seed;
/**
 * 需要指定的参数未指定的错误码
 *
 * @const {Number} module:base/constant._$CODE_NOTASGN
 */
_p._$CODE_NOTASGN = 10001 - _seed;
/**
 * 不支持操作的错误码
 *
 * @const {Number} module:base/constant._$CODE_NOTSPOT
 */
_p._$CODE_NOTSPOT = 10002 - _seed;
/**
 * 操作超时的错误码
 *
 * @const {Number} module:base/constant._$CODE_TIMEOUT
 */
_p._$CODE_TIMEOUT = 10003 - _seed;
/**
 * 字符串作为脚本执行异常的错误码
 *
 * @const {Number} module:base/constant._$CODE_ERREVAL
 */
_p._$CODE_ERREVAL = 10004 - _seed;
/**
 * 回调执行异常的错误码
 *
 * @const {Number} module:base/constant._$CODE_ERRCABK
 */
_p._$CODE_ERRCABK = 10005 - _seed;
/**
 * 服务器返回异常的错误码
 *
 * @const {Number} module:base/constant._$CODE_ERRSERV
 */
_p._$CODE_ERRSERV = 10006 - _seed;
/**
 * 异常终止的错误码
 *
 * @const {Number} module:base/constant._$CODE_ERRABRT
 */
_p._$CODE_ERRABRT = 10007 - _seed;
/**
 * 请求头content-type统一名称
 *
 * @const {Number} module:base/constant._$HEAD_CT
 */
_p._$HEAD_CT = 'Content-Type';
/**
 * 文本请求头content-type值
 *
 * @const {String} module:base/constant._$HEAD_CT_PLAN
 */
_p._$HEAD_CT_PLAN = 'text/plain';
/**
 * 文件请求头content-type值
 *
 * @const {String} module:base/constant._$HEAD_CT_FILE
 */
_p._$HEAD_CT_FILE = 'multipart/form-data';
/**
 * 表单请求头content-type值
 *
 * @const {String} module:base/constant._$HEAD_CT_FORM
 */
_p._$HEAD_CT_FORM = 'application/x-www-form-urlencoded';
/**
 * 空图片BASE64编码地址，低版本浏览器使用图片地址
 *
 * @const {String} module:base/constant._$BLANK_IMAGE
 */
_p._$BLANK_IMAGE = _c._$get('blank.png') || 'data:image/gif;base64,R0lGODlhAQABAID/AMDAwAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==';

if (true) {
    NEJ.copy(NEJ.P('nej.g'), _p);
}

module.exports = _p;
}.call(window));

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

/*** IMPORTS FROM imports-loader ***/
(function() {

/*
 * ------------------------------------------
 * 事件接口实现文件
 * @version  1.0
 * @author   genify(caijf)
 * ------------------------------------------
 */
/** @module base/event */
var NEJ = __webpack_require__(1);
var _e = __webpack_require__(3);
var _u = __webpack_require__(0);
var _x = __webpack_require__(4);
var _h = __webpack_require__(7);
__webpack_require__(14);
var _p = {};
var _o = {};
var _f = function() {
    return !1;
};
var _r = [];
// {id:{type:[{type:'click',func:function,sfun:function,capt:true},...]}}
// id   - element id
// type - event name, no on prefix
// func - event after wrapper
// capt - capture flag
// sfun - event before wrapper
// link - events link to this event [[element,type,handler,capture],...]
var _xcache = {},
    _y = {}; // chainable methods
/*
 * 取事件类型列表
 * @param  {String} 事件类型
 * @return {Array}  事件列表
 */
var _getTypeList = (function() {
    var _reg = /[\s,;]+/;
    return function(_type) {
        var _type = (_type || '').trim().toLowerCase();
        return !_type ? null : _type.split(_reg);
    };
})();
/*
 * 取鼠标相对于BODY的偏移
 * @param  {Event}  事件对象
 * @param  {String} 类型，X/Y
 * @param  {String} 滚动偏移名称，Left/Top
 * @return {Void}
 */
var _getClientOffset = function(_event, _type, _name) {
    var _key1 = 'page' + _type;
    return _event[_key1] != null ? _event[_key1] : (
        _event['client' + _type] +
        _e._$getPageBox()['scroll' + _name]
    );
};
/*
 * 取鼠标相对于页面的偏移
 * @param  {Event}  事件对象
 * @param  {String} 类型，X/Y
 * @param  {String} 滚动偏移名称，Left/Top
 * @return {Void}
 */
var _getPageOffset = function(_event, _type, _name) {
    var _key3 = 'scroll' + _name;
    _node = _p._$getElement(_event),
        _xret = _getClientOffset(_event, _type, _name);
    while (!!_node &&
        _node != document.body &&
        _node != document.documentElement) {
        _xret += _node[_key3] || 0;
        _node = _node.parentNode;
    }
    return _xret;
};
/*
 * 格式化添加删除事件接口参数
 * @param  {String|Node} 节点ID或者对象
 * @param  {String}      事件类型，不带on前缀，不区分大小写，多个事件用空格分隔
 * @param  {Function}    事件处理函数
 * @param  {Boolean}     是否捕获阶段事件，IE低版本浏览器忽略此参数
 * return  {Object}      格式化后参数
 */
var _doFormatArgs = function(_element, _type, _handler, _capture) {
    var _result = {};
    // check element
    _element = _e._$get(_element);
    if (!_element) {
        return null;
    }
    _e._$id(_element);
    _result.element = _element;
    // check event handler
    if (!_u._$isFunction(_handler)) {
        return null;
    }
    _result.handler = _handler;
    // check type
    var _type = _getTypeList(_type);
    if (!_type) {
        return null;
    }
    // save info
    _result.type = _type;
    _result.capture = !!_capture;
    return _result;
};
/**
 * 节点添加事件，
 * 支持添加自定义事件，
 * 对于自定义事件的实现逻辑由其他模块负责实现
 *
 * 结构举例
 * ```html
 *   <div id="abc">123</div>
 * ```
 *
 * 脚本举例
 * ```javascript
 *   NEJ.define([
 *       'base/event'
 *   ],function(_v){
 *       // 添加系统预定义事件
 *       _v._$addEvent(
 *           'abc','mouseover',function(_event){
 *               // TODO something
 *           },false
 *       );
 *
 *       // 添加自定义事件，回车事件
 *       _v._$addEvent(
 *           'abc','enter',function(_event){
 *               // TODO something
 *           },false
 *       );
 *
 *       // 添加多个事件，用空格分隔
 *       _v._$addEvent(
 *           'abc','mouseover click mousedown',
 *           function(_event){
 *               // TODO something
 *           },false
 *       );
 *   });
 * ```
 *
 * 带自定义事件的类构造或者对象
 * ```javascript
 * NEJ.define([
 *     'base/klass',
 *     'base/event',
 *     'util/event',
 *     'util/event/event'
 * ],function(_k,_v,_t0,_t1,_p){
 *     // 定义类
 *     _p._$$Klass = _k._$klass();
 *     var _pro = _p._$$Klass._$extend(_t0._$$EventTarget);
 *     
 *     // TODO
 *     
 *     // 添加自定义事件支持
 *     // 对节点的事件同样支持此自定义事件
 *     _t1._$$CustomEvent._$allocate({
 *         element:_p._$$Klass,
 *         event:['ok','fail']
 *     });
 * 
 *     // 使用事件接口添加/删除/调度事件
 *     var _handler = function(_event){
 *         // TODO
 *     };
 *     _v._$addEvent(_p._$$Klass,'ok',_handler);
 *     _v._$delEvent(_p._$$Klass,'ok',_handler);
 * });
 * ```
 * 
 * @method module:base/event._$addEvent
 * @see    module:base/event._$delEvent
 * @param  {String|Node|Object} arg0 - 节点或者类构造或者对象
 * @param  {String}      arg1 - 事件类型，不带on前缀，不区分大小写，多个事件用空格分隔
 * @param  {Function}    arg2 - 事件处理函数
 * @param  {Boolean}     arg3 - 是否捕获阶段事件，IE低版本浏览器忽略此参数
 * @return {Void}
 */
/**
 * @method CHAINABLE._$addEvent
 * @see module:base/event._$addEvent
 */
_p._$addEvent =
    _y._$addEvent = (function() {
        // cache event
        // type/handler/link
        var _doCacheEvent = function(_type, _source, _real) {
            var _id = _e._$id(_source.element),
                _cch_id = _xcache[_id] || {},
                _cch_tp = _cch_id[_type] || [];
            _cch_tp.push({
                type: _real.type || _type,
                func: _real.handler || _source.handler,
                sfun: _source.handler,
                capt: _source.capture,
                link: _real.link,
                destroy: _real.destroy
            });
            _cch_id[_type] = _cch_tp;
            _xcache[_id] = _cch_id;
        };
        return function() {
            var _args = _doFormatArgs.apply(null, arguments);
            if (!_args) return;
            _u._$forEach(
                _args.type,
                function(_name) {
                    var _argc = _h.__checkEvent(
                        _args.element,
                        _name, _args.handler
                    );
                    // add event
                    _h.__addEvent(
                        _args.element, _argc.type,
                        _argc.handler, _args.capture
                    );
                    // add event link
                    _u._$forIn(
                        _argc.link,
                        function(_item) {
                            _item[3] = !!_item[3];
                            _h.__addEvent.apply(_h, _item);
                            _item[0] = _e._$id(_item[0]);
                        }
                    );
                    // cache event
                    _doCacheEvent(_name, _args, _argc);
                }
            );
        };
    })();
/**
 * 节点删除事件，输入参数必须保证与添加接口_$addEvent输入参数完全一致
 *
 * 结构举例
 * ```html
 *   <div id="abc">123</div>
 * ```
 *
 * 脚本举例
 * ```javascript
 *   NEJ.define([
 *       'base/event'
 *   ],function(_v){
 *       // 事件回调业务逻辑
 *       var _doCallback = function(_event){
 *           // TODO something
 *           alert('0');
 *       };
 *
 *       // 添加事件
 *       _v._$addEvent('abc','mouseover',_doCallback,false);
 *       // 删除事件，这里参数必须保持完全一致
 *       _v._$delEvent('abc','mouseover',_doCallback,false);
 *
 *       // 比如以下方式虽然回调的业务逻辑一致，但是无法删除之前添加的事件
 *       _v._$delEvent(
 *           'abc',"mouseover",function(_event){
 *               // TODO something
 *               alert('0');
 *           },false
 *       );
 *
 *       // 删除多个事件
 *       _v._$delEvent(
 *           'abc','mouseover click mouseup',
 *           _doCallback,false
 *       );
 *   });
 * ```
 *
 * @method module:base/event._$delEvent
 * @see    module:base/event._$addEvent
 * @param  {String|Node} arg0 - 节点ID或者对象
 * @param  {String}      arg1 - 事件类型，不带on前缀，不区分大小写，多个事件用空格分隔
 * @param  {Function}    arg2 - 事件处理函数
 * @param  {Boolean}     arg3 - 是否捕获阶段事件
 * @return {Void}
 */
/**
 * @method CHAINABLE._$delEvent
 * @see module:base/event._$delEvent
 */
_p._$delEvent =
    _y._$delEvent = (function() {
        var _unCacheEvent = function(_type, _conf) {
            var _id = _e._$id(_conf.element),
                _cch_id = _xcache[_id] || _o,
                _cch_tp = _cch_id[_type],
                _index = _u._$indexOf(
                    _cch_tp,
                    function(_item) {
                        // check handler and capture
                        return _item.sfun === _conf.handler &&
                            _item.capt === _conf.capture;
                    }
                );
            // check result
            var _result = null;
            if (_index >= 0) {
                var _item = _cch_tp.splice(_index, 1)[0];
                _result = [
                    [
                        _conf.element, _item.type,
                        _item.func, _conf.capture
                    ]
                ];
                if (!!_item.link) {
                    // complete element by id
                    _u._$forEach(_item.link, function(v) {
                        v[0] = _e._$get(v[0]);
                    });
                    _result.push.apply(_result, _item.link);
                }
                if (!!_item.destroy) {
                    _item.destroy();
                }
                // clear cache
                if (!_cch_tp.length) {
                    delete _cch_id[_type];
                }
                if (!_u._$hasProperty(_cch_id)) {
                    delete _xcache[_id];
                }
            }
            return _result;
        };
        return function() {
            var _args = _doFormatArgs.apply(null, arguments);
            if (!_args) return;
            _u._$forEach(
                _args.type,
                function(_name) {
                    _u._$forEach(
                        _unCacheEvent(_name, _args),
                        function(_item) {
                            _h.__delEvent.apply(_h, _item);
                        }
                    );
                }
            );
        };
    })();
/**
 * 清除节点事件
 *
 * 结构举例
 * ```html
 *   <div id="abc">123</div>
 * ```
 *
 * 脚本举例
 * ```javascript
 *   NEJ.define([
 *       'base/event'
 *   ],function(_v){
 *       // 添加事件
 *       _v._$addEvent(
 *           'abc','mouseover',function(_event){
 *               // TODO something
 *           }
 *       );
 *       _v._$addEvent(
 *           'abc','mouseover',function(_event){
 *               // TODO something
 *           },true
 *       );
 *       _v._$addEvent(
 *           'abc','custom',function(_event){
 *               // TODO something
 *           }
 *       );
 *
 *       // 清除节点所有事件，包括两个mouseover事件和一个custom事件
 *       _v._$clearEvent('abc');
 *
 *       // 清除节点指定类型事件，只清除两个mouseover事件
 *       _v._$clearEvent('abc','mouseover');
 *
 *       // 清除多个事件，用空格分隔
 *       _v._$clearEvent('abc','mouseover custom');
 *   });
 * ```
 *
 * @method module:base/event._$clearEvent
 * @see    module:base/event._$delEvent
 * @param  {String|Node} arg0 - 节点ID或者对象
 * @param  {String}      arg1 - 事件类型，不带on前缀，不区分大小写，多个事件用空格分隔
 * @return {Void}
 */
/**
 * @method CHAINABLE._$clearEvent
 * @see module:base/event._$clearEvent
 */
_p._$clearEvent =
    _y._$clearEvent = (function() {
        var _doClearEvent = function(_id, _name, _list) {
            _u._$reverseEach(
                _list,
                function(_item) {
                    _p._$delEvent(
                        _id, _name, _item.sfun, _item.capt
                    );
                }
            );
        };
        return function(_element, _type) {
            var _id = _e._$id(_element);
            if (!_id) return;
            var _cch_id = _xcache[_id];
            if (!!_cch_id) {
                _type = _getTypeList(_type);
                if (!!_type) {
                    // clear event by type
                    _u._$forEach(
                        _type,
                        function(_name) {
                            _doClearEvent(_id, _name, _cch_id[_name]);
                        }
                    );
                } else {
                    // clear all event
                    _u._$loop(
                        _cch_id,
                        function(_value, _name) {
                            _p._$clearEvent(_element, _name);
                        }
                    );
                }
            }
        };
    })();
/**
 * 触发对象的某个事件，注：对于IE浏览器该接口节点事件有以下限制
 *
 * * 捕获阶段支持需要浏览器IE9+
 * * 节点上自定义事件支持需要浏览器IE9+
 *
 *
 * 结构举例
 * ```html
 *   <div id="abc">123</div>
 * ```
 *
 * 脚本举例
 * ```javascript
 *   NEJ.define([
 *       'base/event'
 *   ],function(_v){
 *       // 注册鼠标事件
 *       _v._$addEvent(
 *           'abc','click',function(_event){
 *               // 获取鼠标事件触发的垂直位置
 *               var _y = _v._$pageY(_event);
 *           }
 *       );
 *       // 触发鼠标事件
 *       _v._$dispatchEvent('abc','click');
 *
 *       // 注册自定义事件
 *       _v._$addEvent(
 *           'abc','ok',function(_event){
 *               // TODO something
 *           }
 *       );
 *       // 触发自定义事件
 *       _v._$dispatchEvent('abc','ok');
 *   });
 * ```
 *
 * @method module:base/event._$dispatchEvent
 * @param  {String|Node} arg0 - 节点ID或者对象
 * @param  {String}      arg1 - 鼠标事件类型，不区分大小写，多个事件用空格分隔
 * @param  {Object}      arg2 - 传递的参数信息
 * @return {Void}
 */
/**
 * @method CHAINABLE._$dispatchEvent
 * @see module:base/event._$dispatchEvent
 */
_p._$dispatchEvent =
    _y._$dispatchEvent = function(_element, _type, _options) {
        var _element = _e._$get(_element);
        if (!!_element) {
            _u._$forEach(
                _getTypeList(_type),
                function(_name) {
                    var _result = _h.__checkEvent(
                        _element, _name
                    );
                    _h.__dispatchEvent(
                        _element, _result.type, _options
                    );
                }
            );
        }
    };
/**
 * 获取触发事件的节点，可以传入过滤接口来遍历父节点找到符合条件的节点
 *
 * 结构举例
 * ```html
 *   <div id="a">
 *     <p>
 *       <span id="b">123</span>
 *       <span link="a">123</span>
 *       <span class="a link">123</span>
 *       <span data-link="a">123</span>
 *       <label>aaaaa</label>
 *     </p>
 *   </div>
 * ```
 *
 * 脚本举例
 * ```javascript
 *   NEJ.define([
 *       'base/event'
 *   ],function(_v){
 *       // 取事件触发节点
 *       _v._$addEvent(
 *           'b','click',function(_event){
 *               // id为b的节点
 *               var _node = _v._$getElement(_event);
 *               // TODO something
 *           }
 *       );
 *
 *       // 事件触发，取id是a的节点
 *       _v._$addEvent(
 *           'b','click',function(_event){
 *               // id为a的节点
 *               var _node = _v._$getElement(
 *                   _event,function(_element){
 *                       return _element.id=='a';
 *                   }
 *               );
 *               // TODO something
 *
 *               // class含link或者属性含link或者data-link的节点
 *               var _node = _v._$getElement(_event,'link');
 *
 *               // 仅匹配class即 class="link xx xxx"
 *               var _node = _v._$getElement(_event,'c:link');
 *
 *               // 仅匹配dataset即 data-link="aaaa"
 *               var _node = _v._$getElement(_event,'d:link');
 *
 *               // 仅匹配attributer即 link="aaa"
 *               var _node = _v._$getElement(_event,'a:link');
 *
 *               // 仅匹配tag即 <label>
 *               var _node = _v._$getElement(_event,'t:label');
 *           }
 *       );
 *   });
 * ```
 *
 * @method module:base/event._$getElement
 * @param  {Event}    arg0 - 事件对象
 * @param  {Function} arg1 - 过滤接口
 * @return {Node}            符合条件的节点
 */
_p._$getElement = function(_event) {
    if (!_event) return null;
    var _element = _event.target ||
        _event.srcElement,
        _filter = arguments[1];
    return _e._$getParent(_element, _filter);
};
/**
 * 阻止事件，包括默认事件和传递事件
 *
 * 结构举例
 * ```html
 *   <div id="a">
 *     <a href="xxx.html" id="b">123</a>
 *   </div>
 * ```
 *
 * 脚本举例
 * ```javascript
 *   NEJ.define([
 *       'base/event'
 *   ],function(_v){
 *       // 事件回调中阻止事件冒泡
 *       _v._$addEvent(
 *           'b','click',function(_event){
 *               // 阻止事件继续传播
 *               // 阻止链接打开的默认事件
 *               _v._$stop(_event);
 *           }
 *       );
 *
 *       // a节点上的点击事件不会触发
 *       _v._$addEvent(
 *           'a','click',function(_event){
 *               alert(0);
 *               // TODO something
 *           }
 *       );
 *   });
 * ```
 *
 * @method module:base/event._$stop
 * @see    module:base/event._$stopBubble
 * @see    module:base/event._$stopDefault
 * @param  {Event} arg0 - 要阻止的事件对象
 * @return {Void}
 */
_p._$stop = function(_event) {
    _p._$stopBubble(_event);
    _p._$stopDefault(_event);
};
/**
 * 阻止事件的冒泡传递
 *
 * 结构举例
 * ```html
 *   <div id="a">
 *     <a href="xxx.html" id="b">123</a>
 *   </div>
 * ```
 *
 * 脚本举例
 * ```javascript
 *   NEJ.define([
 *       'base/event'
 *   ],function(_v){
 *       // 事件回调中阻止事件冒泡
 *       _v._$addEvent(
 *           'b','click',function(_event){
 *               // 阻止事件继续传播
 *               // 链接仍然会被打开
 *               _v._$stopBubble(_event);
 *           }
 *       );
 *
 *       // a节点上的点击事件不会触发
 *       _v._$addEvent(
 *           'a','click',function(_event){
 *               alert(0);
 *               // TODO something
 *           }
 *       );
 *   });
 * ```
 *
 * @see    module:base/event._$stop}
 * @method module:base/event._$stopBubble
 * @param  {Event} arg0 - 要阻止的事件对象
 * @return {Void}
 */
_p._$stopBubble = function(_event) {
    if (!!_event) {
        !!_event.stopPropagation ?
            _event.stopPropagation() :
            _event.cancelBubble = !0;
    }
};
/**
 * 阻止标签的默认事件
 *
 * 结构举例
 * ```html
 *   <div id="a">
 *     <a href="xxx.html" id="b">123</a>
 *   </div>
 * ```
 *
 * 脚本举例
 * ```javascript
 *   NEJ.define([
 *       'base/event'
 *   ],function(_v){
 *       // 事件回调中阻止链接默认事件
 *       _v._$addEvent(
 *           'b','click',function(_event){
 *               // 阻止链接打开页面的默认行为
 *               _v._$stopDefault(_event);
 *           }
 *       );
 *
 *       // a节点上的点击事件仍然会触发
 *       _v._$addEvent(
 *           'a','click',function(_event){
 *               alert(0);
 *               // TODO something
 *           }
 *       );
 *   });
 * ```
 *
 * @method module:base/event._$stopDefault
 * @see    module:base/event._$stop
 * @param  {Event} arg0 - 要阻止的事件对象
 * @return {Void}
 */
_p._$stopDefault = function(_event) {
    if (!!_event) {
        !!_event.preventDefault ?
            _event.preventDefault() :
            _event.returnValue = !1;
    }
};
/**
 * 取事件相对于页面的位置
 *
 * 结构举例
 * ```html
 *   <div id="abc" style="width:100%;height:100%;">123</div>
 * ```
 *
 * 脚本举例
 * ```javascript
 *   NEJ.define([
 *       'base/event'
 *   ],function(_v){
 *       // 回调中取鼠标位置
 *       _v._$addEvent(
 *           'abc','click',function(_event){
 *               // 获取鼠标事件触发的水平、垂直位置
 *               var _pos = _v._$page(_event);
 *           }
 *       );
 *   });
 * ```
 *
 * @method module:base/event._$page
 * @see    module:base/event._$pageX
 * @see    module:base/event._$pageY
 * @param  {Event}  arg0 - 事件对象
 * @return {Object}        位置信息，{x:10,y:10}
 */
_p._$page = function(_event) {
    return {
        x: _p._$pageX(_event),
        y: _p._$pageY(_event)
    };
};
/**
 * 取事件相对于页面左侧的位置，累加所有内部滚动高度
 *
 * 结构举例
 * ```html
 *   <div id="abc" style="width:100%;height:100%;">123</div>
 * ```
 *
 * 脚本举例
 * ```javascript
 *   NEJ.define([
 *       'base/event'
 *   ],function(_v){
 *       // 回调中取鼠标位置
 *       _p._$addEvent(
 *           'abc','click',function(_event){
 *               // 获取鼠标事件触发的水平位置
 *               var _x = _v._$pageX(_event);
 *           }
 *       );
 *   });
 * ```
 *
 * @method module:base/event._$pageX
 * @see    module:base/event._$clientX
 * @param  {Event}  arg0 - 事件对象
 * @return {Number}        水平位置
 */
_p._$pageX = function(_event) {
    return _getPageOffset(_event, 'X', 'Left');
};
/**
 * 取事件相对于页面顶部的位置，累加所有内部滚动高度
 *
 * 结构举例
 * ```html
 *   <div id="abc" style="width:100%;height:100%;">123</div>
 * ```
 *
 * 脚本举例
 * ```javascript
 *   NEJ.define([
 *       'base/event'
 *   ],function(_v){
 *       // 回调中取鼠标位置
 *       _v._$addEvent(
 *           'abc','click',function(_event){
 *               // 获取鼠标事件触发的垂直位置
 *               var _y = _v._$pageY(_event);
 *           }
 *       );
 *   });
 * ```
 *
 * @method module:base/event._$pageY
 * @see    module:base/event._$clientY
 * @param  {Event}  arg0 - 事件对象
 * @return {Number}        垂直位置
 */
_p._$pageY = function(_event) {
    return _getPageOffset(_event, 'Y', 'Top');
};
/**
 * 取事件相对于页面左侧的位置，仅累加页面滚动高度
 *
 * 结构举例
 * ```html
 *   <div id="abc" style="width:100%;height:100%;">123</div>
 * ```
 *
 * 脚本举例
 * ```javascript
 *   NEJ.define([
 *       'base/event'
 *   ],function(_v){
 *       // 回调中取鼠标位置
 *       _p._$addEvent(
 *           'abc','click',function(_event){
 *               // 获取鼠标事件触发的水平位置
 *               var _x = _v._$clientX(_event);
 *           }
 *       );
 *   });
 * ```
 *
 * @method module:base/event._$clientX
 * @see    module:base/event._$pageX
 * @param  {Event}  arg0 - 事件对象
 * @return {Number}        水平位置
 */
_p._$clientX = function(_event) {
    return _getClientOffset(_event, 'X', 'Left');
};
/**
 * 取事件相对于页面顶部的位置，仅累加页面滚动高度
 *
 * 结构举例
 * ```html
 *   <div id="abc" style="width:100%;height:100%;">123</div>
 * ```
 *
 * 脚本举例
 * ```javascript
 *   NEJ.define([
 *       'base/event'
 *   ],function(_v){
 *       // 回调中取鼠标位置
 *       _v._$addEvent(
 *           'abc','click',function(_event){
 *               // 获取鼠标事件触发的垂直位置
 *               var _y = _v._$pageY(_event);
 *           }
 *       );
 *   });
 * ```
 *
 * @method module:base/event._$clientY
 * @see    module:base/event._$pageY
 * @param  {Event}  arg0 - 事件对象
 * @return {Number}        垂直位置
 */
_p._$clientY = function(_event) {
    return _getClientOffset(_event, 'Y', 'Top');
};

// for chainable method
_x._$merge(_y);

if (true) {
    NEJ.copy(NEJ.P('nej.v'), _p);
}



for (var k in _p) {
    if (_p.hasOwnProperty(k)) {
        exports[k] = _p[k];
    }
}
}.call(window));

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

/*** IMPORTS FROM imports-loader ***/
(function() {

/*
 * ------------------------------------------
 * 平台适配接口实现文件
 * @version  1.0
 * @author   genify(caijf)
 * ------------------------------------------
 */
var _h = __webpack_require__(5);
var _m = __webpack_require__(2);
var _p = {};
var _o = {};
var _f = function() {
    return !1;
};
var _r = [];
// for ie
NEJ.patch('TR', function() {
    _h.__set(
        'storage.swf',
        (this.NEJ_CONF || _o).storage ||
        (_h.__get('root') + 'nej_storage.swf')
    );
});
// for ie7- data uri not available
NEJ.patch('TR<=3.0', function() {
    _h.__set(
        'blank.png',
        (this.NEJ_CONF || _o).blank ||
        (_h.__get('root') + 'nej_blank.gif')
    );
});

module.exports = _h;
}.call(window));

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

/*** IMPORTS FROM imports-loader ***/
(function() {

/*
 * ------------------------------------------
 * 平台适配接口实现文件
 * @version  1.0
 * @author   genify(caijf)
 * ------------------------------------------
 */
var _h = __webpack_require__(6);
var _m = __webpack_require__(2);
var _u = __webpack_require__(0);
var _p = {};
var _o = {};
var _f = function() {
    return !1;
};
var _r = [];
// for ie
NEJ.patch('TR', function() {
    /**
     * 取节点的子节点列表
     * @param  {Node} _element 节点ID或者对象
     * @return {Array}         子节点列表
     */
    _h.__getChildren = _h.__getChildren._$aop(
        function(_event) {
            var _element = _event.args[0];
            if (!!_element.children) return;
            // hack children
            _event.stopped = !0;
            var _result = [];
            _u._$forEach(
                _element.childNodes,
                function(_node) {
                    if (_node.nodeType == 1) {
                        _result.push(_node);
                    }
                }
            );
            _event.value = _result;
        }
    );
});
// for ie10-
NEJ.patch('TR<=6.0', function() {
    /**
     * 设置、获取数据
     * @param {Node}     节点
     * @param {String}   标识
     * @param {Variable} 值
     */
    _h.__dataset = (function() {
        var _dataset = {},
            _tag = 'data-',
            _reg = /\-(.{1})/gi;
        // init element dataset
        var _init = function(_element) {
            var _id = _element.id;
            if (!!_dataset[_id]) return;
            var _map = {};
            _u._$forEach(
                _element.attributes,
                function(_node) {
                    var _key = _node.nodeName;
                    if (_key.indexOf(_tag) != 0) return;
                    _key = _key.replace(_tag, '')
                        .replace(_reg, function($1, $2) {
                            return $2.toUpperCase();
                        });
                    _map[_key] = _node.nodeValue || '';
                }
            );
            _dataset[_id] = _map;
        };
        return function(_element, _key, _value) {
            _init(_element);
            var _set = _dataset[_element.id];
            if (_value !== undefined) {
                _set[_key] = _value;
            }
            return _set[_key];
        };
    })();
});
// for ie9-
NEJ.patch('TR<=5.0', function() {
    // cache background image
    try {
        document.execCommand('BackgroundImageCache', !1, !0);
    } catch (e) {}
    /**
     * 注入样式
     * @param  {Node}   样式节点
     * @param  {String} 样式内容
     * @return {Void}
     */
    _h.__injectCSSText = (function() {
        var _max = 30;
        return _h.__injectCSSText._$aop(function(_event) {
            var _element = _event.args[0];
            if (!_element.styleSheet) return;
            _event.stopped = !0;
            var _css = _event.args[1];
            // ie9- has 31 style/link limitation
            var _list = document.styleSheets;
            if (_list.length > _max) {
                // bad performance
                _element = _list[_max];
                _css = _element.cssText + _css;
            } else {
                _element = _element.styleSheet;
            }
            _element.cssText = _css;
        });
    })();
    /**
     * 取待验证的样式正则表达式
     * @param  {String} 样式，多个以空格分隔
     * @return {RegExp} 正则表达式
     */
    _h.__getClassRegExp = (function() {
        var _reg = /\s+/g;
        return function(_class) {
            _class = (_class || '').trim().replace(_reg, '|');
            return !_class ? null : new RegExp('(\\s|^)(?:' + _class + ')(?=\\s|$)', 'g');
        };
    })();
    /**
     * 操作样式
     * @param  {Node}   节点
     * @param  {String} 操作
     * @param  {String} 样式
     * @return {Void}
     */
    _h.__processClassName = function(_element, _type, _class) {
        _class = _class || '';
        var _name = _element.className || '',
            _xreg = _h.__getClassRegExp(
                _class + ' ' + (arguments[3] || '')
            );
        // remove all calss
        var _result = _name;
        if (!!_xreg) {
            _result = _result.replace(_xreg, '');
        }
        // parse added class
        switch (_type) {
            case 'remove':
                _class = '';
                break;
            case 'replace':
                _class = arguments[3] || '';
                break;
        }
        // generate class result
        _result = (_result + ' ' + _class).trim();
        if (_name != _result) {
            _element.className = _result;
        }
    };
    /**
     * 检测节点是否包含指定样式，多个样式用空格分隔，检测时包含其中之一即表示包含
     * @param  {Node}    节点ID或者对象
     * @param  {String}  样式串
     * @return {Boolean} 是否含指定样式
     */
    _h.__hasClassName = function(_element, _class) {
        var _xreg = _h.__getClassRegExp(_class);
        if (!!_xreg) {
            return _xreg.test(_element.className || '');
        }
        return !1;
    };
});
// for ie8-
NEJ.patch('TR<=4.0', function() {
    /**
     * 根据类名取节点列表
     * @param  {Node}   节点ID或者对象
     * @param  {String} 类名
     * @return {Array}  节点列表
     */
    _h.__getElementsByClassName = function(_element, _class) {
        var _result = [],
            _regexp = new RegExp('(\\s|^)(?:' + _class.replace(/\s+/g, '|') + ')(?=\\s|$)');
        _u._$forEach(
            _element.getElementsByTagName('*'),
            function(_node) {
                if (_regexp.test(_node.className)) {
                    _result.push(_node);
                }
            }
        );
        return _result;
    };
    /**
     * 取下一个兄弟节点
     * @param  {Node}  节点对象
     * @return {Node}  节点
     */
    _h.__nextSibling = function(_element) {
        while (_element = _element.nextSibling) {
            if (_element.nodeType == 1) {
                return _element;
            }
        }
    };
    /**
     * 取上一个兄弟节点
     * @param  {Node}  节点对象
     * @return {Node}  节点
     */
    _h.__previousSibling = function(_element) {
        while (_element = _element.previousSibling) {
            if (_element.nodeType == 1) {
                return _element;
            }
        }
    };
    /**
     * 将dom节点转为xml串
     * @param  {Node}   节点
     * @return {String} XML代码
     */
    _h.__serializeDOM2XML = function(_dom) {
        return ('xml' in _dom) ? _dom.xml : _dom.outerHTML;
    };
    /**
     * 将xml转为dom节点
     * @param  {String} XML代码
     * @return {Node}   节点
     */
    _h.__parseDOMFromXML = (function() {
        // http://blogs.msdn.com/b/xmlteam/archive/2006/10/23/using-the-right-version-of-msxml-in-internet-explorer.aspx
        var _msxml = [
            'Msxml2.DOMDocument.6.0',
            'Msxml2.DOMDocument.3.0'
        ];
        var _getParser = function() {
            try {
                for (var i = 0, l = _msxml.length; i < l; i++) {
                    return new ActiveXObject(_msxml[i]);
                }
            } catch (ex) {
                return null;
            }
        };
        return function(_xml) {
            var _parser = _getParser();
            if (!!_parser &&
                _parser.loadXML(_xml) &&
                !_parser.parseError.errorCode) {
                return _parser.documentElement;
            }
            return null;
        };
    })();
    /**
     * 取样式值
     * @param  {String|Node} 节点
     * @param  {String}      样式名称
     * @return {Variable}    样式值
     */
    _h.__getStyleValue = (function() {
        var _reg0 = /opacity\s*=\s*([\d]+)/i;
        var _fmap = {
            // get opacity from filter:alpha(opacity=50)
            opacity: function(_style) {
                var _result = 0;
                if (_reg0.test(_style.filter || '')) {
                    _result = parseFloat(RegExp.$1) / 100;
                }
                return _result;
            }
        };
        return function(_element, _name) {
            var _current = _element.currentStyle,
                _func = _fmap[_name];
            if (!!_func) {
                return _func(_current);
            }
            return _current[_h.__getStyleName(_name)] || '';
        };
    })();
    /**
     * 设置样式
     * @param  {String|Node} 节点
     * @param  {String}      样式名称
     * @param  {String}      样式值
     * @return {Void}
     */
    _h.__setStyleValue = (function() {
        var _fmap = {
            // opacity -> filter:alpha(opacity=50)
            opacity: function(_element, _value) {
                _element.style.filter = 'alpha(opacity=' + _value * 100 + ')';
            }
        };
        return function(_element, _name, _value) {
            var _func = _fmap[_name];
            if (!!_func) {
                _func(_element, _value);
            } else {
                _element.style[_h.__getStyleName(_name)] = _value;
            }
        };
    })();
    /**
     * 追加CSS规则
     * @param  {Node}    样式节点
     * @param  {String}  单条样式规则
     * @return {CSSRule} 样式规则对象
     */
    _h.__appendCSSText = function(_element, _css) {
        var _sheet = _element.styleSheet,
            _length = _sheet.rules.length,
            _arr = _css.split(/[\{\}]/);
        _sheet.addRule(_arr[0], _arr[1], _length);
        return _sheet.rules[_length];
    };
});
// for ie7-
NEJ.patch('TR<=3.0', function() {
    /**
     * 取节点属性值
     * @param  {Node}   节点
     * @param  {String} 属性名
     * @return {String} 属性值
     */
    _h.__getAttribute =
        _h.__getAttribute._$aop(null, function(_event) {
            // fix ie7 maxlength default value 2147483647
            var _args = _event.args;
            if (_args[1] == 'maxlength' &&
                _event.value == 2147483647) {
                _event.value = null;
            }
        });
});
// for ie6-
NEJ.patch('TR<=2.0', function() {
    /**
     * 节点占全屏
     * @param  {Node}   节点
     * @param  {Object} 视窗模型
     * @return {Void}
     */
    _h.__fullScreen = function(_element, _viewport) {
        var _style = _element.style;
        _style.width = _viewport.scrollWidth + 'px';
        _style.height = _viewport.scrollHeight + 'px';
    };
    /**
     * 为节点增加用于盖select/flash等控件的层
     * @param  {Node} 节点
     * @return {Void}
     */
    _h.__mask = (function() {
        var _cache = {};
        // remove mask
        _h.__unmask = function(_element) {
            var _id = _element.id,
                _mask = _cache[_id];
            if (!!_mask) {
                delete _cache[_id];
                _mask.parentNode.removeChild(_mask);
            }
        };
        // append mask
        return function(_element) {
            var _id = _element.id,
                _mask = _cache[_id];
            // create mask
            if (!_mask) {
                _mask = document.createElement('iframe');
                _mask.style.position = 'absolute';
                _cache[_id] = _mask;
            }
            // sync mask size
            var _style1 = _mask.style,
                _style0 = _element.style;
            _style1.top = (parseInt(_style0.top) || 0) + 'px';
            _style1.left = (parseInt(_style0.left) || 0) + 'px';
            _style1.width = _element.offsetWidth + 'px';
            _style1.height = _element.offsetHeight + 'px';
            _element.insertAdjacentElement('beforeBegin', _mask);
            return _mask;
        };
    })();
});
// for firefox
NEJ.patch('GR', function() {
    if (!_m._$SUPPORT.css3d) {
        _m._$SUPPORT.css3d = 'MozPerspective' in document.body.style;
    }
    if (!('insertAdjacentElement' in document.body)) {
        HTMLElement.prototype.insertAdjacentElement = function(_where, _element) {
            if (!_where || !_element) return;
            switch (_where) {
                case 'beforeEnd':
                    this.appendChild(_element);
                    return;
                case 'beforeBegin':
                    this.parentNode.insertBefore(_element, this);
                    return;
                case 'afterBegin':
                    !this.firstChild ?
                        this.appendChild(_element) :
                        this.insertBefore(_element, this.firstChild);
                    return;
                case 'afterEnd':
                    !this.nextSibling ?
                        this.parentNode.appendChild(_element) :
                        this.parentNode.insertBefore(_element, this.nextSibling);
                    return;
            }
        };
    }
    if (!('innerText' in document.body)) {
        HTMLElement.prototype['__defineGetter__']("innerText", function() {
            return this.textContent;
        });
        HTMLElement.prototype['__defineSetter__']("innerText", function(_content) {
            this.textContent = _content;
        });
    }
});

module.exports = _h;
}.call(window));

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

/*** IMPORTS FROM imports-loader ***/
(function() {

/*
 * ------------------------------------------
 * 平台适配接口实现文件
 * @version  1.0
 * @author   genify(caijf)
 * ------------------------------------------
 */
var _h = __webpack_require__(7);
var _u = __webpack_require__(0);
var _p = {};
var _o = {};
var _f = function() {
    return !1;
};
var _r = [];
// for ie10+
NEJ.patch('TR>=6.0', function() {
    /**
     * 验证事件信息
     * @param  {Node}     节点
     * @param  {String}   事件类型
     * @param  {Function} 处理函数
     * @return {Object}   验证后事件信�? type/handler
     */
    _h.__checkEvent = (function() {
        var _emap = {
            touchcancel: 'MSPointerCancel',
            touchstart: 'MSPointerDown',
            touchmove: 'MSPointerMove',
            touchend: 'MSPointerUp',
            fullscreenchange: 'MSFullscreenChange'
        };
        return _h.__checkEvent._$aop(function(_event) {
            var _args = _event.args;
            // check event convert
            var _name = _emap[_args[1]];
            if (!!_name) {
                _event.stopped = !0;
                _event.value = {
                    type: _name,
                    handler: _args[2]
                };
            }
        });
    })();
});
// for ie9
NEJ.patch('TR==5.0', function() {
    /**
     * 验证事件信息
     * @param  {Node}     节点
     * @param  {String}   事件类型
     * @param  {Function} 处理函数
     * @return {Object}   验证后事件信�? type/handler
     */
    _h.__checkEvent = (function() {
        var _vmap = {};
        var _fmap = {
            input: function(_element, _type, _handler) {
                // for check type only
                if (!_handler) {
                    return {
                        type: _type
                    };
                }
                // fix input backspace/delete/ctrl+x bug
                return {
                    type: _type,
                    handler: function(_event) {
                        var _id = _element.id;
                        _vmap[_id] = _element.value;
                        _handler.call(_element, _event);
                    },
                    link: [
                        [
                            document, 'selectionchange',
                            function(_event) {
                                var _id = _element.id;
                                if (_element != document.activeElement) {
                                    delete _vmap[_id];
                                    return;
                                }
                                if (_vmap[_id] !== _element.value) {
                                    _vmap[_id] = _element.value;
                                    _handler.call(_element, _event);
                                }
                            }
                        ]
                    ]
                };
            }
        };
        return _h.__checkEvent._$aop(function(_event) {
            var _args = _event.args;
            // check event update
            var _func = _fmap[_args[1]];
            if (!!_func) {
                _event.stopped = !0;
                _event.value = _func.apply(null, _args);
            }
        });
    })();
});
// for ie9+
NEJ.patch('TR>=5.0', function() {
    // must use attach/detach for event
    var _attached = {
        'propertychange': 1
    };
    /**
     * 添加事件
     * @param  {Node}     节点
     * @param  {String}   事件
     * @param  {Function} 处理函数
     * @param  {Boolean}  是否捕捉阶段
     * @return {Void}
     */
    _h.__addEvent =
        _h.__addEvent._$aop(function(_event) {
            var _args = _event.args;
            if (_attached[_args[1]] != null && !!_args[0].attachEvent) {
                _event.stopped = !0;
                _args[0].attachEvent('on' + _args[1], _args[2]);
            }
        });
    /**
     * 删除事件
     * @param  {Node}     节点
     * @param  {String}   事件
     * @param  {Function} 处理函数
     * @param  {Boolean}  是否捕捉阶段
     * @return {Void}
     */
    _h.__delEvent =
        _h.__delEvent._$aop(function(_event) {
            var _args = _event.args,
                _alias = _attached[_args[1]];
            if (_attached[_args[1]] != null && !!_args[0].detachEvent) {
                _event.stopped = !0;
                _args[0].detachEvent('on' + _args[1], _args[2]);
            }
        });
});
// for ie8-
NEJ.patch('TR<=4.0', function() {
    /**
     * 验证事件信息
     * @param  {Node}     节点
     * @param  {String}   事件类型
     * @param  {Function} 处理函数
     * @return {Object}   验证后事件信�? type/handler
     */
    _h.__checkEvent = (function() {
        var _lmap = {};
        var _fmap = {
            input: function(_element, _type, _handler) {
                var _result = {
                    type: 'propertychange'
                };
                if (!!_handler) {
                    var _id = _element.id;
                    var _hack = function(_event) {
                        if (!!_element.value && !_lmap['x-' + _id]) {
                            _lmap['x-' + _id] = !0;
                            _handler.call(_element, _event);
                        }
                    };
                    _result.handler = function(_event) {
                        // for input.value or textarea.value
                        if (('value' in _element) &&
                            _event.propertyName == 'value') {
                            // lock cycle trigger
                            if (!!_lmap[_id]) {
                                return;
                            }
                            _lmap[_id] = !0;
                            _handler.call(_element, _event);
                            delete _lmap[_id];
                        }
                    };
                    _result.link = [
                        [_element, 'keyup', _hack],
                        [_element, 'mouseup', _hack],
                        [_element, 'mousemove', _hack]
                    ];
                    _result.destroy = function() {
                        delete _lmap[_id];
                        delete _lmap['x-' + _id];
                    };
                }
                return _result;
            },
            load: function(_element, _type, _handler) {
                var _result = {
                    type: 'readystatechange'
                };
                if (!!_handler) {
                    _result.handler = function(_event) {
                        if (_element.readyState == 'loaded' ||
                            _element.readyState == 'complete') {
                            _handler.call(_element, _event);
                        }
                    };
                }
                return _result;
            }
        };
        return _h.__checkEvent._$aop(function(_event) {
            var _args = _event.args;
            // check event update
            var _func = _fmap[_args[1]];
            if (!!_func) {
                _event.stopped = !0;
                _event.value = _func.apply(null, _args);
            }
            // use element for this in handler
            if (!!_args[2]) {
                _args[2] = _args[2]._$bind(_args[0]);
            }
        });
    })();
    /**
     * 添加事件
     * @param  {Node}     节点
     * @param  {String}   事件
     * @param  {Function} 处理函数
     * @param  {Boolean}  是否捕捉阶段
     * @return {Void}
     */
    _h.__addEvent = function() {
        var _args = arguments;
        if (false) {
            if (!(('on' + _args[1]) in _args[0])) {
                console.log('not support event[' + _args[1] + '] for ' + _args[0]);
            }
        }
        _args[0].attachEvent('on' + _args[1], _args[2]);
    };
    /**
     * 删除事件
     * @param  {Node}     节点
     * @param  {String}   事件
     * @param  {Function} 处理函数
     * @param  {Boolean}  是否捕捉阶段
     * @return {Void}
     */
    _h.__delEvent = function() {
        var _args = arguments;
        _args[0].detachEvent('on' + _args[1], _args[2]);
    };
    /**
     * 触发对象的某个事�?
     * @param  {String|Node} 节点ID或�?�对�?
     * @param  {String}      鼠标事件类型
     * @return {Void}
     */
    _h.__dispatchEvent = (function() {
        var _omap = {
            propertychange: {
                propertyName: 'value'
            }
        };
        return function(_element, _type, _options) {
            var _event = document.createEventObject();
            try {
                _u._$merge(_event, _omap[_type], _options);
                _element.fireEvent('on' + _type, _event);
            } catch (ex) {
                // ignore unrecognized event name
                console.error(ex.message);
                console.error(ex.stack);
            }
        };
    })();
});
// for firefox
NEJ.patch('GR', function() {
    /**
     * 验证事件信息
     * @param  {Node}     节点
     * @param  {String}   事件类型
     * @param  {Function} 处理函数
     * @return {Object}   验证后事件信�? type/handler
     */
    _h.__checkEvent = (function() {
        var _nreg = /^(?:transitionend|animationend|animationstart|animationiteration)$/i;
        var _fmap = {
            mousewheel: function(_element, _type, _handler) {
                var _result = {
                    type: 'MozMousePixelScroll'
                };
                if (!!_handler) {
                    _result.handler = function(_event) {
                        var _delta = _event.detail;
                        _event.wheelDelta = -_delta;
                        _event.wheelDeltaY = -_delta;
                        _event.wheelDeltaX = 0;
                        _handler.call(_element, _event);
                    };
                }
                return _result;
            }
        };
        return _h.__checkEvent._$aop(function(_event) {
            var _args = _event.args;
            // check animation event
            if (_nreg.test(_args[1])) {
                _event.stopped = !0;
                _event.value = {
                    type: _args[1],
                    handler: _args[2]
                };
            }
            // check event update
            var _func = _fmap[_args[1]];
            if (!!_func) {
                _event.stopped = !0;
                _event.value = _func.apply(null, _args);
            }
        });
    })();
});

module.exports = _h;
}.call(window));

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

/*** IMPORTS FROM imports-loader ***/
(function() {

/*
 * ------------------------------------------
 * 平台适配接口实现文件
 * @version  1.0
 * @author   genify(caijf)
 * ------------------------------------------
 */
var _h = __webpack_require__(8);
var _m = __webpack_require__(2);
var _p = {};
var _o = {};
var _f = function() {
    return !1;
};
var _r = [];
// for ie8-
NEJ.patch('TR<=4.0', function() {
    /**
     * 遍历对象
     * @param  {Object}   对象
     * @param  {Function} 迭代回调
     * @param  {Object}   回调执行对象
     * @return {String}   循环中断时的key值
     */
    _h.__forIn = function(_obj, _callback, _this) {
        if (!_obj || !_callback) {
            return;
        }
        // iterate
        var _ret;
        for (var x in _obj) {
            if (!_obj.hasOwnProperty(x)) continue;
            _ret = _callback.call(_this, _obj[x], x, _obj);
            if (!!_ret) {
                return x;
            }
        }
    };
    /**
     * 遍历列表
     * @param  {Array}    列表
     * @param  {Function} 迭代回调
     * @param  {Object}   回调执行对象
     * @return {Void}
     */
    _h.__forEach = function(_list, _callback, _this) {
        for (var i = 0, l = _list.length; i < l; i++) {
            _callback.call(_this, _list[i], i, _list);
        }
    };
    /**
     * 集合转数组
     * @param  {Object} 集合
     * @return {Array}  数组
     */
    _h.__col2array = function(_list) {
        var _result = [];
        if (!!_list && !!_list.length) {
            for (var i = 0, l = _list.length; i < l; i++) {
                _result.push(_list[i]);
            }
        }
        return _result;
    };
    /**
     * YYYY-MM-DDTHH:mm:ss.sssZ格式时间串转时间戳
     * @param  {String} 时间串
     * @return {Number} 时间戳
     */
    _h.__str2time = (function() {
        var _reg = /-/g;
        return function(_str) {
            // only support YYYY/MM/DDTHH:mm:ss
            return Date.parse(_str.replace(_reg, '/').split('.')[0]);
        };
    })();
});

module.exports = _h;
}.call(window));

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_nej_commonjs_base_platform__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_nej_commonjs_base_platform___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_nej_commonjs_base_platform__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_nej_commonjs_base_element__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_nej_commonjs_base_element___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_nej_commonjs_base_element__);



__WEBPACK_IMPORTED_MODULE_1_nej_commonjs_base_element___default.a._$getByClassName(document.body, 'j-info')[0].innerHTML = JSON.stringify(__WEBPACK_IMPORTED_MODULE_0_nej_commonjs_base_platform___default.a, null, 4);

/***/ })
/******/ ]);
//# sourceMappingURL=index.js.map