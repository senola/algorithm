/**
 * 计数排序算法
 * @time 2019-06-02
 */

class CountingSort {

    /**
     * 计数排序核心算法实现
     * @param {Array} originalArray 要排序的数组
     * @param {Number} smallestNum  数组中最小的数
     * @param {Number} largestNum  数组中最大的数
     */
    static sort(originalArray) {
        if (originalArray.length <= 0) {
            return [];
        }

        // 数组中的最大值与最小值，用来构建新的计数数组（又称桶数组）
        let checkedSmallestNum = originalArray[0], checkedLargestNum = originalArray[0];

        // step1: 遍历数组，获取最大值与最小值
        originalArray.forEach(element=> {
            if (element < checkedSmallestNum) {
                checkedSmallestNum = element;
            }

            if (element > checkedLargestNum) {
                checkedLargestNum = element;
            }
        });

        // step2: 根据最大最小值构建新的计数数组（counting array）
        // 使用ES6的fill快速创建一个长度为checkedLargestNum - checkedSmallestNum +1，初始值为0的数组
        const countingArray = Array(checkedLargestNum - checkedSmallestNum + 1).fill(0);

        // 遍历要排序的数组，计算每个值对应的个数
        originalArray.forEach(element=> {
            countingArray[element - checkedSmallestNum]++;
        });

        // step3: 将计数数组（counting array）顺序求和
        // 比如 [1, 3, 6, 2] 顺序求和之后是 [1, 4, 10, 12]
        for (let i = 1; i < countingArray.length; i++) {
            countingArray[i] += countingArray[i - 1];
        }

        // 排序后的数组
        const sortedArray = Array(originalArray.length).fill(null);
        // step3: 假设A是要排序的数组，B是排序后的数组 C是计数数组
        // 遍历要排序数组，假设当扫描到元素3时候， 此时A[3] = 7 说明A数组中 < 3的有7个，也就是说3是数组B中的第7个元素（也就是数组B中下标6的位置）
        // 当3放入到数组B中后，< 3的元素就只剩下6个了，因此对应的C[3] 要减1，即值变成6

        originalArray.forEach(element=> {
            // 获取当前元素在排序数组的下标(注意下标需要减1)
            const lastIndex = countingArray[element - checkedSmallestNum] - 1;
            // 将元素放入正确的位置上

            sortedArray[lastIndex] = element;

            // 计数数组对应的index要减1
            countingArray[element - checkedSmallestNum]--;
        });

        return sortedArray;
    }
}

export default CountingSort;
