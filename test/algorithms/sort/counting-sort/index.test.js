import CountingSort from '../../../../src/algorithms/sort/counting-sort';

test('01、插入排序算法检测', ()=> {
    const arry1 = [];
    const arry2 = [1];
    const arry3 = [1, 2];
    const arry4 = [1, 2, 4];
    const arry5 = [1, 2, 4, 3];
    const arry6 = [7, 6, 1, 2, 4, 3];
    const arry7 = [7, 6, 1, 2, 4, 3, 3, 4, 5, 12];

    expect(CountingSort.sort(arry1)).toEqual([]);
    expect(CountingSort.sort(arry2)).toEqual([1]);
    expect(CountingSort.sort(arry3)).toEqual([1, 2]);
    expect(CountingSort.sort(arry4)).toEqual([1, 2, 4]);
    expect(CountingSort.sort(arry5)).toEqual([1, 2, 3, 4]);
    expect(CountingSort.sort(arry6)).toEqual([1, 2, 3, 4, 6, 7]);
    expect(CountingSort.sort(arry7)).toEqual([1, 2, 3, 3, 4, 4, 5, 6, 7, 12]);
});
