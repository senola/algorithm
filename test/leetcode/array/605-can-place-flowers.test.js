import canPlaceFlowers from '../../../src/leetcode/array/605-can-place-flowers';

test('01、电话号码的字母组合', ()=> {
    expect(canPlaceFlowers([0], 1)).toEqual(true);
    expect(canPlaceFlowers([1], 0)).toEqual(true);
    expect(canPlaceFlowers([1, 1], 0)).toEqual(true);
    expect(canPlaceFlowers([0, 0], 1)).toEqual(true);
    expect(canPlaceFlowers([0, 0], 2)).toEqual(false);
    expect(canPlaceFlowers([0, 0, 1, 1, 0, 1, 0, 0], 2)).toEqual(true);
    expect(canPlaceFlowers([0, 0, 1, 1, 0, 1, 0, 0], 3)).toEqual(false);
    expect(canPlaceFlowers([1, 0, 1, 1, 1, 0, 0, 0, 0], 3)).toEqual(false);
    expect(canPlaceFlowers([1, 0, 1, 1, 1, 0, 0, 0, 0], 2)).toEqual(true);

});
