import Utils from '../../src/utils';

test('01、Utils.getRandomNum 检测', ()=> {
    expect(Utils.getRandomNum()).toEqual(1);
    expect(Utils.getRandomNum(1)).toBeGreaterThanOrEqual(0);
    expect(Utils.getRandomNum(1)).toBeLessThanOrEqual(1);
    expect(Utils.getRandomNum(5)).toBeGreaterThanOrEqual(0);
    expect(Utils.getRandomNum(5)).toBeLessThanOrEqual(5);
    expect(Utils.getRandomNum(10, 50)).toBeLessThanOrEqual(50);
    expect(Utils.getRandomNum(10, 50)).toBeGreaterThanOrEqual(10);
});
