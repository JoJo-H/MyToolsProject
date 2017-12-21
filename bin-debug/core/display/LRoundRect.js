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
/**
 * 绘制圆角矩形
 */
var LRoundRect = (function (_super) {
    __extends(LRoundRect, _super);
    function LRoundRect(vars) {
        var _this = _super.call(this) || this;
        _this.CLASS_NAME = "LRoundRect";
        if (vars) {
            vars.ellipseHeight = vars.ellipseHeight ? vars.ellipseHeight : vars.ellipseWidth;
            _super.prototype.init.call(_this, vars);
        }
        return _this;
    }
    LRoundRect.prototype.drawShape = function () {
        this.graphics.drawRoundRect(0, 0, this.vars.width, this.vars.height, this.vars.ellipseWidth, this.vars.ellipseHeight);
    };
    LRoundRect.prototype.clone = function (vars) {
        return new LRoundRect(vars ? vars : this.vars);
    };
    return LRoundRect;
}(LGraphics));
__reflect(LRoundRect.prototype, "LRoundRect");
