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
 * 绘制心形
 * 笛卡尔心形 r = a(1 - sinθ)
 */
var LHeart = (function (_super) {
    __extends(LHeart, _super);
    function LHeart(vars) {
        var _this = _super.call(this) || this;
        _this.CLASS_NAME = 'LHeart';
        if (vars) {
            vars.width = vars.radius * 2;
            vars.height = vars.radius * 2;
            _super.prototype.init.call(_this, vars);
        }
        return _this;
    }
    LHeart.prototype.drawShape = function () {
        var angle; //储存极角
        var dist; //储存极径
        var sin;
        var cos;
        this.graphics.moveTo(0, 0);
        for (var i = 1; i < 360; i++) {
            //计算极角和极径
            angle = Math.PI * i / 180;
            sin = Math.sin(angle);
            cos = Math.cos(angle);
            dist = this.vars.radius * (1 - sin);
            //将极坐标转化为直角坐标并画线
            this.graphics.lineTo(this.vars.radius - dist * cos, -dist * sin);
        }
    };
    LHeart.prototype.clone = function (vars) {
        return new LHeart(vars ? vars : this.vars);
    };
    return LHeart;
}(LGraphics));
__reflect(LHeart.prototype, "LHeart");
