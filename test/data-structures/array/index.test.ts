import '../../../src/data-structures/array/index';

test('01、在数据开头插入元素', ()=> {
    const arry = [1, 2, 3, 4, 5];

    expect(arry.insertFirstPosition(0)).toEqual([0, 1, 2, 3, 4, 5]);
});

test('02、从数组开头删除元素', ()=> {
    const arry = [1, 2, 3, 4, 5];

    expect(arry.removeFirstPosition()).toEqual([2, 3, 4, 5]);
});
