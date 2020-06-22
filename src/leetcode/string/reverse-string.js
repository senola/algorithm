/**
 * 反转字符串中的单词
 * https://leetcode-cn.com/problems/reverse-words-in-a-string-iii
 */
export default str=> {
    return str.split(/\s/g).map(i => i.split('').reverse().join('')).join(' ');
};
