/**
 * 绘制圆角矩形
 */
class LRoundRect extends LGraphics{
    public CLASS_NAME:string = "LRoundRect";

    public constructor(vars?:IGraphics){
        super();
        if(vars){
            vars.ellipseHeight = vars.ellipseHeight?vars.ellipseHeight:vars.ellipseWidth;
            super.init(vars);
        }
    }

    public drawShape():void{
        this.graphics.drawRoundRect(0,0,this.vars.width,this.vars.height,this.vars.ellipseWidth,this.vars.ellipseHeight);
    }

    public clone(vars?:IGraphics):LRoundRect{
        return new LRoundRect(vars?vars:this.vars);
    }
}