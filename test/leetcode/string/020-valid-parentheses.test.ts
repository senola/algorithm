import {isValid} from '../../../src/leetcode/string/020-valid-parentheses';

test('01、有效的括号：', ()=> {
    expect(isValid('{')).toBe(false);
    expect(isValid('{(')).toBe(false);
    expect(isValid('{([')).toBe(false);
    expect(isValid('{([]')).toBe(false);
    expect(isValid('{([])')).toBe(false);
    expect(isValid('{([])}')).toBe(true);
    expect(isValid('{([])}}')).toBe(false);
    expect(isValid('{([])}}]')).toBe(false);
});
