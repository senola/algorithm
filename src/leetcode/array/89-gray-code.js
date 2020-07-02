/**
 * 格雷编码
 * https://leetcode-cn.com/problems/gray-code/
 * @param {number} n
 * @return {number[]}
 */
function grayCode(n) {

    /**
     * 递归
     */
    function gray(num) {
        if (num === 0) {
            return {
                binary: ['0'],
                decimalism: [0]
            };
        }
        if (num === 1) {
            return {
                binary: ['0', '1'],
                decimalism: [0, 1]
            };
        }
        const result = {
            binary: [],
            decimalism: []
        };
        const prevGray = gray(num - 1);
        const prevLen = Math.pow(2, num - 1); // 获取各类编码总长度

        for (let i = 0; i < prevLen; i++) {
            result.binary[i] = `0${prevGray.binary[i]}`;
            result.binary[2 * prevLen - 1 - i] = `1${prevGray.binary[i]}`;
            result.decimalism[i] = parseInt(`0${prevGray.binary[i]}`, 2);
            result.decimalism[2 * prevLen - 1 - i] = parseInt(`1${prevGray.binary[i]}`, 2);
        }

        return result;
    }

    return gray(n).decimalism;
}

export default grayCode;
