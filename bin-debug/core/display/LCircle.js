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
 * 绘制圆形类
 */
var LCircle = (function (_super) {
    __extends(LCircle, _super);
    function LCircle(vars) {
        var _this = _super.call(this) || this;
        _this.CLASS_NAME = "LCircle";
        if (vars) {
            vars.width = vars.radius * 2;
            vars.height = vars.radius * 2;
            _super.prototype.init.call(_this, vars);
        }
        return _this;
    }
    LCircle.prototype.drawShape = function () {
        this.graphics.drawCircle(this.vars.radius, this.vars.radius, this.vars.radius);
    };
    LCircle.prototype.clone = function (vars) {
        return new LCircle(vars ? vars : this.vars);
    };
    return LCircle;
}(LGraphics));
__reflect(LCircle.prototype, "LCircle");
