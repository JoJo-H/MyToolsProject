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
 * 绘制玫瑰
 * 玫瑰曲线 r = a*cos(Kθ)
 */
var LRose = (function (_super) {
    __extends(LRose, _super);
    function LRose(vars) {
        var _this = _super.call(this) || this;
        _this.CLASS_NAME = 'LRose';
        if (vars) {
            vars.width = vars.radius * 2;
            vars.height = vars.radius * 2;
            _super.prototype.init.call(_this, vars);
        }
        return _this;
    }
    LRose.prototype.drawShape = function () {
        var angle; //储存极角
        var dist; //储存极径
        var sin;
        var cos;
        this.graphics.moveTo(0, this.vars.radius);
        for (var i = 1; i < 360; i++) {
            //计算极角和极径
            angle = Math.PI * i / 180;
            sin = Math.sin(angle);
            cos = Math.cos(angle);
            dist = this.vars.radius * Math.cos(angle * this.vars.petal);
            //将极坐标转化为直角坐标并画线
            this.graphics.lineTo(this.vars.radius - dist * cos, this.vars.radius - dist * sin);
        }
    };
    LRose.prototype.clone = function (vars) {
        return new LRose(vars ? vars : this.vars);
    };
    return LRose;
}(LGraphics));
__reflect(LRose.prototype, "LRose");
