class ObjectUtil {

    //利用递归来实现深拷贝，如果对象属性的值是引用类型（Array,Object），那么对该属性进行深拷贝，直到遍历到属性的值是基本类型为止。  
    static deepClone(obj):any{    
        if(!obj&& typeof obj!== 'object'){      
        return;    
        }    
        var newObj= obj.constructor === Array ? [] : {};    
        for(var key in obj){       
        if(obj[key]){          
            if(obj[key] && typeof obj[key] === 'object'){  
            newObj[key] = obj[key].constructor === Array ? [] : {}; 
            //递归
            newObj[key] = this.deepClone(obj[key]);          
            }else{            
            newObj[key] = obj[key];         
            }       
        }    
        }    
        return newObj; 
    }

    static deepClone2(obj):any{
        return JSON.parse(JSON.stringify(obj));
    }

    /**
     * @desc 深拷贝，支持常见类型
     * @param {Any} values
     */
    static deepCloneCommon(values) {
        var copy;

        // Handle the 3 simple types, and null or undefined
        if (null == values || "object" != typeof values) return values;

        // Handle Date
        if (values instanceof Date) {
            copy = new Date();
            copy.setTime(values.getTime());
            return copy;
        }

        // Handle Array
        if (values instanceof Array) {
            copy = [];
            for (var i = 0, len = values.length; i < len; i++) {
                copy[i] = this.deepCloneCommon(values[i]);
            }
            return copy;
        }

        // Handle Object
        if (values instanceof Object) {
            copy = {};
            for (var attr in values) {
                if (values.hasOwnProperty(attr)) copy[attr] = this.deepCloneCommon(values[attr]);
            }
            return copy;
        }

        throw new Error("Unable to copy values! Its type isn't supported.");
    }



    static getValue(data:any, key:any, defVal:any = null):any {
        if (is.falsy(data)) {
            return defVal;
        }
        key = key + "";
        var keyArr = key.split('.');
        var curObj = data;
        for (var i = 0; i < keyArr.length; i++) {
            var key = keyArr[i];
            if (is.array(curObj)) {
                curObj = curObj[parseInt(key)];
            } else {
                if (key == '') {
                    curObj = curObj;
                } else {
                    curObj = curObj[key];
                }
            }
            if (is.not.existy(curObj)) {
                break;
            }
        }

        if (is.not.existy(curObj)) {
            return defVal;
        }
        return curObj;
    }

    static hasValue(data:any, key:any):boolean {
        if (!data) {
            return false;
        }
        key = key + "";
        var keyArr = key.split('.');
        var obj = data;
        while (keyArr.length > 0 && obj) {
            var k = keyArr.shift();
            if (!obj.hasOwnProperty(k)) {
                return false;
            }
            obj = obj[k];
        }
        return true;
    }



    /**
     * 换一种方式对象克隆
     * @param obj
     * @param deep
     * @returns {any}
     */
    public static clone(obj:any, deep:boolean = false):any {
        if (obj instanceof Array) {
            return ObjectUtil.arrayClone(obj, deep);
        }
        else if (typeof obj == "function") {
            return ObjectUtil.functionClone(obj, deep);
        }
        else if (obj instanceof Date) {
            return ObjectUtil.dateClone(obj, deep);
        }
        else if (obj instanceof Object) {
            return ObjectUtil.objectClone(obj, deep);
        }
        else {
            return obj;
        }
    }


    /**
     * 对象克隆
     * @param obj
     * @param deep
     * @returns {any}
     */
    public static objectClone(obj:any, deep:boolean = false):any {
        var buf:any = {};
        for (var p in obj) {
            buf[p] = deep ? arguments.callee(obj[p]) : obj[p];
        }
        return buf;
    }

    /**
     * 数组克隆
     * @param obj
     * @param deep
     * @returns {Array<any>}
     */
    public static arrayClone(obj:Array<any>, deep:boolean = false):Array<any> {
        var buf:Array<any> = [];
        var i = obj.length;
        while (i--) {
            buf[i] = deep ? arguments.callee(obj[i]) : obj[i];
        }
        return buf;
    }
a
    /**
     * 函数克隆
     * @param obj
     * @param deep
     * @returns {Function}
     */
    public static functionClone(obj:Function, deep:boolean = false):Function {
        var buf:Function = Function(<string>("return ") + obj)();
        for (var p in obj)
            buf[p] = deep ? arguments.callee(obj[p]) : obj[p];
        return buf;
    }


    /**
     * 时间克隆
     * @param obj
     * @param deep
     * @returns {Date}
     */
    public static dateClone(obj:Date, deep:boolean = false):Date {
        var buf = new Date();
        buf.setTime(obj.getTime());
        for (var p in obj)
            buf[p] = deep ? arguments.callee(obj[p]) : obj[p];
        return buf;
    }


    /**
     * 判断一个对象是否包含一个特定的方法
     * @param obj
     * @param methodName
     * @returns {boolean}
     */
    public static isMethod(obj:any, methodName:string):boolean {
        if (obj.hasOwnProperty(methodName))
            return obj[methodName] instanceof Function;
        return false;
    }

    /**
     * 对象是否未定义
     * @param obj
     * @returns {boolean}
     */
    public static isUndefined(obj:any):boolean {
        return !obj || obj === undefined || typeof obj === 'undefined';
    }

    /**
     * 判断对象是否为空
     * @param obj
     * @returns {boolean}
     *
     *  <code>
     *      var testNumber:number = 0;
     *      var testArray:Array<any>   = [];
     *      var testString:string = "";
     *      var testObject:Object = {};
     *      console.log(ObjectUtil.isEmpty(testNumber)); // 输出 "true"
     *      console.log(ObjectUtil.isEmpty(testArray));  // 输出 "true"
     *      console.log(ObjectUtil.isEmpty(testString)); // 输出 "true"
     *      console.log(ObjectUtil.isEmpty(testObject)); // 输出 "true"
     *  </code>
     *
     */
    public static isEmpty(obj:any):boolean {
        if (obj == undefined)
            return true;

        if (typeof(obj) == "number")
            return isNaN(obj) || obj == 0;

        if (obj instanceof Array || typeof(obj) == "string")
            return obj.length == 0;

        if (obj instanceof Object) {
            for (var prop in obj)
                if (obj.hasOwnProperty(prop))
                    return false;
            return true;
        }

        return false;
    }

}