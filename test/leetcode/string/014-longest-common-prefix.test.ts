import {longestCommonPrefix1, longestCommonPrefix2} from '../../../src/leetcode/string/014-longest-common-prefix';

test('01、最长公共前缀。题解一：', ()=> {
    expect(longestCommonPrefix1(['flower', 'flow', 'flight'])).toBe('fl');
    expect(longestCommonPrefix1(['flower'])).toBe('flower');
    expect(longestCommonPrefix1(['a'])).toBe('a');
    expect(longestCommonPrefix1('a')).toBe('');
    expect(longestCommonPrefix1([])).toBe('');
    expect(longestCommonPrefix2(['', 'bb'])).toBe('');
    expect(longestCommonPrefix1(['flower', 'ffff', 'fffffffffffff', 'fasdasdsad'])).toBe('f');
});

test('02、最长公共前缀。题解二：', ()=> {
    expect(longestCommonPrefix2(['flower', 'flow', 'flight'])).toBe('fl');
    expect(longestCommonPrefix2(['flower'])).toBe('flower');
    expect(longestCommonPrefix2(['a'])).toBe('a');
    expect(longestCommonPrefix2('a')).toBe('a');
    expect(longestCommonPrefix2([])).toBe('');
    expect(longestCommonPrefix2(['', 'bb'])).toBe('');
    expect(longestCommonPrefix2(['flower', 'ffff', 'fffffffffffff', 'fasdasdsad'])).toBe('f');
});

