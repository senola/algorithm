import BubbleSort from '../../../../src/algorithms/sort/bubble-sort';

test('01、冒泡排序算法检测', ()=> {
    const arry1 = [];
    const arry2 = [1];
    const arry3 = [1, 2];
    const arry4 = [1, 2, 4];
    const arry5 = [1, 2, 4, 3];
    const arry6 = [7, 6, 1, 2, 4, 3];
    const arry7 = ['a', 7, 6, 1, 2, 4, 3];
    const arry8 = ['a', 'k', 'z', 'b'];

    expect(BubbleSort.sort(arry1)).toEqual([]);
    expect(BubbleSort.sort(arry2)).toEqual([1]);
    expect(BubbleSort.sort(arry3)).toEqual([1, 2]);
    expect(BubbleSort.sort(arry4)).toEqual([1, 2, 4]);
    expect(BubbleSort.sort(arry5)).toEqual([1, 2, 3, 4]);
    expect(BubbleSort.sort(arry6)).toEqual([1, 2, 3, 4, 6, 7]);
    expect(BubbleSort.sort(arry7)).toEqual(['a', 1, 2, 3, 4, 6, 7]);
    expect(BubbleSort.sort(arry8)).toEqual(['a', 'b', 'k', 'z']);
});
