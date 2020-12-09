import {isAnagram1, isAnagram2} from '../../../src/leetcode/string/242-valid-anagram';

test('01、有效的字母异位词：题解一：', ()=> {
    expect(isAnagram1(1, 1)).toBe(false);
    expect(isAnagram1('1', '1')).toBe(true);
    expect(isAnagram1('anagram', 'nagaram')).toBe(true);
    expect(isAnagram1('rat', 'car')).toBe(false);
});

test('02、有效的字母异位词：题解二：', ()=> {
    expect(isAnagram2(1, 1)).toBe(false);
    expect(isAnagram2('1', '1')).toBe(true);
    expect(isAnagram2('anagram', 'nagaram')).toBe(true);
    expect(isAnagram2('rat', 'car')).toBe(false);
});
