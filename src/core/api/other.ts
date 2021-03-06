

class other {

    private static _type_id_ = 1;
    private static _type_key_name = "__obj_type_id__";

    /**
     * 返回指定类型的类型编号
     * @param type 指定类型
     * @returns {any} 类型编号
     */
    static getTypeId(type:any):any {
        //增加静态变量__obj_type_id__
        if (!type.hasOwnProperty(this._type_key_name)) {
            type[this._type_key_name] = this._type_id_ ++;
        }
        return type[this._type_key_name];
    }

    /**
     * 指定类型是否存在类型编号
     * @param type 指定类型
     * @returns {boolean} 是否存在类型编号
     */
    static hasTypeId(type:any):boolean {
        return is.truthy(type) &&   type.hasOwnProperty(this._type_key_name);
    }
    
}