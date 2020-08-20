import cardGroup from '../../../src/leetcode/array/914-card-groups';

test('01、卡牌分组', ()=> {
    expect(cardGroup([])).toEqual(false);
    expect(cardGroup([1, 2, 3, 4, 4, 3, 2, 1])).toEqual(true);
    expect(cardGroup([1, 1, 2, 2, 2, 2])).toEqual(true);
    expect(cardGroup([1, 1, 1, 1, 2, 2, 2, 2, 2, 2])).toEqual(true);
    expect(cardGroup([1, 1, 1, 2, 2, 2, 3, 3])).toEqual(false);
    expect(cardGroup([1, 1])).toEqual(true);
});
