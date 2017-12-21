var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**
 * 比例工具类
 */
var RatioUtil = (function () {
    function RatioUtil() {
    }
    /**
     * 确定宽高比
     * @param size
     * @returns {number}
     */
    RatioUtil.widthToHeight = function (size) {
        return size.width / size.height;
    };
    /**
     * 确定高宽比
     * @param size
     * @returns {number}
     */
    RatioUtil.heightToWidth = function (size) {
        return size.height / size.width;
    };
    /**
     * 按区域宽度和高度缩放，同时保持纵横比。
     * @param size
     * @param amount
     * @param snapToPixel
     * @returns {Rectangle}
     */
    RatioUtil.scale = function (size, amount, snapToPixel) {
        if (snapToPixel === void 0) { snapToPixel = true; }
        return RatioUtil._defineRect(size, size.width * amount, size.height * amount, snapToPixel);
    };
    /**
     * 按区域宽缩放,同时保持纵横比
     * @param size
     * @param height
     * @param snapToPixel
     * @returns {Rectangle}
     */
    RatioUtil.scaleWidth = function (size, height, snapToPixel) {
        if (snapToPixel === void 0) { snapToPixel = true; }
        return RatioUtil._defineRect(size, height * RatioUtil.widthToHeight(size), height, snapToPixel);
    };
    /**
     * 按区域高缩放,同时保持纵横比
     * @param size
     * @param width
     * @param snapToPixel
     * @returns {Rectangle}
     */
    RatioUtil.scaleHeight = function (size, width, snapToPixel) {
        if (snapToPixel === void 0) { snapToPixel = true; }
        return RatioUtil._defineRect(size, width, width * RatioUtil.heightToWidth(size), snapToPixel);
    };
    /**
     * 调整区域填充边界,同时保持纵横比。
     * @param size
     * @param bounds
     * @param snapToPixel
     * @returns {Rectangle}
     */
    RatioUtil.scaleToFill = function (size, bounds, snapToPixel) {
        if (snapToPixel === void 0) { snapToPixel = true; }
        var scaled = RatioUtil.scaleHeight(size, bounds.width, snapToPixel);
        if (scaled.height < bounds.height)
            scaled = RatioUtil.scaleWidth(size, bounds.height, snapToPixel);
        return scaled;
    };
    /**
     * 调整区域的边界不超过最大尺寸,同时保持纵横比。
     * @param size
     * @param bounds
     * @param snapToPixel
     * @returns {Rectangle}
     */
    RatioUtil.scaleToFit = function (size, bounds, snapToPixel) {
        if (snapToPixel === void 0) { snapToPixel = true; }
        var scaled = RatioUtil.scaleHeight(size, bounds.width, snapToPixel);
        if (scaled.height > bounds.height)
            scaled = RatioUtil.scaleWidth(size, bounds.height, snapToPixel);
        return scaled;
    };
    RatioUtil._defineRect = function (size, width, height, snapToPixel) {
        var scaled = size.clone();
        scaled.width = snapToPixel ? Math.round(width) : width;
        scaled.height = snapToPixel ? Math.round(height) : height;
        return scaled;
    };
    return RatioUtil;
}());
__reflect(RatioUtil.prototype, "RatioUtil");
