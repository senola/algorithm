import grayCode from '../../../src/leetcode/array/89-gray-code';

test('01、格雷编码', ()=> {
    expect(grayCode(0)).toEqual([0]);
    expect(grayCode(1)).toEqual([0, 1]);
    expect(grayCode(2)).toEqual([0, 1, 3, 2]);
    expect(grayCode(3)).toEqual([0, 1, 3, 2, 6, 7, 5, 4]);
    // eslint-disable-next-line
    expect(grayCode(6)).toEqual([0, 1, 3, 2, 6, 7, 5, 4, 12, 13, 15, 14, 10, 11, 9, 8, 24, 25, 27, 26, 30, 31, 29, 28, 20, 21, 23, 22, 18, 19, 17, 16, 48, 49, 51, 50, 54, 55, 53, 52, 60, 61, 63, 62, 58, 59, 57, 56, 40, 41, 43, 42, 46, 47, 45, 44, 36, 37, 39, 38, 34, 35, 33, 32]);
});