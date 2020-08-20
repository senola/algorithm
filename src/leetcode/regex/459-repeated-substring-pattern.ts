/**
 * https://leetcode-cn.com/problems/repeated-substring-pattern/
 * 重复的子字符串
 * @param {string} s
 * @return {boolean}
 */
function repeatedSubstringPattern(s) {
    return /^(\w+)\1+$/.test(s);
}

export default repeatedSubstringPattern;
