var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**
 * 验证检测类
 */
var ValidationUtil = (function () {
    function ValidationUtil() {
        this.CLASS_NAME = "ValidationUtil";
    }
    /**
     * 通用检测方法
     * @param regexp
     * @param str
     * @returns {boolean}
     */
    ValidationUtil.isValid = function (regexp, str) {
        var pattern = new RegExp(regexp);
        return pattern.test(String(str));
    };
    /**
     * 检测短时间，形如 (13:04:06)
     * @param str
     * @returns {boolean}
     */
    ValidationUtil.isTime = function (str) {
        var pattern = new RegExp(regexEnum.shorttime);
        var a = str.match(pattern);
        if (a == null)
            return false;
        if (parseInt(a[1]) > 24 || parseInt(a[3]) > 60 || parseInt(a[4]) > 60)
            return false;
        return true;
    };
    /**
     * 检测短日期，形如 (2003-12-05)
     * @param str
     * @returns {boolean}
     */
    ValidationUtil.isDate = function (str) {
        var pattern = new RegExp(regexEnum.shortdate);
        var r = str.match(pattern);
        if (r == null)
            return false;
        var d = new Date(parseInt(r[1]), parseInt(r[3]) - 1, parseInt(r[4]));
        return (d.getFullYear() == parseInt(r[1]) && (d.getMonth() + 1) == parseInt(r[3]) && d.getDate() == parseInt(r[4]));
    };
    /**
     * 检测长时间，形如 (2003-12-05 13:04:06)
     * @param str
     * @returns {boolean}
     */
    ValidationUtil.isDateTime = function (str) {
        var pattern = new RegExp(regexEnum.datetime);
        var r = str.match(pattern);
        if (r == null)
            return false;
        var d = new Date(parseInt(r[1]), parseInt(r[3]) - 1, parseInt(r[4]), parseInt(r[5]), parseInt(r[6]), parseInt(r[7]));
        return (d.getFullYear() == parseInt(r[1]) && (d.getMonth() + 1) == parseInt(r[3]) && d.getDate() == parseInt(r[4]) && d.getHours() == parseInt(r[5]) && d.getMinutes() == parseInt(r[6]) && d.getSeconds() == parseInt(r[7]));
    };
    /**
     * 检测邮箱地址, 形如(d8q8@163.com)
     * @param email
     * @returns {boolean}
     */
    ValidationUtil.isEmail = function (email) {
        var pattern = new RegExp(regexEnum.email);
        return email.match(pattern) != null;
    };
    /**
     * 检测身份证是否合法
     * @param sId
     * @returns {boolean}
     */
    ValidationUtil.isCardID = function (sId) {
        var aCity = {
            11: "北京",
            12: "天津",
            13: "河北",
            14: "山西",
            15: "内蒙古",
            21: "辽宁",
            22: "吉林",
            23: "黑龙江",
            31: "上海",
            32: "江苏",
            33: "浙江",
            34: "安徽",
            35: "福建",
            36: "江西",
            37: "山东",
            41: "河南",
            42: "湖北",
            43: "湖南",
            44: "广东",
            45: "广西",
            46: "海南",
            50: "重庆",
            51: "四川",
            52: "贵州",
            53: "云南",
            54: "西藏",
            61: "陕西",
            62: "甘肃",
            63: "青海",
            64: "宁夏",
            65: "新疆",
            71: "台湾",
            81: "香港",
            82: "澳门",
            91: "国外"
        };
        var iSum = 0;
        if (!/^\d{17}(\d|x)$/i.test(sId))
            return false;
        sId = sId.replace(/x$/i, "a");
        if (aCity[parseInt(sId.substr(0, 2))] == null)
            return false;
        var sBirthday = sId.substr(6, 4) + "-" + Number(sId.substr(10, 2)) + "-" + Number(sId.substr(12, 2));
        var d = new Date(sBirthday.replace(/-/g, "/"));
        if (sBirthday != (d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate()))
            return false;
        for (var i = 17; i >= 0; i--)
            iSum += (Math.pow(2, i) % 11) * parseInt(sId.charAt(17 - i), 11);
        if (iSum % 11 != 1)
            return false;
        return true;
    };
    /**
     * 检测日期是大于或等于某个年龄
     * @param age
     * @param yearBorn
     * @param monthBorn
     * @param dateBorn
     * @returns {boolean}
     */
    ValidationUtil.isAge = function (age, yearBorn, monthBorn, dateBorn) {
        if (monthBorn === void 0) { monthBorn = 0; }
        if (dateBorn === void 0) { dateBorn = 1; }
        var currentDate = new Date();
        if (yearBorn > currentDate.getFullYear() - age)
            return false;
        if (yearBorn < currentDate.getFullYear() - age)
            return true;
        if (monthBorn > currentDate.getMonth())
            return false;
        if (monthBorn < currentDate.getMonth())
            return true;
        if (dateBorn <= currentDate.getDate())
            return true;
        return false;
    };
    /**
     * 检测信用卡是否有效
     * @param cardNumber
     * @returns {boolean}
     */
    ValidationUtil.isCreditCard = function (cardNumber) {
        if (cardNumber.length < 7 || cardNumber.length > 19 || cardNumber < 1000000)
            return false;
        var sum = 0;
        var alt = true;
        var i = cardNumber.length;
        var pre;
        while (--i > -1) {
            if (alt)
                sum += (cardNumber.substr(i, 1));
            else {
                pre = (cardNumber.substr(i, 1)) * 2;
                sum += (pre > 8) ? pre -= 9 : pre;
            }
            alt = !alt;
        }
        return sum % 10 == 0;
    };
    /**
     * 检测信用卡卡种
     * @param cardNumber
     * @returns {string}
     */
    ValidationUtil.getCreditCardProvider = function (cardNumber) {
        if (!ValidationUtil.isCreditCard(cardNumber))
            return 'invalid';
        if (cardNumber.length == 13 ||
            cardNumber.length == 16 &&
                cardNumber.indexOf('4') == 0) {
            return 'visa';
        }
        else if (cardNumber.indexOf('51') == 0 ||
            cardNumber.indexOf('52') == 0 ||
            cardNumber.indexOf('53') == 0 ||
            cardNumber.indexOf('54') == 0 ||
            cardNumber.indexOf('55') == 0 &&
                cardNumber.length == 16) {
            return 'mastercard';
        }
        else if (cardNumber.length == 16 &&
            cardNumber.indexOf('6011') == 0) {
            return 'discover';
        }
        else if (cardNumber.indexOf('34') == 0 ||
            cardNumber.indexOf('37') == 0 &&
                cardNumber.length == 15) {
            return 'amex';
        }
        else if (cardNumber.indexOf('300') == 0 ||
            cardNumber.indexOf('301') == 0 ||
            cardNumber.indexOf('302') == 0 ||
            cardNumber.indexOf('303') == 0 ||
            cardNumber.indexOf('304') == 0 ||
            cardNumber.indexOf('305') == 0 ||
            cardNumber.indexOf('36') == 0 ||
            cardNumber.indexOf('38') == 0 &&
                cardNumber.length == 14) {
            return 'diners';
        }
        else
            return 'other';
    };
    return ValidationUtil;
}());
__reflect(ValidationUtil.prototype, "ValidationUtil");
/**
 * 正则初始化
 * @type {{intege: string, intege1: string, intege2: string, num: string, num1: string, num2: string, decmal: string, decmal1: string, decmal2: string, decmal3: string, decmal4: string, decmal5: string, email: string, color: string, url: string, chinese: string, ascii: string, zipcode: string, mobile: string, ip4: string, notempty: string, picture: string, rar: string, date: string, shortdate: string, shorttime: string, qq: string, tel: string, username: string, letter: string, letter_u: string, letter_l: string, idcard: string}}
 */
var regexEnum = {
    intege: "^-?[1-9]\\d*$",
    intege1: "^[1-9]\\d*$",
    intege2: "^-[1-9]\\d*$",
    num: "^([+-]?)\\d*\\.?\\d+$",
    num1: "^[1-9]\\d*|0$",
    num2: "^-[1-9]\\d*|0$",
    decmal: "^([+-]?)\\d*\\.\\d+$",
    decmal1: "^[1-9]\\d*.\\d*|0.\\d*[1-9]\\d*$",
    decmal2: "^-([1-9]\\d*.\\d*|0.\\d*[1-9]\\d*)$",
    decmal3: "^-?([1-9]\\d*.\\d*|0.\\d*[1-9]\\d*|0?.0+|0)$",
    decmal4: "^[1-9]\\d*.\\d*|0.\\d*[1-9]\\d*|0?.0+|0$",
    decmal5: "^(-([1-9]\\d*.\\d*|0.\\d*[1-9]\\d*))|0?.0+|0$",
    email: "^\\w+((-\\w+)|(\\.\\w+))*\\@[A-Za-z0-9]+((\\.|-)[A-Za-z0-9]+)*\\.[A-Za-z0-9]+$",
    color: "^[a-fA-F0-9]{6}$",
    url: "^http[s]?:\\/\\/([\\w-]+\\.)+[\\w-]+([\\w-./?%&=]*)?$",
    chinese: "^[\\u4E00-\\u9FA5\\uF900-\\uFA2D]+$",
    ascii: "^[\\x00-\\xFF]+$",
    zipcode: "^\\d{6}$",
    mobile: "^13[0-9]{9}|15[012356789][0-9]{8}|18[0256789][0-9]{8}|147[0-9]{8}$",
    ip4: "^(25[0-5]|2[0-4]\\d|[0-1]\\d{2}|[1-9]?\\d)\\.(25[0-5]|2[0-4]\\d|[0-1]\\d{2}|[1-9]?\\d)\\.(25[0-5]|2[0-4]\\d|[0-1]\\d{2}|[1-9]?\\d)\\.(25[0-5]|2[0-4]\\d|[0-1]\\d{2}|[1-9]?\\d)$",
    notempty: "^\\S+$",
    picture: "(.*)\\.(jpg|bmp|gif|ico|pcx|jpeg|tif|png|raw|tga)$",
    rar: "(.*)\\.(rar|zip|7zip|tgz)$",
    date: "^\\d{4}(\\-|\\/|\\.)\\d{1,2}\\1\\d{1,2}$",
    datetime: "^(\\d{1,4})(-|\\/)(\\d{1,2})\\2(\\d{1,2}) (\\d{1,2}):(\\d{1,2}):(\\d{1,2})$",
    shortdate: "^(\\d{1,4})(-|\\/)(\\d{1,2})\\2(\\d{1,2})$",
    shorttime: "^(\\d{1,2})(:)?(\\d{1,2})\\2(\\d{1,2})$",
    qq: "^[1-9]*[1-9][0-9]*$",
    tel: "^(([0\\+]\\d{2,3}-)?(0\\d{2,3})-)?(\\d{7,8})(-(\\d{3,}))?$",
    username: "^\\w+$",
    letter: "^[A-Za-z]+$",
    letter_u: "^[A-Z]+$",
    letter_l: "^[a-z]+$",
    idcard: "^[1-9]([0-9]{14}|[0-9]{17})$" //身份证
};
