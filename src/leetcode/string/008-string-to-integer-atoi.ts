/**
 * 字符串转换整数 atoi (ascii to integer)
 * https://leetcode-cn.com/problems/string-to-integer-atoi
 */

/**
  * 题解一： 利用正则
  * 时间复杂度： O(1)
  * 空间复杂度： O(1)
  * @param s
  */
const atoi1 = (s: any)=> {
    if (typeof s !== 'string') {
        return 0;
    }

    const min = -2147483648;
    const max = 2147483647;

    const result = s.trim().match(/^[+-]?\d+/);
    // let num = Number(result ? result[0] : 0);

    // if (num < min) {
    //     num = min;
    // }

    // if (num > max) {
    //     num = max;
    // }

    return result ? Math.max(Math.min(Number(result[0]), max), min) : 0;
};


/**
  * 题解二： 利用循环组个比较
  * 时间复杂度： O(n)
  * 空间复杂度： O(n)
  * @param s
  */
const atoi2 = (s: any)=> {
    if (typeof s !== 'string') {
        return 0;
    }

    const min = -2147483648;
    const max = 2147483647;

    const _s = s.trim();
    let result = '';

    for (const i of _s) {
        // @ts-ignore
        if (i === '+' || i === '-' || !isNaN(i)) {
            result += i;
        } else {
            break;
        }
    }
    return Number(result) ? Math.max(Math.min(Number(result), max), min) : 0;
};

/**
 * 题解三： 利用parseInt转换特性
 * @param s
 */
const atoi3 = (s: any)=> {
    if (typeof s !== 'string') {
        return 0;
    }

    const min = -2147483648;
    const max = 2147483647;

    // parseInt 会忽略前后空格
    // parseInt 会尽可能多的转换，遇到非整数字符则停止
    // parseInt 第二个参数可指定，字符串的基数及要转成的进制数，取值范围为[2, 36]
    const result = parseInt(s, 10);

    return !isNaN(result) ? Math.max(Math.min(result, max), min) : 0;
};

export {
    atoi1,
    atoi2,
    atoi3
};
