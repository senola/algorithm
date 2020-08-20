import maximumGap from '../../../src/leetcode/sort/164-maximum-gap';

test('01、最大间距', ()=> {
    expect(maximumGap([1])).toEqual(0);
    expect(maximumGap([10])).toEqual(0);
    expect(maximumGap([1, 0])).toEqual(1);
    expect(maximumGap([0, 1])).toEqual(1);
    expect(maximumGap([3, 6, 9, 1])).toEqual(3);
});
