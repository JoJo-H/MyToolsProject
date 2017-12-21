

class App {

    /**
     * 全局事件管理
     */
    public static get ListenerManager():ListenerManager {
        return SingletonFactory.singleton(ListenerManager);
    }
    
    constructor(){

    }

    private static _stage : egret.Stage;
    public static setStage(s:egret.Stage):void {
        this._stage = s;
    }

    public static get stage(){
        return this._stage;
    }
}