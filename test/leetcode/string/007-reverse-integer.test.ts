import {reverseInteger1, reverseInteger2} from '../../../src/leetcode/string/007-reverse-integer';

test('01、反转整数，题解一', ()=> {
    expect(reverseInteger1(0)).toEqual(0);
    expect(reverseInteger1(-1)).toEqual(-1);
    expect(reverseInteger1(120)).toEqual(21);
    expect(reverseInteger1(-120)).toEqual(-21);
    expect(reverseInteger1('-120')).toEqual(undefined);
    expect(reverseInteger1(2147483647)).toEqual(0);
});

test('02、反转整数，题解二', ()=> {
    expect(reverseInteger2(0)).toEqual(0);
    expect(reverseInteger2(-1)).toEqual(-1);
    expect(reverseInteger2(120)).toEqual(21);
    expect(reverseInteger2(-120)).toEqual(-21);
    expect(reverseInteger2('-120')).toEqual(undefined);
    expect(reverseInteger2(2147483647)).toEqual(0);
});
