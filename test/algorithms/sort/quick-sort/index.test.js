import QuickSort from '../../../../src/algorithms/sort/quick-sort';

test('01、归并排序算法检测', ()=> {
    const arry1 = [];
    const arry2 = [1];
    const arry3 = [1, 2];
    const arry4 = [1, 2, 4];
    const arry5 = [1, 2, 4, 3];
    const arry6 = [7, 6, 1, 2, 4, 3];
    const arry7 = [1, 7, 6, 1, 2, 4, 3];
    const arry8 = ['a', 'k', 'z', 'b'];

    expect(QuickSort.sort(arry1)).toEqual([]);
    expect(QuickSort.sort(arry2)).toEqual([1]);
    expect(QuickSort.sort(arry3)).toEqual([1, 2]);
    expect(QuickSort.sort(arry4)).toEqual([1, 2, 4]);
    expect(QuickSort.sort(arry5)).toEqual([1, 2, 3, 4]);
    expect(QuickSort.sort(arry6)).toEqual([1, 2, 3, 4, 6, 7]);
    expect(QuickSort.sort(arry7)).toEqual([1, 1, 2, 3, 4, 6, 7]);
    expect(QuickSort.sort(arry8)).toEqual(['a', 'b', 'k', 'z']);
});
