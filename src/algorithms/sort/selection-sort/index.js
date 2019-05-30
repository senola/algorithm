/**
 * 选择排序算法
 * @time 2019-05-29
 * @author twindyorg
 *
 */
class SelectionSort {

    /**
     * 选择排序算法
     * @param {Array} originalArray 要进行排序的数组
     */
    static sort(originalArray) {
        // 克隆一个新数组
        const array = [...originalArray];

        for (let i = 0, _len = array.length; i < _len - 1; i++) {
            let minIndex = i;

            for (let j = i + 1; j < _len; j++) {
                if (array[j] < array[minIndex]) {
                    minIndex = j;
                }
            }
            // 如果minIndex的值与i值不等说明，最小值在未排序区间需要做元素替换操作
            if (minIndex !== i) {
                [array[i], array[minIndex]] = [array[minIndex], array[i]];
            }
        }

        return array;
    }
}

export default SelectionSort;
