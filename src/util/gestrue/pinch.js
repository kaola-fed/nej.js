/*
 * ------------------------------------------
 * 点击手势封装实现文件
 * @version  1.0
 * @author   genify(caijf)
 * ------------------------------------------
 */
/** @module util/gestrue/pinch */
NEJ.define([
    'base/klass',
    './gestrue.js'
],function(_k,_t,_p,_o,_f,_r,_pro){
    /**
     * 
     * tap taphold dbltap
     * 
     * @class    module:util/gestrue/pinch._$$GestruePinch
     * @extends  module:util/event._$$EventTarget
     * 
     * @param    {Object}      config  - 配置参数
     * 
     * 
     */
    _p._$$GestruePinch = _k._$klass();
    _pro = _p._$$GestruePinch._$extend(_t._$$Gestrue);
    /**
     * 控件初始化
     * 
     * @protected
     * @method module:util/gestrue/pinch._$$GestruePinch#__reset
     * @param  {Object} arg0 - 配置参数
     * @return {Void}
     */
    _pro.__reset = function(_options){
        this.__super(_options);
        
    };
    /**
     * 开始触摸
     * 
     * @protected
     * @method module:util/gestrue/pinch._$$GestruePinch#__onTouchStart
     * @param  {Object} arg0 - 事件对象
     * @return {Void}
     */
    _pro.__onTouchStart = function(_event){
        
    };
    /**
     * 触摸进行中
     * 
     * @protected
     * @method module:util/gestrue/pinch._$$GestruePinch#__onTouchMove
     * @param  {Object} arg0 - 事件对象
     * @return {Void}
     */
    _pro.__onTouchMove = function(_event){
        
    };
    /**
     * 触摸结束
     * 
     * @protected
     * @method module:util/gestrue/pinch._$$GestruePinch#__onTouchEnd
     * @param  {Object} arg0 - 事件对象
     * @return {Void}
     */
    _pro.__onTouchEnd = function(_event){
        
    };
    
    
});
