import SelectionSort from '../../../../src/algorithms/sort/selection-sort';

test('01、选择排序算法检测', ()=> {
    const arry1 = [];
    const arry2 = [1];
    const arry3 = [1, 2];
    const arry4 = [1, 2, 4];
    const arry5 = [1, 2, 4, 3, 3];
    const arry6 = [7, 6, 1, 2, 4, 3];
    const arry7 = ['a', 7, 6, 1, 2, 4, 3];
    const arry8 = ['a', 'k', 'z', 'b'];

    expect(SelectionSort.sort(arry1)).toEqual([]);
    expect(SelectionSort.sort(arry2)).toEqual([1]);
    expect(SelectionSort.sort(arry3)).toEqual([1, 2]);
    expect(SelectionSort.sort(arry4)).toEqual([1, 2, 4]);
    expect(SelectionSort.sort(arry5)).toEqual([1, 2, 3, 3, 4]);
    expect(SelectionSort.sort(arry6)).toEqual([1, 2, 3, 4, 6, 7]);
    expect(SelectionSort.sort(arry7)).toEqual(['a', 1, 2, 3, 4, 6, 7]);
    expect(SelectionSort.sort(arry8)).toEqual(['a', 'b', 'k', 'z']);
});
