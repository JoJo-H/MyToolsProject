var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var LEvent = (function (_super) {
    __extends(LEvent, _super);
    function LEvent(type, data, bubbles, cancelable) {
        if (bubbles === void 0) { bubbles = false; }
        if (cancelable === void 0) { cancelable = false; }
        var _this = _super.call(this, type, bubbles, cancelable, data) || this;
        _this._data = data;
        return _this;
    }
    Object.defineProperty(LEvent.prototype, "data", {
        get: function () {
            return this._data;
        },
        set: function (data) {
            CustomEvent;
            this._data = data;
        },
        enumerable: true,
        configurable: true
    });
    LEvent.prototype.clone = function (obj) {
        return new LEvent(this.type, obj ? obj : this.data, this.bubbles, this.cancelable);
    };
    return LEvent;
}(egret.Event));
__reflect(LEvent.prototype, "LEvent");
