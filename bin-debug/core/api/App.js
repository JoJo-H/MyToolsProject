var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var App = (function () {
    function App() {
    }
    Object.defineProperty(App, "ListenerManager", {
        /**
         * 全局事件管理
         */
        get: function () {
            return SingletonFactory.singleton(ListenerManager);
        },
        enumerable: true,
        configurable: true
    });
    App.setStage = function (s) {
        this._stage = s;
    };
    Object.defineProperty(App, "stage", {
        get: function () {
            return this._stage;
        },
        enumerable: true,
        configurable: true
    });
    return App;
}());
__reflect(App.prototype, "App");
