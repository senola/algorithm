/**
 * utils
 * @time 2019-05-29
 * @author twindyorg
 */
class Utils {
    // 返回[under, over]之间的随机数, 若只传入一个参数num则返回的结果表示[0,num]间的随机数
    static getRandomNum(under?: number, over?: number): number {
        switch (arguments.length) { // 判断参数的长度
            case 1:
                return Math.floor(Math.random() * under + 1);
            case 2:
                return Math.floor(Math.random() * (over - under + 1) + under);
            default:
                return 1;
        }
    }
    // 比较函数
    static defaultCompare(a: any, b: any) {
        return a === b;
    }
    // 转为String
    static defaultToString(item: any) {
        if (item === null) {
            return 'NULL';
        } else if (item === undefined) {
            return 'UNDEFINED';
        } else if (typeof item === 'string' || item instanceof String) {
            return `${item}`;
        }
        return item.toString();
    }
}

export default Utils;
