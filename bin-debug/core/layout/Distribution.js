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
 * 分布类
 */
var Distribution = (function (_super) {
    __extends(Distribution, _super);
    /**
     * 构造一个分布
     * @param size
     * @param isVertical
     * @param snapToPixel
     */
    function Distribution(size, isVertical, snapToPixel) {
        if (size === void 0) { size = Number.POSITIVE_INFINITY; }
        if (isVertical === void 0) { isVertical = false; }
        if (snapToPixel === void 0) { snapToPixel = true; }
        var _this = _super.call(this) || this;
        _this.CLASS_NAME = "Distribution";
        _this.size = size;
        _this.vertical = isVertical;
        _this._dimensions = {};
        _this._isSnap = snapToPixel;
        _this._marginTop = 0;
        _this._marginRight = 0;
        _this._marginBottom = 0;
        _this._marginLeft = 0;
        return _this;
    }
    /**
     * 增加一个分布
     * @param child
     * @param width
     * @param height
     * @returns {DisplayObject}
     */
    Distribution.prototype.addChildWithDimensions = function (child, width, height) {
        if (width === void 0) { width = NaN; }
        if (height === void 0) { height = NaN; }
        this._dimensions[child] = new egret.Point(width, height);
        return this.addChild(child);
    };
    /**
     * 设置外间距
     * @param top
     * @param right
     * @param bottom
     * @param left
     */
    Distribution.prototype.setMargin = function (top, right, bottom, left) {
        if (top === void 0) { top = 0; }
        if (right === void 0) { right = 0; }
        if (bottom === void 0) { bottom = 0; }
        if (left === void 0) { left = 0; }
        this.marginTop = top;
        this.marginRight = right;
        this.marginBottom = bottom;
        this.marginLeft = left;
    };
    Object.defineProperty(Distribution.prototype, "marginTop", {
        get: function () {
            return this._marginTop;
        },
        /**
         * 上间距
         * @param top
         */
        set: function (top) {
            this._marginTop = top;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Distribution.prototype, "marginRight", {
        get: function () {
            return this._marginRight;
        },
        /**
         * 右间距
         * @param right
         */
        set: function (right) {
            this._marginRight = right;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Distribution.prototype, "marginBottom", {
        get: function () {
            return this._marginBottom;
        },
        /**
         * 底间距
         * @param bottom
         */
        set: function (bottom) {
            this._marginBottom = bottom;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Distribution.prototype, "marginLeft", {
        get: function () {
            return this._marginLeft;
        },
        /**
         * 左间距
         * @param left
         */
        set: function (left) {
            this._marginLeft = left;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Distribution.prototype, "size", {
        get: function () {
            return this._size;
        },
        /**
         * 大小
         * @param s
         */
        set: function (s) {
            this._size = s;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Distribution.prototype, "vertical", {
        get: function () {
            return this._isVert;
        },
        /**
         * 垂直
         * @param isVertical
         */
        set: function (isVertical) {
            this._isVert = isVertical;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * 分布位置
     */
    Distribution.prototype.position = function () {
        var i = -1;
        var column = 0;
        var row = 0;
        var largest = 0;
        var item;
        var size;
        var xPo;
        var yPo;
        var w;
        var h;
        while (++i < this.numChildren) {
            item = this.getChildAt(i);
            size = (this._dimensions[item] == null) ? new egret.Point(item.width, item.height) : new egret.Point(isNaN(this._dimensions[item].x) ? item.width : this._dimensions[item].x, isNaN(this._dimensions[item].y) ? item.height : this._dimensions[item].y);
            w = size.x + this._marginLeft + this._marginRight;
            h = size.y + this._marginTop + this._marginBottom;
            if (!this.vertical) {
                column += w;
                if (column > this.size) {
                    row += (largest == 0) ? row : largest;
                    largest = 0;
                    column = w;
                }
                if (h > largest)
                    largest = h;
                xPo = column - size.x - this._marginRight;
                yPo = row + this._marginTop;
            }
            else {
                row += h;
                if (row > this.size) {
                    column += (largest == 0) ? column : largest;
                    largest = 0;
                    row = h;
                }
                if (w > largest)
                    largest = w;
                xPo = column + this._marginLeft;
                yPo = row - size.y - this._marginBottom;
            }
            this._positionItem(item, this._isSnap ? Math.round(xPo) : xPo, this._isSnap ? Math.round(yPo) : yPo);
        }
    };
    Distribution.prototype.destroy = function () {
        this._dimensions = null;
    };
    Distribution.prototype._positionItem = function (target, xPo, yPo) {
        var offset = this.getOffsetPosition(target);
        target.x = xPo + offset.x;
        target.y = yPo + offset.y;
    };
    /**
     * 类名
     * @returns {string}
     */
    Distribution.prototype.toString = function () {
        //console.log("ClassName",this.CLASS_NAME);
        return this.CLASS_NAME;
    };
    /**
     * 返回x和y偏移到DisplayObject左上角。该偏移可以用来定位的DisplayObject的对齐点不在(0，0)和或者缩放。
     * @param displayObject
     * @returns {egret.Point}
     */
    Distribution.prototype.getOffsetPosition = function (displayObject) {
        var bounds = displayObject.getBounds();
        var offset = new egret.Point();
        offset.x = (displayObject.scaleX > 0) ? bounds.x * displayObject.scaleX * -1 : bounds.right * displayObject.scaleX * -1;
        offset.y = (displayObject.scaleY > 0) ? bounds.y * displayObject.scaleY * -1 : bounds.bottom * displayObject.scaleY * -1;
        return offset;
    };
    return Distribution;
}(egret.Sprite));
exports.Distribution = Distribution;
__reflect(Distribution.prototype, "\"/Users/huangguoyong/SelfWorkspace/MyToolsProject/src/core/layout/Distribution\".Distribution");
