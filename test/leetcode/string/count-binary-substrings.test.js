import {cbs1} from '../../../src/leetcode/string/count-binary-substrings';
import Utils from '../../../src/utils';

test('01、计数二进制', ()=> {
    expect(cbs1('00110011')).toEqual(6);
});

test('01、计数二进制性能测试', ()=> {

    // 随机生成长度为5000，值在[0, 1]之间的数组
    const binaryString = Array.from({length: 5000}, ()=> {
        return Utils.getRandomNum(0, 1);
    }).join('');

    const startTime = Date.now();

    cbs1(binaryString);

    const endTime = Date.now();

    console.log(`针对长度为5000的二进制字符串，共耗时${endTime - startTime}ms`);

});



