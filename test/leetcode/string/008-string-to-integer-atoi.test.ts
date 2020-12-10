import {atoi1, atoi2, atoi3} from '../../../src/leetcode/string/008-string-to-integer-atoi';

test('01、字符串转换整数，题解一：', ()=> {
    expect(atoi1(1)).toEqual(0);
    expect(atoi1('')).toEqual(0);
    expect(atoi1('-')).toEqual(0);
    expect(atoi1('+')).toEqual(0);
    expect(atoi1('+1')).toEqual(1);
    expect(atoi1('-1')).toEqual(-1);
    expect(atoi1('42')).toEqual(42);
    expect(atoi1('   -42')).toEqual(-42);
    expect(atoi1('4193 with words')).toEqual(4193);
    expect(atoi1('words and 987')).toEqual(0);
    expect(atoi1('-91283472332')).toEqual(-2147483648);
    expect(atoi1('91283472332')).toEqual(2147483647);
});

test('02、字符串转换整数，题解二：', ()=> {
    expect(atoi2(1)).toEqual(0);
    expect(atoi2('')).toEqual(0);
    expect(atoi2('-')).toEqual(0);
    expect(atoi2('+')).toEqual(0);
    expect(atoi2('+1')).toEqual(1);
    expect(atoi2('-1')).toEqual(-1);
    expect(atoi2('42')).toEqual(42);
    expect(atoi2('   -42')).toEqual(-42);
    expect(atoi2('4193 with words')).toEqual(4193);
    expect(atoi2('words and 987')).toEqual(0);
    expect(atoi2('-91283472332')).toEqual(-2147483648);
    expect(atoi2('91283472332')).toEqual(2147483647);
});

test('03、字符串转换整数，题解三：', ()=> {
    expect(atoi3(1)).toEqual(0);
    expect(atoi3('')).toEqual(0);
    expect(atoi3('-')).toEqual(0);
    expect(atoi3('+')).toEqual(0);
    expect(atoi3('+1')).toEqual(1);
    expect(atoi3('-1')).toEqual(-1);
    expect(atoi3('42')).toEqual(42);
    expect(atoi3('   -42')).toEqual(-42);
    expect(atoi3('4193 with words')).toEqual(4193);
    expect(atoi3('words and 987')).toEqual(0);
    expect(atoi3('-91283472332')).toEqual(-2147483648);
    expect(atoi3('91283472332')).toEqual(2147483647);
});
