var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var SingletonFactory = (function () {
    function SingletonFactory() {
    }
    /**
     * 返回指定类型的单例
     * @includeExample singleton.ts
     * @param type 需要单例化的类型
     * @returns {any} 类型的单例
     */
    SingletonFactory.singleton = function (type) {
        var typeId = other.getTypeId(type);
        if (!this._singletonMap.hasOwnProperty(typeId)) {
            this._singletonMap[typeId] = new type();
        }
        return this._singletonMap[typeId];
    };
    /**
     * 返回指定分类的类型单例
     * @param name 分类名称
     * @param type 单例化的类型
     * @includeExample typesingleton.ts
     * @returns {any} 单例对象
     */
    SingletonFactory.typeSingleton = function (name, type) {
        var typeId = name + other.getTypeId(type);
        if (!this._singletonMap.hasOwnProperty(typeId)) {
            this._singletonMap[typeId] = new type();
        }
        return this._singletonMap[typeId];
    };
    SingletonFactory._singletonMap = {};
    return SingletonFactory;
}());
__reflect(SingletonFactory.prototype, "SingletonFactory");
