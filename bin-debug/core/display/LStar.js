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
 * 绘制多角星
 */
var LStar = (function (_super) {
    __extends(LStar, _super);
    function LStar(vars) {
        var _this = _super.call(this) || this;
        _this.CLASS_NAME = "LStar";
        if (vars) {
            _super.prototype.init.call(_this, vars);
        }
        return _this;
    }
    LStar.prototype.drawShape = function () {
        this.graphics.moveTo(this.vars.width / 2, 0);
        for (var i = 0; i < this.vars.corner; i++) {
            var rad = Math.PI / this.vars.corner * (2 * i + 1);
            this.graphics.lineTo(this.vars.width / 2 * (1 + Math.sin(rad) * this.vars.ratio), this.vars.height / 2 * (1 - Math.cos(rad) * this.vars.ratio));
            rad = Math.PI / this.vars.corner * (2 * i + 2);
            this.graphics.lineTo(this.vars.width / 2 * (1 + Math.sin(rad)), this.vars.height / 2 * (1 - Math.cos(rad)));
        }
    };
    LStar.prototype.clone = function (vars) {
        return new LStar(vars ? vars : this.vars);
    };
    return LStar;
}(LGraphics));
__reflect(LStar.prototype, "LStar");
