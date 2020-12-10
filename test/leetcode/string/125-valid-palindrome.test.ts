import {isPalindrome1, isPalindrome2} from '../../../src/leetcode/string/125-valid-palindrome';

test('01、验证回文串, 题解一：', ()=> {
    expect(isPalindrome1('')).toEqual(true);
    expect(isPalindrome1(' ')).toEqual(true);
    expect(isPalindrome1('.')).toEqual(true);
    expect(isPalindrome1('.,,,')).toEqual(true);
    expect(isPalindrome1('1')).toEqual(true);
    expect(isPalindrome1(',')).toEqual(true);
    expect(isPalindrome1('A man, a plan, a canal: Panama')).toEqual(true);
    expect(isPalindrome1('race a car')).toEqual(false);
});

test('02、验证回文串, 题解二：', ()=> {
    expect(isPalindrome2('')).toEqual(true);
    expect(isPalindrome2(' ')).toEqual(true);
    expect(isPalindrome2('.')).toEqual(true);
    expect(isPalindrome2('.,,,')).toEqual(true);
    expect(isPalindrome2('1')).toEqual(true);
    expect(isPalindrome2(',')).toEqual(true);
    expect(isPalindrome2('A man, a plan, a canal: Panama')).toEqual(true);
    expect(isPalindrome2('race a car')).toEqual(false);
});
