/**
 * 将两边已排序的数组做最后的合并
 * @param {Array} sortedLeftArray 左半已排序的数组
 * @param {Array} sortedRightArray 右半已排序的数组
 */
function merge(sortedLeftArray, sortedRightArray) {
    let sortedArray = [];

    while (sortedLeftArray.length && sortedRightArray.length) {
        let minElement = null;

        // 找到最新值元素, 如果左数组第一个元素比右数组第一个元素大，则说明左数组应该在排在右侧
        if (sortedLeftArray[0] > sortedRightArray[0]) {
            minElement = sortedRightArray.shift();
        } else {
            minElement = sortedLeftArray.shift();
        }

        sortedArray.push(minElement);
    }

    // 经过处理后如果sortedLeftArray 或者sortedRightArray 还有值，
    // 则说明sortedLeftArray[0] 或者sortedRightArray[0] 一定比sortedArray末尾值大
    // 直接合并即可
    if (sortedLeftArray.length) {
        sortedArray = sortedArray.concat(sortedLeftArray);
    }

    if (sortedRightArray.length) {
        sortedArray = sortedArray.concat(sortedRightArray);
    }

    return sortedArray;
}

/**
 * 归并排序算法实现
 * @time 2019-05-29
 * @author twindyorg
 */
class MergeSort {

    /**
     * 归并排序核心实现
     * @param {Array} originalArray 要进行排序的数组
     */
    static sort(originalArray) {
        // 当数组为空或者只有一个元素时直接返回
        if (originalArray.length <= 1) {
            return originalArray;
        }

        // 将数组分割成两部分
        const middleIndex = Math.floor(originalArray.length / 2);
        const leftArray = originalArray.slice(0, middleIndex); // 左半数组
        const rightArray = originalArray.slice(middleIndex, originalArray.length); // 右半数组

        // 再分别对左半数组，右半数组排序
        const sortedLeftArray = MergeSort.sort(leftArray);
        const sortedRightArray = MergeSort.sort(rightArray);

        // 将左右两边已经排序的数据进行最后的合并
        return merge(sortedLeftArray, sortedRightArray);
    }
}

export default MergeSort;
