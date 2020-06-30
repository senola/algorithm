/**
 * 卡牌分组
 * https://leetcode-cn.com/problems/x-of-a-kind-in-a-deck-of-cards/
 * @param {Array} deck
 */
/**
 * 解法一
 * @param {*} deck
 */
function cardGroup(deck) {
    if (deck.length < 2) return false;

    const deckObj = {};

    // step1 计算每个数字对应的个数
    deck.forEach(item=> {
        // eslint-disable-next-line
        deckObj[item] = deckObj[item] ? deckObj[item] + 1 : 1;
    });

    // 获取每种牌对应的总数，如[1, 1, 1, 1, 2, 2, 2, 2, 3, 3] -> [4, 4, 3]
    // for (const val of Object.values(deckObj)) {
    //     group.push(val);
    // }
    const group = [...Object.values(deckObj)];

    // 求两个数的最大公约数
    const gcd = (a, b)=> {
        if (b === 0) {
            return a;
        } else {
            return gcd(b, a % b);
        }
    };

    // while (group.length > 1) {
    //     const first = group.shift();
    //     const second = group.shift();
    //     const tmp = gcd(first, second);

    //     if (tmp === 1) {
    //         return false;
    //     } else {
    //         group.unshift(tmp);
    //     }
    // }
    // return group.length ? group[0] > 1 : false;
    let tmp = group[0];

    return group.every(i=> {
        return (tmp = gcd(tmp, i)) > 1;
    });
}
export default cardGroup;
