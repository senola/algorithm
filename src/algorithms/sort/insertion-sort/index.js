/**
 * 插入排序算法
 * @time 2019-05-29
 * @author twindyorg
 */

// eslint-disable-next-line
class InsertionSort {

    /**
     * 插入排序算法
     * @param {Array} originalArray 要进行排序的数组
     */
    static sort(originalArray) {
        // 克隆一个新数组
        const array = [...originalArray];

        for (let i = 0, _len = array.length; i < _len; i++) {
            let currentIndex = i;

            // 如果前一个元素为undefined则表示已将元素插入其应处在的位置
            // 注意每次都要遍历已排序的区间的值，直到前一个元素为undefined
            while (array[currentIndex - 1] !== undefined
                && array[currentIndex - 1] > array[currentIndex]) {
                // 满足条件则交换元素
                const temp = array[currentIndex];

                array[currentIndex] = array[currentIndex - 1];
                array[currentIndex - 1] = temp;

                // 指针左移
                currentIndex--;
            }
        }

        return array;
    }
}

export default InsertionSort;
