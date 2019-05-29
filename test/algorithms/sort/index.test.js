import SelectionSort from '../../../src/algorithms/sort/selection-sort';
import InsertionSort from '../../../src/algorithms/sort/insertion-sort';
import BubbleSort from '../../../src/algorithms/sort/bubble-sort';
import Utils from '../../../src/utils';

/**
 * sortCheck
 */
function sortCheck(originalArray) {
    const result = {};

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
    const array = Array.from({length: 100}, ()=> {
        return Utils.getRandomNum(0, 105000);
    });

    const result = sortCheck(array);

    const BubbleSort1 = result.BubbleSort.endTime - result.BubbleSort.beignTime;
    const InsertionSort1 = result.InsertionSort.endTime - result.InsertionSort.beignTime;
    const SelectionSort1 = result.SelectionSort.endTime - result.SelectionSort.beignTime;

    const result2 = sortCheck(array);

    const BubbleSort2 = result2.BubbleSort.endTime - result2.BubbleSort.beignTime;
    const InsertionSort2 = result2.InsertionSort.endTime - result2.InsertionSort.beignTime;
    const SelectionSort2 = result2.SelectionSort.endTime - result2.SelectionSort.beignTime;

    // eslint-disable-next-line
    console.log(`针对长度为100的数组,使用各算法耗时统计如下：
冒泡排序算法: ${(BubbleSort1 + BubbleSort2) / 2}ms
插入排序算法: ${(InsertionSort1 + InsertionSort2) / 2}ms
选择排序算法: ${(SelectionSort1 + SelectionSort2) / 2}ms`);
});
