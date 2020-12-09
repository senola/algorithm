/**
 * 反转整数
 * https://leetcode-cn.com/problems/reverse-integer/
 */

/**
 * 解题思路一：利用字符串的反转方法
 * 时间复杂度：O(n)-- reverse 函数时间复杂度为 O(n)，n为整数长度，因此时间复杂度为 O(n), 由于n的长度固定也认为复杂度是O(1)
 * 空间复杂度：O(n)-- 创建临时String reverseNum的长度是n, 因此时间复杂度为 O(n), 由于n的长度已知，也可以认为复杂度是O(1)
 */
const reverseInteger1 = (num: any)=> {
    if (!Number.isInteger(num)) { // 是否是整数判断
        return;
    }
    const min = -2147483648; // -(2 ** 31)
    const max = 2147483647; // (2 ** 31) - 1

    let reverseNum = Number(Math.abs(num).toString().split('').reverse().join(''));

    if (num < 0) {
        reverseNum = -reverseNum;
    }

    if (reverseNum > max || reverseNum < min) {
        return 0;
    }

    return reverseNum;

};

/**
 * 解题思路二：通过模10取到最低位，然后又通过乘 10 将最低位迭代到最高位，完成翻转
 * 时间复杂度：O(n)-- while 循环n次
 * 空间复杂度：O(1)-- 只用到常数个变量
 * @param num {any}
 */
const reverseInteger2 = (num: any)=> {
    if (!Number.isInteger(num)) { // 是否是整数判断
        return;
    }
    const min = -2147483648; // -(2 ** 31)
    const max = 2147483647; // (2 ** 31) - 1

    let reverseNum = 0, _num = Math.abs(num);

    while (_num !== 0) {
        reverseNum = reverseNum * 10 + _num % 10;
        _num = Math.floor(_num / 10);
    }

    if (num < 0) {
        reverseNum = -reverseNum;
    }

    if (reverseNum > max || reverseNum < min) {
        return 0;
    }
    return reverseNum;
};

export {
    reverseInteger1,
    reverseInteger2
};
