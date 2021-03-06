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
*  功    能： 二指滑动，收缩和拉伸
* Example:
* var ges:GesturePinch = new GesturePinch(this.bm);
* ges.start();
* ges.stop();
* ges.destroy();
*/
var GesturePinch = (function (_super) {
    __extends(GesturePinch, _super);
    function GesturePinch() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.touchIDList = new Array(); //触点ID
        _this.initTouchPos = {}; //触点初始位置
        _this.curTouchPos = {}; //触点当前位置
        return _this;
    }
    GesturePinch.prototype.setTarget = function (target) {
        this.target = target;
    };
    GesturePinch.prototype.start = function () {
        this.target.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this);
        App.stage.addEventListener(egret.TouchEvent.TOUCH_END, this.onTouchEnd, this);
    };
    GesturePinch.prototype.stop = function () {
        this.target.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this);
        App.stage.removeEventListener(egret.TouchEvent.TOUCH_END, this.onTouchEnd, this);
        this.target.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.onTouchMove, this);
    };
    GesturePinch.prototype.onTouchBegin = function (e) {
        this.dispatchEvent(new egret.TouchEvent(egret.TouchEvent.TOUCH_BEGIN));
        this.touchIDLen = this.touchIDList.length;
        if (this.touchIDLen < 2) {
            this.touchIDList.push(e.touchPointID);
            this.initTouchPos[e.touchPointID] = new egret.Point(e.stageX, e.stageY);
            this.curTouchPos[e.touchPointID] = this.initTouchPos[e.touchPointID];
            this.touchIDLen = this.touchIDList.length;
        }
        if (this.touchIDLen == 2) {
            this.target.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.onTouchMove, this);
            this.initDist = egret.Point.distance(this.initTouchPos[this.touchIDList[0]], this.initTouchPos[this.touchIDList[1]]);
            this.startScale = this.target.scaleX;
            egret.log("two fingers");
        }
    };
    GesturePinch.prototype.onTouchMove = function (e) {
        this.curPot = this.curTouchPos[e.touchPointID];
        var a = this.curTouchPos[this.touchIDList[0]];
        var b = this.curTouchPos[this.touchIDList[1]];
        if (this.curPot) {
            this.curPot.x = e.stageX;
            this.curPot.y = e.stageY;
            var dist = egret.Point.distance(this.curTouchPos[this.touchIDList[0]], this.curTouchPos[this.touchIDList[1]]);
            var scale = (dist / this.initDist);
            this.target.scaleX = scale * this.startScale;
            this.target.scaleY = this.target.scaleX;
        }
    };
    GesturePinch.prototype.onTouchEnd = function (e) {
        var index = this.touchIDList.indexOf(e.touchPointID);
        if (index != -1) {
            this.touchIDList.splice(index, 1);
        }
        if (this.touchIDList.length < 2) {
            this.dispatchEvent(new egret.TouchEvent(egret.TouchEvent.TOUCH_END));
            this.target.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.onTouchMove, this);
        }
    };
    GesturePinch.prototype.destroy = function () {
        this.stop();
        this.target = null;
    };
    return GesturePinch;
}(egret.EventDispatcher));
__reflect(GesturePinch.prototype, "GesturePinch");
