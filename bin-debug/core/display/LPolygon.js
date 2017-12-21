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
 * 绘制多边形
 */
var LPolygon = (function (_super) {
    __extends(LPolygon, _super);
    function LPolygon(vars) {
        var _this = _super.call(this) || this;
        _this.CLASS_NAME = "LPolygon";
        if (vars) {
            _super.prototype.init.call(_this, vars);
        }
        return _this;
    }
    LPolygon.prototype.drawShape = function () {
        this.graphics.moveTo(this.vars.width / 2, 0);
        for (var i = 1; i < this.vars.corner; i++) {
            var rad = 2 * Math.PI / this.vars.corner * i;
            this.graphics.lineTo(this.vars.width / 2 * (1 + Math.sin(rad)), this.vars.height / 2 * (1 - Math.cos(rad)));
        }
    };
    LPolygon.prototype.clone = function (vars) {
        return new LPolygon(vars ? vars : this.vars);
    };
    return LPolygon;
}(LGraphics));
__reflect(LPolygon.prototype, "LPolygon");
