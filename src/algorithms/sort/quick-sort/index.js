/**
 * 快速排序--原地排序算法实现（非原地算法会消耗更多的内存）
 * @time 2019-05-30
 * @author twindyorg
 */
class QuickSort {

    /**
     * 基于原地排序实现的快速排序算法
     * @param {Array} originalArray 要排序的数组
     * @param {Number} inputLowIndex 数组的初始下标，默认为0
     * @param {Number} inputHighIndex 数组的末尾下标，默认为数组长度 - 1
     * @param {Boolean} isecursiveCall 是否是递归在调用
     */
    static sort(originalArray, inputLowIndex = 0, inputHighIndex = originalArray.length - 1, isEcursiveCall = false) {
        // 如果是递归调用的话不能重新复制数组，首次调用要复制一份
        const array = isEcursiveCall ? originalArray : [...originalArray];

        /**
         * partition() 方法用于操作lowIndex与highIndex之间的子数组，
         * 选择子数组中的最后一个元素作为pivot，然后遍历整个子数组，将将小于pivot的放到左边，将大于pivot的放到右边，pivot放到中间，
         * 形成三个区间。每一次partition()执行，pivot元素都会在其最终所在的位置。
         *
         * @param {Number} lowIndex 子数组开始下标值
         * @param {Number} highIndex 子数组的末尾下标值
         * @return {Number} 获取最终pivot所在的index
         */
        const partition = (lowIndex, highIndex)=> {

            /**
             * 交换数组中的两个元素
             * @param {Number} leftIndex
             * @param {Number} rightIndex
             */
            const swap = (leftIndex, rightIndex)=> {
                const temp = array[leftIndex];

                array[leftIndex] = array[rightIndex];
                array[rightIndex] = temp;
            };

            // 取数组的最后一位为中心元素
            const pivot = array[highIndex];

            let partitionIndex = lowIndex;

            // 以分区的思想，将（partitionIndex， highIndex）之间的数据分为已排序区间和未排序区间
            // 遍历（partitionIndex， highIndex）之间的数据，如果数据比pivot小，则放到已排序区间
            for (let currentIndex = lowIndex; currentIndex < highIndex; currentIndex++) {
                if (array[currentIndex] < pivot) {
                    swap(partitionIndex, currentIndex);
                    partitionIndex++;
                }
            }

            // 上面操作后，partitionIndex左边的数都小于pivot
            // partitionIndex 右边的数都大于pivot
            // 接下来要把 partitionIndex对应的数与pivot互换，确保三个区间是正确的
            // 即： 区间1： < pivot 的数， 区间2： pivot  区间3：> pivot的数
            // 注意：所有的操作都在原数组上进行，不涉及另外的数组
            swap(partitionIndex, highIndex);

            return partitionIndex;
        };

        if (inputLowIndex < inputHighIndex) {
            const partitionIndex = partition(inputLowIndex, inputHighIndex);
            const isEcursiveCall = true;

            QuickSort.sort(array, inputLowIndex, partitionIndex - 1, isEcursiveCall);
            QuickSort.sort(array, partitionIndex + 1, inputHighIndex, isEcursiveCall);
        }

        return array;
    }
}

export default QuickSort;
