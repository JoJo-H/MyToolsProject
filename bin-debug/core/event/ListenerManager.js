var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var ListenerManager = (function () {
    function ListenerManager() {
        this.CLASS_NAME = "ListenerManager";
        console.log(10001, "不可以实例化" + this.CLASS_NAME + "类,请实例Lcp." + this.CLASS_NAME + ".getInstance()开始");
        if (this._dispatcher == null) {
            this._dispatcher = new egret.EventDispatcher();
        }
    }
    /**
     * 注册全局侦听
     * @param type
     * @param listener
     * @param thisObject
     * @param useCapture
     * @param priority
     */
    ListenerManager.prototype.addEventListener = function (type, listener, thisObject, useCapture, priority) {
        if (useCapture === void 0) { useCapture = false; }
        if (priority === void 0) { priority = 0; }
        this._dispatcher.addEventListener(type, listener, thisObject, useCapture, priority);
    };
    /**
     * 移除全局侦听
     * @param type
     * @param listener
     * @param thisObject
     * @param useCapture
     */
    ListenerManager.prototype.removeEventListener = function (type, listener, thisObject, useCapture) {
        if (useCapture === void 0) { useCapture = false; }
        this._dispatcher.removeEventListener(type, listener, thisObject, useCapture);
    };
    /**
     * 派发全局事件
     * @param event
     * @returns {boolean}
     */
    ListenerManager.prototype.dispatchEvent = function (event) {
        return this._dispatcher.dispatchEvent(event);
    };
    /**
     * 判断是否有全局侦听
     * @param type
     * @returns {boolean}
     */
    ListenerManager.prototype.hasEventListener = function (type) {
        return this._dispatcher.hasEventListener(type);
    };
    return ListenerManager;
}());
__reflect(ListenerManager.prototype, "ListenerManager");
