/**
*  功    能： 手指按住拖动
* Example:
* var ges:GestureDrag = new GestureDrag(this.bm);
* ges.start();
* ges.stop();
* ges.destroy();
*/
class GestureDrag {
    private target:egret.DisplayObject;  //目标对象
    private curPointID:number = -1;      //当前触摸ID
    
	public setTarget(target){
    	this.target = target;
	}
	
	public start(){
    	this.curPointID = -1;
    	this.target.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this);
	}
	
	public stop(){
    	  this.curPointID = -1;
        this.target.removeEventListener(egret.TouchEvent.TOUCH_BEGIN,this.onTouchBegin,this);
        App.stage.removeEventListener(egret.TouchEvent.TOUCH_MOVE,this.onTouchMove,this);
        App.stage.removeEventListener(egret.TouchEvent.TOUCH_END,this.onTouchEnd,this);
	}
	
	private lastX:number;
	private lastY:number;
	private onTouchBegin(e:egret.TouchEvent){
    	  if(this.curPointID != -1){
            return;
    	  }
    	  this.curPointID = e.touchPointID;
    	  this.lastX = e.stageX;
    	  this.lastY = e.stageY;
          App.stage.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.onTouchMove, this);
          App.stage.addEventListener(egret.TouchEvent.TOUCH_END, this.onTouchEnd, this);
	}
	
	private onTouchMove(e:egret.TouchEvent){
    	if(e.touchPointID == this.curPointID){
            this.target.x += e.stageX - this.lastX;
            this.target.y += e.stageY - this.lastY;
            this.lastX = e.stageX;
            this.lastY = e.stageY;
    	}
	}
	
	private onTouchEnd(e:egret.TouchEvent){
    	  if(e.touchPointID == this.curPointID){
        	  this.curPointID = -1;
              App.stage.removeEventListener(egret.TouchEvent.TOUCH_MOVE,this.onTouchMove,this);
              App.stage.removeEventListener(egret.TouchEvent.TOUCH_END,this.onTouchEnd,this);
    	  }
	}
	
	public destroy(){
    	this.stop();
    	this.target = null;
	}
}
