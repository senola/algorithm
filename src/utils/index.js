/**
 * utils
 * @time 2019-05-29
 * @author twindyorg
 */
class Utils {
    // 返回[under, over]之间的随机数, 若只传入一个参数num则返回的结果表示[0,num]间的随机数
    static getRandomNum(under, over) {
        switch (arguments.length) { // 判断参数的长度
            case 1:
                return parseInt(Math.random() * under + 1);
            case 2:
                return parseInt(Math.random() * (over - under + 1) + under);
            default:
                return 1;
        }
    }
}

export default Utils;
