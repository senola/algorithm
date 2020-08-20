import {countBinarySubstrings1, countBinarySubstrings2, countBinarySubstrings3} from '../../../src/leetcode/string/count-binary-substrings';
import Utils from '../../../src/utils';

test('01、计数二进制', ()=> {
    expect(countBinarySubstrings1('00110011')).toEqual(6);
    expect(countBinarySubstrings2('00110011')).toEqual(6);
    expect(countBinarySubstrings3('00110011')).toEqual(6);
    expect(countBinarySubstrings1('00110')).toEqual(3);
    expect(countBinarySubstrings2('00110')).toEqual(3);
    expect(countBinarySubstrings3('00110')).toEqual(3);
});

test('02、计数二进制性能测试', ()=> {

    // 随机生成长度为10000，值在[0, 1]之间的数组
    const binaryString = Array.from({length: 10000}, ()=> {
        return Utils.getRandomNum(0, 1);
    }).join('');

    const perf: any = {};

    perf.cbs1 = {};
    perf.cbs2 = {};
    perf.cbs3 = {};

    perf.cbs1.startTime = Date.now();
    countBinarySubstrings1(binaryString);
    perf.cbs1.endTime = Date.now();

    perf.cbs2.startTime = Date.now();
    countBinarySubstrings2(binaryString);
    perf.cbs2.endTime = Date.now();

    perf.cbs3.startTime = Date.now();
    countBinarySubstrings2(binaryString);
    perf.cbs3.endTime = Date.now();

    // eslint-disable-next-line
    console.log(`针对长度为10000的二进制字符串，
方案一：共耗时${perf.cbs1.endTime - perf.cbs1.startTime}ms
方案二：共耗时${perf.cbs2.endTime - perf.cbs2.startTime}ms
方案三：共耗时${perf.cbs3.endTime - perf.cbs3.startTime}ms`);
});



