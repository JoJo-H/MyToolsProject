
/**
 * 分布类
 */
export class Distribution extends egret.Sprite{
    public CLASS_NAME:string = "Distribution";

    public _dimensions:any;
    public _marginTop:number;
    public _marginRight:number;
    public _marginBottom:number;
    public _marginLeft:number;
    public _size:number;
    public _isSnap:boolean;
    public _isVert:boolean;

    /**
     * 构造一个分布
     * @param size
     * @param isVertical
     * @param snapToPixel
     */
    public constructor(size:number = Number.POSITIVE_INFINITY, isVertical:boolean = false, snapToPixel:boolean = true) {
        super();

        this.size          = size;
        this.vertical      = isVertical;
        this._dimensions   = {};
        this._isSnap       = snapToPixel;
        this._marginTop    = 0;
        this._marginRight  = 0;
        this._marginBottom = 0;
        this._marginLeft   = 0;
    }

    /**
     * 增加一个分布
     * @param child
     * @param width
     * @param height
     * @returns {DisplayObject}
     */
    public addChildWithDimensions(child:egret.DisplayObject, width:number = NaN, height:number = NaN):egret.DisplayObject {
        this._dimensions[<any>child] = new egret.Point(width, height);

        return this.addChild(child);
    }

    /**
     * 设置外间距
     * @param top
     * @param right
     * @param bottom
     * @param left
     */
    public setMargin(top:number = 0, right:number = 0, bottom:number = 0, left:number = 0):void {
        this.marginTop    = top;
        this.marginRight  = right;
        this.marginBottom = bottom;
        this.marginLeft   = left;
    }

    /**
     * 上间距
     * @param top
     */
    public set marginTop(top:number) {
        this._marginTop = top;
    }

    public get marginTop():number {
        return this._marginTop;
    }

    /**
     * 右间距
     * @param right
     */
    public set marginRight(right:number) {
        this._marginRight = right;
    }

    public get marginRight():number {
        return this._marginRight;
    }

    /**
     * 底间距
     * @param bottom
     */
    public set marginBottom(bottom:number) {
        this._marginBottom = bottom;
    }

    public get marginBottom():number {
        return this._marginBottom;
    }

    /**
     * 左间距
     * @param left
     */
    public set marginLeft(left:number) {
        this._marginLeft = left;
    }

    public get marginLeft():number {
        return this._marginLeft;
    }

    /**
     * 大小
     * @param s
     */
    public set size(s:number) {
        this._size = s;
    }

    public get size():number {
        return this._size;
    }

    /**
     * 垂直
     * @param isVertical
     */
    public set vertical(isVertical:boolean) {
        this._isVert = isVertical;
    }

    public get vertical():boolean {
        return this._isVert;
    }

    /**
     * 分布位置
     */
    public position():void {
        var i:number          = -1;
        var column:number  = 0;
        var row:number     = 0;
        var largest:number = 0;
        var item:egret.DisplayObject;
        var size:egret.Point;
        var xPo:number;
        var yPo:number;
        var w:number;
        var h:number;

        while (++i < this.numChildren) {
            item = this.getChildAt(i);
            size = (this._dimensions[<any>item] == null) ? new egret.Point(item.width, item.height) : new egret.Point(isNaN(this._dimensions[<any>item].x) ? item.width : this._dimensions[<any>item].x, isNaN(this._dimensions[<any>item].y) ? item.height : this._dimensions[<any>item].y);

            w = size.x + this._marginLeft + this._marginRight;
            h = size.y + this._marginTop + this._marginBottom;

            if (!this.vertical) {
                column += w;

                if (column > this.size) {
                    row += (largest == 0) ? row : largest;

                    largest = 0;
                    column  = w;
                }

                if (h > largest)
                    largest = h;

                xPo = column - size.x - this._marginRight;
                yPo = row + this._marginTop;
            } else {
                row += h;

                if (row > this.size) {
                    column += (largest == 0) ? column : largest;

                    largest = 0;
                    row     = h;
                }

                if (w > largest)
                    largest = w;

                xPo = column + this._marginLeft;
                yPo = row - size.y - this._marginBottom;
            }

            this._positionItem(item, this._isSnap ? Math.round(xPo) : xPo, this._isSnap ? Math.round(yPo) : yPo);
        }
    }

    public destroy():void {
        this._dimensions = null;
    }

    public _positionItem(target:egret.DisplayObject, xPo:number, yPo:number):void {
        var offset:egret.Point = this.getOffsetPosition(target);

        target.x = xPo + offset.x;
        target.y = yPo + offset.y;
    }

    /**
     * 类名
     * @returns {string}
     */
    public toString():string {
        //console.log("ClassName",this.CLASS_NAME);
        return this.CLASS_NAME;
    }

    /**
     * 返回x和y偏移到DisplayObject左上角。该偏移可以用来定位的DisplayObject的对齐点不在(0，0)和或者缩放。
     * @param displayObject
     * @returns {egret.Point}
     */
    private getOffsetPosition(displayObject:egret.DisplayObject):egret.Point {
        var bounds:egret.Rectangle = displayObject.getBounds();
        var offset:egret.Point     = new egret.Point();

        offset.x = (displayObject.scaleX > 0) ? bounds.x * displayObject.scaleX * -1 : bounds.right * displayObject.scaleX * -1;
        offset.y = (displayObject.scaleY > 0) ? bounds.y * displayObject.scaleY * -1 : bounds.bottom * displayObject.scaleY * -1;

        return offset;
    }
}