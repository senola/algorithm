import letterCombinations from '../../../src/leetcode/array/17-letter-combinations-phone-num';

test('01、电话号码的字母组合', ()=> {
    expect(letterCombinations('')).toEqual([]);
    expect(letterCombinations('1')).toEqual([]);
    expect(letterCombinations('2')).toEqual(['a', 'b', 'c']);
    expect(letterCombinations('23')).toEqual(['ad', 'ae', 'af', 'bd', 'be', 'bf', 'cd', 'ce', 'cf']);
    expect(letterCombinations('234')).toEqual([
        'adg', 'adh', 'adi',
        'aeg', 'aeh', 'aei',
        'afg', 'afh', 'afi',
        'bdg', 'bdh', 'bdi',
        'beg', 'beh', 'bei',
        'bfg', 'bfh', 'bfi',
        'cdg', 'cdh', 'cdi',
        'ceg', 'ceh', 'cei',
        'cfg', 'cfh', 'cfi'
    ]);
});
