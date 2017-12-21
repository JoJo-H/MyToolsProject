

class LVars{
    public CLASS_NAME:string = "LVars";

    public _vars:Object;
    public constructor(vars?:Object) {
        this._vars = {};
        if(vars){
            for(var p in vars){
                this._vars[p] = vars[p];
            }
        }
    }

    private _set(property:string, value:any):LVars {
        if(value == null){
            delete this._vars[property];
        }
        else{
            this._vars[property] = value;
        }
        return this;
    }

    public get vars():Object{
        return this._vars;
    }

    /**
     * 简单遍历并调用对象集属性
     * @param $target
     * @param $proper
     *
     * 使用方法如下:
     * --CODE: LVars.some(mc1, {alpha:0, scaleX:.5 ,touchEnabled:true});
     */
    public static some($target:any,$proper?:any):void
    {
        if(!$proper) return;
        for (var properties in $proper ){
            if ($target.hasOwnProperty(properties)){
                try {
                    $target[properties] = $proper[properties];
                }catch (e){
                    if ($proper[properties] != null){
                        if ($proper[properties] instanceof Array){
                            try {
                                $target[properties].apply($target, $proper[properties]);
                            }catch (e){}
                        }else{
                            $target[properties]($proper[properties]);
                        }
                    }else {
                        $target[properties]();
                    }
                }
            }
        }
    }


    /**
     *  字符参数替换  数组索引与括号内索引一一对应
     * @param str       "参数替换{0}和{1}..."
     * @param args      [x,y]    
     */
    public static formatString(str: string, args: string[]): string {
        if (str) {
            let reg: RegExp = /\{[0-9]+?\}/;
            while (str.match(reg)) {
                let arr: RegExpMatchArray = str.match(reg);
                let arg: RegExpMatchArray = arr[0].match(/[0-9]+?/);
                str = str.replace(reg, args[parseInt(arg[0])]);
            }
            return str;
        }
        return "";
    }
    /**
     *  解析富文本
     * @param htmltext
     */
    public static parseHtmlText(htmltext: string): egret.ITextElement[] {
        return LVars.s_textFlowParser.parse(htmltext);
    }

    private static s_textFlowParser: egret.HtmlTextParser = new egret.HtmlTextParser();
}