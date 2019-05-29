import InsertionSort from '../../../../src/algorithms/sort/insertion-sort';

test('01、插入排序算法检测', ()=> {
    const arry1 = [];
    const arry2 = [1];
    const arry3 = [1, 2];
    const arry4 = [1, 2, 4];
    const arry5 = [1, 2, 4, 3];
    const arry6 = [7, 6, 1, 2, 4, 3];
    const arry7 = ['a', 7, 6, 1, 2, 4, 3];
    const arry8 = ['a', 'k', 'z', 'b'];

    expect(InsertionSort.sort(arry1)).toEqual([]);
    expect(InsertionSort.sort(arry2)).toEqual([1]);
    expect(InsertionSort.sort(arry3)).toEqual([1, 2]);
    expect(InsertionSort.sort(arry4)).toEqual([1, 2, 4]);
    expect(InsertionSort.sort(arry5)).toEqual([1, 2, 3, 4]);
    expect(InsertionSort.sort(arry6)).toEqual([1, 2, 3, 4, 6, 7]);
    expect(InsertionSort.sort(arry7)).toEqual(['a', 1, 2, 3, 4, 6, 7]);
    expect(InsertionSort.sort(arry8)).toEqual(['a', 'b', 'k', 'z']);
});
