import SelectionSort from '../../../src/algorithms/sort/selection-sort';
import InsertionSort from '../../../src/algorithms/sort/insertion-sort';
import BubbleSort from '../../../src/algorithms/sort/bubble-sort';
import MergeSort from '../../../src/algorithms/sort/merge-sort';
import QuickSort from '../../../src/algorithms/sort/quick-sort';
import Utils from '../../../src/utils';

/**
 * sortCheck
 */
function sortCheck(originalArray) {
    const result = {};

    // 快速排序
    result.QuickSort = {};
    result.QuickSort.beignTime = Date.now();
    QuickSort.sort(originalArray);
    result.QuickSort.endTime = Date.now();

    // 冒泡排序
    result.BubbleSort = {};
    result.BubbleSort.beignTime = Date.now();
    BubbleSort.sort(originalArray);
    result.BubbleSort.endTime = Date.now();

    // 插入排序
    result.InsertionSort = {};
    result.InsertionSort.beignTime = Date.now();
    InsertionSort.sort(originalArray);
    result.InsertionSort.endTime = Date.now();

    // 归并排序
    result.MergeSort = {};
    result.MergeSort.beignTime = Date.now();
    MergeSort.sort(originalArray);
    result.MergeSort.endTime = Date.now();

    // 选择排序
    result.SelectionSort = {};
    result.SelectionSort.beignTime = Date.now();
    SelectionSort.sort(originalArray);
    result.SelectionSort.endTime = Date.now();

    return result;
}

/**
 * 对冒牌、插入、排序算法性能测试
 */

test('性能测试', ()=> {
    // 随机生成长度为1000，值在[0, 10000]之间的数组
    const array = Array.from({length: 1000}, ()=> {
        return Utils.getRandomNum(0, 1050000);
    });

    const result = sortCheck(array);

    const BubbleSort1 = result.BubbleSort.endTime - result.BubbleSort.beignTime;
    const InsertionSort1 = result.InsertionSort.endTime - result.InsertionSort.beignTime;
    const SelectionSort1 = result.SelectionSort.endTime - result.SelectionSort.beignTime;
    const MergeSort1 = result.MergeSort.endTime - result.MergeSort.beignTime;
    const QuickSort1 = result.QuickSort.endTime - result.QuickSort.beignTime;

    const result2 = sortCheck(array);

    const BubbleSort2 = result2.BubbleSort.endTime - result2.BubbleSort.beignTime;
    const InsertionSort2 = result2.InsertionSort.endTime - result2.InsertionSort.beignTime;
    const SelectionSort2 = result2.SelectionSort.endTime - result2.SelectionSort.beignTime;
    const MergeSort2 = result2.MergeSort.endTime - result2.MergeSort.beignTime;
    const QuickSort2 = result2.QuickSort.endTime - result2.QuickSort.beignTime;

    // eslint-disable-next-line
    console.log(`针对长度为1000的数组,使用各算法耗时统计如下：
冒泡排序算法: 第一次：${BubbleSort1}ms 第二次：${BubbleSort2}ms 平均：${(BubbleSort1 + BubbleSort2) / 2}ms
插入排序算法: 第一次：${InsertionSort1}ms 第二次：${InsertionSort2}ms 平均：${(InsertionSort1 + InsertionSort2) / 2}ms
选择排序算法: 第一次：${SelectionSort1}ms 第二次：${SelectionSort2}ms 平均：${(SelectionSort1 + SelectionSort2) / 2}ms
归并排序算法: 第一次：${MergeSort1}ms 第二次：${MergeSort2}ms 平均：${(MergeSort1 + MergeSort2) / 2}ms
快速排序算法: 第一次：${QuickSort1}ms 第二次：${QuickSort2}ms 平均：${(QuickSort1 + QuickSort2) / 2}ms`);
});
