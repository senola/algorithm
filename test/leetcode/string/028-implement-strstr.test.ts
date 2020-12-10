import {strStr1} from '../../../src/leetcode/string/028-implement-strstr';

test('01、实现 strStr()：题解一：', ()=> {
    expect(strStr1('hello', '')).toEqual(0);
    expect(strStr1('hello', 'll')).toEqual(2);
    expect(strStr1('aaaaa', 'bba')).toEqual(-1);
    expect(strStr1('aaaaa', 'bbassssssssssss')).toEqual(-1);
    expect(strStr1('abc', 'c')).toEqual(2);
});
