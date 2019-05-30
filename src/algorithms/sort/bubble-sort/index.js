/**
 * 冒泡排序算法
 * @time 2019-05-28
 * @author twindyorg
 */
class BubbleSort {

    /**
     * 冒泡排序的核心算法
     * @param {Array} originalArray 要进行排序的数组
     */
    static sort(originalArray) {
        // 是否排序完成的标志
        let swapped = false;
        // 克隆一个新的数组
        const array = [...originalArray];

        for (let i = 0, _len = array.length; i < _len; i++) {
            swapped = false;
            // 冒泡至少一个元素移动到它应该在的位置
            for (let j = 0; j < _len - i; j++) {
                // 满足条件，置换位置
                if (array[j] > array[j + 1]) {
                    [array[j], array[j + 1]] = [array[j + 1], array[j]];
                    swapped = true;
                }
            }

            // 如果本次循环没有元素移动，则说明排序已经完成了，后面的操作可以不进行
            if (!swapped) {
                return array;
            }
        }

        return array;
    }
}

export default BubbleSort;
