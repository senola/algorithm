/**
 * 冒泡排序算法
 * @time 2019-05-28
 * @author twindyorg
 */
// eslint-disable-next-line
class BubbleSort {

    /**
     * 冒泡排序的核心算法
     * @param {Array} originalArray 要进行排序的数组
     */
    static sort(originalArray) {
        let changed = false;
        // 克隆一个新的数组
        const array = [...originalArray];

        for (let i = 0, _len = array.length; i < _len; i++) {
            changed = false;
            // 冒泡至少一个元素移动到它应该在的位置
            for (let j = 0; j < _len - i; j++) {
                // 满足条件，置换位置
                if (array[j] > array[j + 1]) {
                    [array[j], array[j + 1]] = [array[j + 1], array[j]];
                    changed = true;
                }
            }

            // 如果本次循环没有元素移动，则说明排序已经完成了，后面的操作可以不进行
            if (!changed) {
                return array;
            }
        }

        return array;
    }
}

export default BubbleSort;
