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
var DragTest = (function (_super) {
    __extends(DragTest, _super);
    function DragTest() {
        var _this = _super.call(this) || this;
        /**手势*/
        _this.gesturePinch = new GesturePinch();
        _this.gestureDrag = new GestureDrag();
        return _this;
    }
    DragTest.prototype.start = function () {
        var _this = this;
        //增加缩放手势
        this.gesturePinch.setTarget(this.myImg);
        this.gesturePinch.addEventListener(egret.TouchEvent.TOUCH_BEGIN, function () {
            _this.gestureDrag.stop();
        }, this);
        this.gesturePinch.addEventListener(egret.TouchEvent.TOUCH_END, function () {
            _this.gestureDrag.start();
        }, this);
        this.gesturePinch.start();
        //增加拖拽手势
        this.gestureDrag.setTarget(this.myImg);
        this.gestureDrag.start();
    };
    return DragTest;
}(eui.Component));
__reflect(DragTest.prototype, "DragTest");
