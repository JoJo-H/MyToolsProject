var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var LVars = (function () {
    function LVars(vars) {
        this.CLASS_NAME = "LVars";
        this._vars = {};
        if (vars) {
            for (var p in vars) {
                this._vars[p] = vars[p];
            }
        }
    }
    LVars.prototype._set = function (property, value) {
        if (value == null) {
            delete this._vars[property];
        }
        else {
            this._vars[property] = value;
        }
        return this;
    };
    Object.defineProperty(LVars.prototype, "vars", {
        get: function () {
            return this._vars;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * 简单遍历并调用对象集属性
     * @param $target
     * @param $proper
     *
     * 使用方法如下:
     * --CODE: LVars.some(mc1, {alpha:0, scaleX:.5 ,touchEnabled:true});
     */
    LVars.some = function ($target, $proper) {
        if (!$proper)
            return;
        for (var properties in $proper) {
            if ($target.hasOwnProperty(properties)) {
                try {
                    $target[properties] = $proper[properties];
                }
                catch (e) {
                    if ($proper[properties] != null) {
                        if ($proper[properties] instanceof Array) {
                            try {
                                $target[properties].apply($target, $proper[properties]);
                            }
                            catch (e) { }
                        }
                        else {
                            $target[properties]($proper[properties]);
                        }
                    }
                    else {
                        $target[properties]();
                    }
                }
            }
        }
    };
    /**
     *  字符参数替换  数组索引与括号内索引一一对应
     * @param str       "参数替换{0}和{1}..."
     * @param args      [x,y]
     */
    LVars.formatString = function (str, args) {
        if (str) {
            var reg = /\{[0-9]+?\}/;
            while (str.match(reg)) {
                var arr = str.match(reg);
                var arg = arr[0].match(/[0-9]+?/);
                str = str.replace(reg, args[parseInt(arg[0])]);
            }
            return str;
        }
        return "";
    };
    /**
     *  解析富文本
     * @param htmltext
     */
    LVars.parseHtmlText = function (htmltext) {
        return LVars.s_textFlowParser.parse(htmltext);
    };
    LVars.s_textFlowParser = new egret.HtmlTextParser();
    return LVars;
}());
__reflect(LVars.prototype, "LVars");
