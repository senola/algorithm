/**
 * 验证回文串
 * https://leetcode-cn.com/problems/valid-palindrome/
 */

/**
 * 题解一：1、除去非数字字母和数字，2、复制一份进行反转， 3，再进行对比
 * 时间复杂度: O(n) --- toLowerCase(), replace(), split(), reverse(), join() 的时间复杂度为 O(n)
 * 空间复杂度: O(n)
 * @param s
 */
const isPalindrome1 = (s: any)=> {
    const result = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

    return result === result.split('').reverse().join('');
};

/**
 * 题解二：利用match提取字符和数字
 * 时间复杂度: O(n) --- toLowerCase(), replace(), split(), reverse(), join() 的时间复杂度为 O(n)
 * 空间复杂度: O(n)
 * @param s
 */
const isPalindrome2 = (s: any)=> {
    let result = s.toLowerCase().match(/[a-zA-Z0-9]/g);

    if (!result) return true;

    result = result.join('');


    return result === result.split('').reverse().join('');
};

export {
    isPalindrome1,
    isPalindrome2
};
