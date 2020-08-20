import repeatedSubstringPattern from '../../../src/leetcode/regex/459-repeated-substring-pattern';

test('01、重复的子字符串', ()=> {
    expect(repeatedSubstringPattern('abcabc')).toEqual(true);
    expect(repeatedSubstringPattern('ab')).toEqual(false);
    expect(repeatedSubstringPattern('aba')).toEqual(false);
    expect(repeatedSubstringPattern('a')).toEqual(false);
});



