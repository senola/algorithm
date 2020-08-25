import palindromeChecker from '../../../src/data-structures/queue/palindromeChecker';

test('01、回文字符串检测', ()=> {
    expect(palindromeChecker('aa1cc')).toEqual(false);
    expect(palindromeChecker('')).toEqual(false);
    expect(palindromeChecker('a')).toEqual(true);
    expect(palindromeChecker('aa')).toEqual(true);
    expect(palindromeChecker('a1a')).toEqual(true);
    expect(palindromeChecker('level')).toEqual(true);
    expect(palindromeChecker('Was it a car or a cat I saw')).toEqual(true);
    expect(palindromeChecker('Step on no pets')).toEqual(true);
});
