/**
 * 电话号码的字母组合
 * https://leetcode-cn.com/problems/letter-combinations-of-a-phone-number/
 * @param {String} str
 * @return {Array}
 */
const letterCombinations = function(str) {
    if (!str) return [];
    // 用数组作为数字与字母的映射，注意letterMap[0], letterMap[1]
    const letterMap = ['', '', 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz'];
    // 将输入字符串转换为数组
    const inputArray = str.split('');
    // 保存转换后的字母，如 "23"-->['abc', 'def']
    const code = [];

    inputArray.forEach(num=> {
        if (letterMap[num]) {
            code.push(letterMap[num]);
        }
    });

    if (code.length === 0) {
        return [];
    } else if (code.length === 1) { // 只输入一个数字，如"2",返回 ['a', 'b', 'c']
        return code[0].split('');
    }

    /**
     * 组合
     * @param {Array} array
     */
    function comb(arr) {
        const temp = [];

        for (let i = 0, ilen = arr[0].length; i < ilen; i++) {
            for (let j = 0, jlen = arr[1].length; j < jlen; j++) {
                temp.push(`${arr[0][i]}${arr[1][j]}`);
            }
        }
        // 用前数组前两项目组合结果去进行下一次的组合
        arr.splice(0, 2, temp);

        if (arr.length > 1) {
            return comb(arr);
        } else {
            // 最终数组的第一项为预期结果
            return arr[0];
        }
    }

    return comb(code);
};

export default letterCombinations;
