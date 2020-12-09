import reverseString from '../../../src/leetcode/string/557-reverse-string';

test('01、反转字符串中的单词', ()=> {
    expect(reverseString('')).toEqual('');
    expect(reverseString('Let\'s take LeetCode contest')).toEqual('s\'teL ekat edoCteeL tsetnoc');
});

