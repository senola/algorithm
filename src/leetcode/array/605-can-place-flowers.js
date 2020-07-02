/**
 * https://leetcode-cn.com/problems/can-place-flowers/
 * @param {*} flowerbed
 * @param {*} n 是否能种下花的数量
 */
function canPlaceFlowers(flowerbed, n) {
    let maxNum = 0; // 能种花的数量

    // [0, 0, 1, 1, 0, 1, 0, 0]
    // [1, 0, 1, 1, 1, 0, 0, 0, 0]
    for (let i = 0, ilen = flowerbed.length; i < ilen;) { // 注意，i++ 由下面代码控制
        if (flowerbed[i] === 0) {
            // 等于0的情况需要判断两侧是否是1, 如果都是0，则可以种花
            if (flowerbed[i - 1] !== 1 && flowerbed[i + 1] !== 1) {
                maxNum++;
            } else {
                i += 1; // 当前位置是0，但不可以种花，下一个判断位置右移1格
                continue;
            }
        }
        i += 2; // 当前位置可以种花或者已经种花，下一个判断位置右移2格
    }

    return maxNum >= n;
}

export default canPlaceFlowers;
