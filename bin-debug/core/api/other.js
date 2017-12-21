var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var other = (function () {
    function other() {
    }
    /**
     * 返回指定类型的类型编号
     * @param type 指定类型
     * @returns {any} 类型编号
     */
    other.getTypeId = function (type) {
        //增加静态变量__obj_type_id__
        if (!type.hasOwnProperty(this._type_key_name)) {
            type[this._type_key_name] = this._type_id_++;
        }
        return type[this._type_key_name];
    };
    /**
     * 指定类型是否存在类型编号
     * @param type 指定类型
     * @returns {boolean} 是否存在类型编号
     */
    other.hasTypeId = function (type) {
        return is.truthy(type) && type.hasOwnProperty(this._type_key_name);
    };
    other._type_id_ = 1;
    other._type_key_name = "__obj_type_id__";
    return other;
}());
__reflect(other.prototype, "other");
