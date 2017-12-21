


class DragTest extends eui.Component {

    /**我的图片*/
    public myImg:eui.Image;
    /**手势*/
    private gesturePinch: GesturePinch = new GesturePinch();
    private gestureDrag: GestureDrag = new GestureDrag();
    constructor(){
        super();
    }

    start():void {
        //增加缩放手势
        this.gesturePinch.setTarget(this.myImg);
        this.gesturePinch.addEventListener(egret.TouchEvent.TOUCH_BEGIN, ()=>{
            this.gestureDrag.stop();
        },this);
        this.gesturePinch.addEventListener(egret.TouchEvent.TOUCH_END, ()=>{
            this.gestureDrag.start();
        },this);
        this.gesturePinch.start();
        
        //增加拖拽手势
        this.gestureDrag.setTarget(this.myImg);
        this.gestureDrag.start();
    }
}