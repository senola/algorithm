/**
 * 最长公共前缀
 * https://leetcode-cn.com/problems/longest-common-prefix/
 */

/**
 * 题解一：循环迭代
 * 时间复杂度：O(n)
 * 空间复杂度：O(1)
 * @param str {string[]}
 */
const longestCommonPrefix1 = (str: any)=> {
    if (!Array.isArray(str) || str.length === 0) {
        return '';
    }

    if (str.length === 1) {
        return str[0];
    }

    // 获取数组中最小长度的string
    const minLengthStr = str.reduce((v1, v2)=> {
        return v1.length > v2.length ? v2 : v1;
    });

    let result = '';

    // 遍历最小长度次
    for (let i = 0, j = minLengthStr.length; i < j; i++) {
        let flag = true;

        for (const s of str) {
            if (s[i] !== minLengthStr[i]) {
                flag = false;
                break;
            }
        }
        if (!flag) {
            break;
        }
        result += minLengthStr[i];
    }

    return result;
};

/**
 * 题解二： 递归
 * 可以拆分成两步：
 * 1. 查找前 n-1 个字符串的最长公共前缀，
 * 2. 查找 m 与最后一个字符串的公共前缀
 * 时间复杂度：O(n)
 * 空间复杂度：O(1)
 * @param str {string[]}
 */
const longestCommonPrefix2 = (str: any)=> {

    // findCommonPrefix
    const findCommonPrefix = (a: string, b: string)=> {
        let i = 0;

        while (i < a.length && i < b.length && a.charAt(i) === b.charAt(i)) {
            i++;
        }
        return i > 0 ? a.substring(0, i) : '';
    };

    if (str.length > 0) {
        let commonPrefix = str[0];

        for (let i = 1; i < str.length; i++) {
            commonPrefix = findCommonPrefix(commonPrefix, str[i]);
        }
        return commonPrefix;
    }
    return '';
};

export {
    longestCommonPrefix1,
    longestCommonPrefix2
};
