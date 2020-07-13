/**
 * https://leetcode-cn.com/problems/maximum-gap/
 * 最大间距
 * @param {number[]} nums
 * @return {number}
 */
const maximumGap = function(nums) {
    if (nums.length < 2) {
        return 0;
    }
    // 排序
    nums.sort((a, b)=> {
        return a - b;
    });

    let maxValue = 0;

    for (let i = 0; i < nums.length - 1; i++) {
        const diff = nums[i + 1] - nums[i];

        if (diff > maxValue) {
            maxValue = diff;
        }
    }

    return maxValue;
};

export default maximumGap;
