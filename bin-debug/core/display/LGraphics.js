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
 * 绘图基类
 */
var LGraphics = (function (_super) {
    __extends(LGraphics, _super);
    function LGraphics(vars) {
        var _this = _super.call(this) || this;
        _this.vars = vars;
        _this.CLASS_NAME = "LGraphics";
        _this.vars = {};
        _this.initValue(); //初始化属性值
        return _this;
    }
    /**
     * 初始化图形子类处理方法
     * @param vars
     */
    LGraphics.prototype.init = function (vars) {
        if (vars) {
            LVars.some(this.vars, vars);
            this.x = this.vars.x;
            this.y = this.vars.y;
            this.name = this.vars.name;
            this.width = this.vars.width;
            this.height = this.vars.height;
            this.touchEnabled = this.vars.touchEnabled;
        }
        this.draw();
    };
    /**
     * 初始化默认值
     */
    LGraphics.prototype.initValue = function () {
        this.vars.x = 0;
        this.vars.y = 0;
        this.vars.name = this.CLASS_NAME;
        this.vars.width = 0;
        this.vars.height = 0;
        this.vars.anchorX = .5;
        this.vars.anchorY = .5;
        this.vars.touchEnabled = true;
        this.vars.thickness = NaN;
        this.vars.linecolor = 0;
        this.vars.linealpha = 1.0;
        this.vars.pixelHinting = false;
        this.vars.scaleMode = "normal";
        this.vars.caps = null;
        this.vars.joints = null;
        this.vars.miterLimit = 3;
        this.vars.fillcolor = 0xffffff;
        this.vars.fillalpha = 1;
        this.vars.radius = 5;
        this.vars.ellipseWidth = 20;
        this.vars.ellipseHeight = this.vars.ellipseHeight ? this.vars.ellipseHeight : this.vars.ellipseWidth;
        this.vars.corner = 3;
        this.vars.ratio = .5;
        this.vars.petal = 4;
    };
    /**
     * 绘制图形
     */
    LGraphics.prototype.draw = function () {
        this.graphics.clear();
        this.graphics.lineStyle(this.vars.thickness, this.vars.linecolor, this.vars.linealpha, this.vars.pixelHinting, this.vars.scaleMode, this.vars.caps, this.vars.joints, this.vars.miterLimit);
        this.graphics.beginFill(this.vars.fillcolor, this.vars.fillalpha);
        this.drawShape();
        this.graphics.endFill();
    };
    /**
     * 重写图形方法
     */
    LGraphics.prototype.drawShape = function () {
    };
    /**
     * 类名
     * @returns {string}
     */
    LGraphics.prototype.toString = function () {
        return this.CLASS_NAME;
    };
    return LGraphics;
}(LSprite));
__reflect(LGraphics.prototype, "LGraphics", ["IGraphics"]);
/**
 * 图形类型
 */
var GraphicsType;
(function (GraphicsType) {
    GraphicsType[GraphicsType["Circle"] = 0] = "Circle";
    GraphicsType[GraphicsType["Rect"] = 1] = "Rect";
    GraphicsType[GraphicsType["Ellipse"] = 2] = "Ellipse";
    GraphicsType[GraphicsType["Polygon"] = 3] = "Polygon";
    GraphicsType[GraphicsType["Rose"] = 4] = "Rose";
    GraphicsType[GraphicsType["RoundRect"] = 5] = "RoundRect";
    GraphicsType[GraphicsType["Star"] = 6] = "Star";
    GraphicsType[GraphicsType["Heart"] = 7] = "Heart";
})(GraphicsType || (GraphicsType = {}));
