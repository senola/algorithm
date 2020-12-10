/**
 * 实现 strStr()
 * https://leetcode-cn.com/problems/implement-strstr/
 */

/**
 * 题解一：利用substr截取字符串对比
 * 时间复杂度： O(n)
 * 空间复杂度： O(1)
 * @param haystack {string} 匹配字符串
 * @param needle {string} 查找字符串
 */
const strStr1 = (haystack: string, needle: string)=> {
    const hayLength = haystack.length;
    const needleLength = needle.length;

    if (needleLength === 0 || haystack === needle) { // needle 为空或者 needle与haystack相等时直接返回0
        return 0;
    }
    if (hayLength < needleLength) { // haystack长度比needle短时候直接返回-1
        return -1;
    }

    let index = 0;

    while (index <= hayLength - needleLength) { // 注意 needle存在单个字符情况，index可能等于hayLength - needleLength
        if (haystack[index] === needle[0] && needle === haystack.substr(index, needleLength)) {
            return index;
        }
        index++;
    }
    return -1;
};


export {
    strStr1
};
