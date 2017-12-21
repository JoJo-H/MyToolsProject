var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**
 * 颜色工具类
 */
var ColorUtil = (function () {
    function ColorUtil() {
        this.CLASS_NAME = "ColorUtil";
    }
    /**
     * 把一系列单独的RGB(A)转化成32位ARGB颜色值
     * @param r 一个从0到255表示红色的颜色值。
     * @param g 一个从0到255表示绿色的颜色值。
     * @param b 一个从0到255表示蓝色的颜色值。
     * @param a 一个从0到255表示透明度的值。默认为255
     * @returns {number}
     *
     * 使用方法如下
     * <code>
     *     var hexColor : string = ColorUtil.getColor(128, 255, 0, 255);
     *     console.log(hexColor); // 输出 -8323328
     * </code>
     *
     */
    ColorUtil.getColor = function (r, g, b, a) {
        if (a === void 0) { a = 255; }
        return (a << 24) | (r << 16) | (g << 8) | b;
    };
    /**
     * 转换一个32位ARGB值变成一个ARGB对象
     * @param color 32位ARGB颜色值
     * @returns {Object} 返回属性为a,r,g,b定义的对象
     *
     * 使用方法如下
     * <code>
     *     var myRGB:Object = ColorUtil.getARGB(0xCCFF00FF);
     *     console.log("透明度 = " + myRGB.a);
     *     console.log("红色 = " + myRGB.r);
     *     console.log("绿色 = " + myRGB.g);
     *     console.log("蓝色 = " + myRGB.b);
     * </code>
     */
    ColorUtil.getARGB = function (color) {
        var c = {};
        c.a = color >> 24 & 0xFF;
        c.r = color >> 16 & 0xFF;
        c.g = color >> 8 & 0xFF;
        c.b = color & 0xFF;
        return c;
    };
    /**
     * 转化一个24位RGB颜色值变成一个RGB对象
     * @param color 24位RGB颜色值
     * @returns {Object} 返回一个属性为r,g,b定义的对象
     *
     * 使用方法如下
     * <code>
     *     var myRGB:Object = ColorUtil.getRGB(0xFF00FF);
     *     console.log("Red = " + myRGB.r);
     *     console.log("Green = " + myRGB.g);
     *     console.log("Blue = " + myRGB.b);
     * </code>
     */
    ColorUtil.getRGB = function (color) {
        var c = {};
        c.r = color >> 16 & 0xFF;
        c.g = color >> 8 & 0xFF;
        c.b = color & 0xFF;
        return c;
    };
    /**
     * 将一个32位ARGB颜色值转换成一个十六进制字符形式
     * @param a 一个从0到255表示透明度的值。
     * @param r 一个从0到255表示红色的颜色值。
     * @param g 一个从0到255表示绿色的颜色值。
     * @param b 一个从0到255表示蓝色的颜色值。
     * @returns {string}
     *
     * <code>
     *     var hexColor : string = ColorUtil.getHexStringFromARGB(128, 255, 0, 255);
     *     console.log(hexColor); // 输出 80FF00FF
     * </code>
     */
    ColorUtil.getHexStringFromARGB = function (a, r, g, b) {
        var aa = a.toString(16);
        var rr = r.toString(16);
        var gg = g.toString(16);
        var bb = b.toString(16);
        aa = (aa.length == 1) ? '0' + aa : aa;
        rr = (rr.length == 1) ? '0' + rr : rr;
        gg = (gg.length == 1) ? '0' + gg : gg;
        bb = (bb.length == 1) ? '0' + bb : bb;
        return (aa + rr + gg + bb).toUpperCase();
    };
    /**
     * 将一个RBG颜色值转换成一个十六进制字符表示形式
     * @param r 一个从0到255表示红色的颜色值。
     * @param g 一个从0到255表示绿色的颜色值。
     * @param b 一个从0到255表示蓝色的颜色值。
     * @returns {string}
     * @example
     * <code>
     *     var hexColor : string = ColorUtil.getHexStringFromRGB(255, 0, 255);
     *     console.log(hexColor); // 输出 FF00FF
     * </code>
     */
    ColorUtil.getHexStringFromRGB = function (r, g, b) {
        var rr = r.toString(16);
        var gg = g.toString(16);
        var bb = b.toString(16);
        rr = (rr.length == 1) ? '0' + rr : rr;
        gg = (gg.length == 1) ? '0' + gg : gg;
        bb = (bb.length == 1) ? '0' + bb : bb;
        return (rr + gg + bb).toUpperCase();
    };
    return ColorUtil;
}());
__reflect(ColorUtil.prototype, "ColorUtil");
