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
    const result: any = {};

    // 快速排序
    result.QuickSort = {};
    result.QuickSort.beignTime = performance.now();
    QuickSort.sort(originalArray);
    result.QuickSort.endTime = performance.now();

    // 冒泡排序
    result.BubbleSort = {};
    result.BubbleSort.beignTime = performance.now();
    BubbleSort.sort(originalArray);
    result.BubbleSort.endTime = performance.now();

    // 插入排序
    result.InsertionSort = {};
    result.InsertionSort.beignTime = performance.now();
    InsertionSort.sort(originalArray);
    result.InsertionSort.endTime = performance.now();

    // 归并排序
    result.MergeSort = {};
    result.MergeSort.beignTime = performance.now();
    MergeSort.sort(originalArray);
    result.MergeSort.endTime = performance.now();

    // 选择排序
    result.SelectionSort = {};
    result.SelectionSort.beignTime = performance.now();
    SelectionSort.sort(originalArray);
    result.SelectionSort.endTime = performance.now();

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

    const BubbleSort1 = Number((result.BubbleSort.endTime - result.BubbleSort.beignTime).toFixed(2));
    const InsertionSort1 = Number((result.InsertionSort.endTime - result.InsertionSort.beignTime).toFixed(2));
    const SelectionSort1 = Number((result.SelectionSort.endTime - result.SelectionSort.beignTime).toFixed(2));
    const MergeSort1 = Number((result.MergeSort.endTime - result.MergeSort.beignTime).toFixed(2));
    const QuickSort1 = Number((result.QuickSort.endTime - result.QuickSort.beignTime).toFixed(2));

    const result2 = sortCheck(array);

    const BubbleSort2 = Number((result2.BubbleSort.endTime - result2.BubbleSort.beignTime).toFixed(2));
    const InsertionSort2 = Number((result2.InsertionSort.endTime - result2.InsertionSort.beignTime).toFixed(2));
    const SelectionSort2 = Number((result2.SelectionSort.endTime - result2.SelectionSort.beignTime).toFixed(2));
    const MergeSort2 = Number((result2.MergeSort.endTime - result2.MergeSort.beignTime).toFixed(2));
    const QuickSort2 = Number((result2.QuickSort.endTime - result2.QuickSort.beignTime).toFixed(2));

    // eslint-disable-next-line
    console.log(`针对长度为1000的数组,使用各算法耗时统计如下：
冒泡排序算法: 第一次：${BubbleSort1}ms 第二次：${BubbleSort2}ms 平均：${((BubbleSort1 + BubbleSort2) / 2).toFixed(2)}ms
插入排序算法: 第一次：${InsertionSort1}ms 第二次：${InsertionSort2}ms 平均：${((InsertionSort1 + InsertionSort2) / 2).toFixed(2)}ms
选择排序算法: 第一次：${SelectionSort1}ms 第二次：${SelectionSort2}ms 平均：${((SelectionSort1 + SelectionSort2) / 2).toFixed(2)}ms
归并排序算法: 第一次：${MergeSort1}ms 第二次：${MergeSort2}ms 平均：${((MergeSort1 + MergeSort2) / 2).toFixed(2)}ms
快速排序算法: 第一次：${QuickSort1}ms 第二次：${QuickSort2}ms 平均：${((QuickSort1 + QuickSort2) / 2).toFixed(2)}ms`);
});
