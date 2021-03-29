import Utils from '../../src/utils';

test('01、Utils.getRandomNum() 检测', ()=> {
    expect(Utils.getRandomNum()).toEqual(1);
    expect(Utils.getRandomNum(1)).toBeGreaterThanOrEqual(0);
    expect(Utils.getRandomNum(1)).toBeLessThanOrEqual(1);
    expect(Utils.getRandomNum(5)).toBeGreaterThanOrEqual(0);
    expect(Utils.getRandomNum(5)).toBeLessThanOrEqual(5);
    expect(Utils.getRandomNum(10, 50)).toBeLessThanOrEqual(50);
    expect(Utils.getRandomNum(10, 50)).toBeGreaterThanOrEqual(10);

    // @ts-ignore
    expect(Utils.getRandomNum(10, 50, 33)).toBeGreaterThanOrEqual(1);
});

test('02、Utils.defaultCompare() 检测', ()=> {
    expect(Utils.defaultCompare(1, 2)).toEqual(-1);
    expect(Utils.defaultCompare(1, 1)).toEqual(0);
    expect(Utils.defaultCompare('1', '1')).toEqual(0);
    expect(Utils.defaultCompare('2', '1')).toEqual(1);
});

test('02、Utils.defaultToString() 检测', ()=> {
    expect(Utils.defaultToString('')).toEqual('');
    expect(Utils.defaultToString(null)).toEqual('NULL');
    expect(Utils.defaultToString(undefined)).toEqual('UNDEFINED');
    expect(Utils.defaultToString(213123123)).toEqual('213123123');
});

