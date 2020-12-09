/**
 * 有效的字母异位词
 * https://leetcode-cn.com/problems/valid-anagram/
 */

/**
 * 题解一：利用sort排序
 * 时间复杂度： O(nlogn)-- sort 方法的实现原理，当数组长度小于等于 10 的时候，采用插入排序，大于 10 的时候，采用快排，快排的平均时间复杂度是O(nlogn)。
 * 空间复杂度： O(n)
 * @param s
 * @param t
 */
const isAnagram1 = (s: any, t: any)=> {
    if ((typeof s !== 'string' && typeof t !== 'string') || s.length !== t.length) {
        return false;
    }
    const sortFn = (a: string, b: string)=> {
        return a.charCodeAt(0) - b.charCodeAt(0);
    };
    const _s = s.split('').sort(sortFn).join('');
    const _t = t.split('').sort(sortFn).join('');

    return _s === _t;
};

/**
 * 题解二： 使用累加计数法--使用一个对象记录第一个字符串每个字符的个数，再遍历第二个字符串，与得到的对象中的字母匹配
 * 时间复杂度： O(n)
 * 空间复杂度： O(n)
 * @param s
 * @param t
 */
const isAnagram2 = (s: any, t: any)=> {
    if ((typeof s !== 'string' && typeof t !== 'string') || s.length !== t.length) {
        return false;
    }

    const temp = {}; // 存储每个字符出现的次数

    for (const v of s) {
        if (!temp[v]) temp[v] = 0;
        temp[v]++;
    }

    for (const i of t) {
        if (!temp[i]) { // 不存在说明不是有效的字母异位词
            return false;
        }
        temp[i]--; // 存在则将出现的个数减1
    }
    return true;
};

export {
    isAnagram1,
    isAnagram2
};
