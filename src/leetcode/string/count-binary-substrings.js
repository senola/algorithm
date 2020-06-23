/**
 * 计数二进制
 * https://leetcode-cn.com/problems/count-binary-substrings/
 */
const cbs1 = str=> {

    /**
     * 返回符合条件的字串，每次只会返回一条
     * @param {*} String
     */
    function getMatchedString(String) {
        const strArray = String.split('');

        let leftIndex = 1, rightIndex = 0, len = strArray.length - 1, result = strArray[0];

        for (let i = 1; i < len; i++) {
            if (strArray[i] !== strArray[0]) {
                if (rightIndex === 0) {
                    len = 2 * leftIndex;
                }
                rightIndex++;
            } else {
                leftIndex++;
            }
            result = result.concat(strArray[i]);
        }

        if (leftIndex === rightIndex) {
            return result;
        } else {
            return '';
        }
    }
    const result = [];

    for (let i = 0; i < str.length - 1; i++) {
        const sliceStr = str.slice(i);
        const data = getMatchedString(sliceStr);

        if (data) {
            result.push(data);
        }
    }
    return result.length;
};

export {
    cbs1
};
