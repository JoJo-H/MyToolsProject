"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 点扩展类
 */
var LPoint = (function (_super) {
    __extends(LPoint, _super);
    function LPoint() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * 计算两点间距离
     * @param x1
     * @param y1
     * @param x2
     * @param y2
     * @returns {number}
     */
    LPoint.twodis = function (x1, y1, x2, y2) {
        return Math.sqrt((x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2));
    };
    /**
     * 返回 pt1 和 pt2 之间的距离。
     * @method egret.Point#distance
     * @param p1 {egret.Point} 第一个点
     * @param p2 {egret.Point} 第二个点
     * @returns {number} 第一个点和第二个点之间的距离。
     */
    LPoint.distance = function (p1, p2) {
        return egret.Point.distance(p1, p2); //官方方法
    };
    return LPoint;
}(egret.HashObject));
exports.LPoint = LPoint;
__reflect(LPoint.prototype, "\"/Users/huangguoyong/SelfWorkspace/MyToolsProject/src/core/geom/LPoint\".LPoint");
//扩展点类方法
//egret.Point.twodis = lcp.LPoint.twodis; 
