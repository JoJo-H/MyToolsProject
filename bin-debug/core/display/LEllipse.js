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
 * 绘制椭圆类
 */
var LEllipse = (function (_super) {
    __extends(LEllipse, _super);
    function LEllipse(vars) {
        var _this = _super.call(this) || this;
        _this.CLASS_NAME = "LEllipse";
        if (vars) {
            _super.prototype.init.call(_this, vars);
        }
        return _this;
    }
    LEllipse.prototype.drawShape = function () {
        this.graphics.drawEllipse(this.vars.width / 2, this.vars.height / 2, this.vars.width / 2, this.vars.height / 2);
    };
    LEllipse.prototype.clone = function (vars) {
        return new LEllipse(vars ? vars : this.vars);
    };
    return LEllipse;
}(LGraphics));
__reflect(LEllipse.prototype, "LEllipse");
