import MergeSort from '../../../../src/algorithms/sort/merge-sort';

test('01、归并排序算法检测', ()=> {
    const arry1 = [];
    const arry2 = [1];
    const arry3 = [1, 2];
    const arry4 = [1, 2, 4];
    const arry5 = [1, 2, 4, 3];
    const arry6 = [7, 6, 1, 2, 4, 3];
    const arry7 = ['a', 7, 6, 1, 2, 4, 3];
    const arry8 = ['a', 'k', 'z', 'b'];

    expect(MergeSort.sort(arry1)).toEqual([]);
    expect(MergeSort.sort(arry2)).toEqual([1]);
    expect(MergeSort.sort(arry3)).toEqual([1, 2]);
    expect(MergeSort.sort(arry4)).toEqual([1, 2, 4]);
    expect(MergeSort.sort(arry5)).toEqual([1, 2, 3, 4]);
    expect(MergeSort.sort(arry6)).toEqual([1, 2, 3, 4, 6, 7]);
    expect(MergeSort.sort(arry7)).toEqual(['a', 1, 2, 3, 4, 6, 7]);
    expect(MergeSort.sort(arry8)).toEqual(['a', 'b', 'k', 'z']);
});
