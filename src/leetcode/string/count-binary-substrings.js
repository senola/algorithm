/**
 * 计数二进制
 * https://leetcode-cn.com/problems/count-binary-substrings/
 */

/**
 * 方案一
 * @param {*} str
 */
const countBinarySubstrings1 = str=> {

    /**
     * 返回符合条件的字串，每次只会返回一条
     * @param {*} String
     */
    function getMatchedString(s) {
        const strArray = s.split('');

        let leftIndex = 1, rightIndex = 0, len = strArray.length, result = strArray[0];

        for (let i = 1; i < len; i++) {
            if (strArray[i] !== strArray[0]) {
                if (rightIndex === 0) {
                    const _len = 2 * leftIndex;

                    // 确保新的len不超过数组长度
                    len = _len < len ? _len : len;
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



/**
 * 方案二, 利用正则
 * @param {*} str
 */
const countBinarySubstrings2 = str=> {
    // 建立数据结构，堆栈，保存数据
    const r = [];
    // 给定任意子输入都返回第一个符合条件的子串
    const getMatchedString = str=> {
        const j = str.match(/^(0+|1+)/)[0];
        const o = (j[0] ^ 1).toString().repeat(j.length);
        const reg = new RegExp(`^(${j}${o})`);

        if (reg.test(str)) {
            return RegExp.$1;
        } else {
            return '';
        }
    };

    // 通过for循环控制程序运行的流程
    for (let i = 0, len = str.length - 1; i < len; i++) {
        const sub = getMatchedString(str.slice(i));

        if (sub) {
            r.push(sub);
        }
    }
    return r.length;
};

/**
 * 方案三
 * @param {*} str
 */
const countBinarySubstrings3 = str=> {
    let last = 0, // 记录之前一种数字的个数
        res = 0, // 符合期望的个数
        cur = 1; // 记录当前数字的个数

    for (let i = 1; i < str.length; i++) {
        if (str[i] === str[i - 1]) {
            cur++;
        } else {
            last = cur;
            cur = 1;
        }
        if (last >= cur) {
            res++;
        }
    }
    return res;
};

export {
    countBinarySubstrings1,
    countBinarySubstrings2,
    countBinarySubstrings3
};
