/**
 * 使用双队列检查字符串是否是回文字符串
 * 回文字符串最简单的方法是将字符串符串反向排列并检查它和原字符串是否相同
 */
import Queue from './deque';

/**
 * @param {*} str
 */
function palindromeChecker(str) {
    if (!str) {
        return false;
    }

    const queue = new Queue();
    const lowerString = str.toLocaleLowerCase().split(' ').join('');

    let isEqual = true, firstChar, lastChar;

    for (let i = 0; i < lowerString.length; i++) {
        queue.addBack(lowerString.charAt(i));
    }
    while (queue.size() > 1 && isEqual) {
        firstChar = queue.removeFront();
        lastChar = queue.removeBack();

        if (firstChar !== lastChar) {
            isEqual = false;
        }
    }

    return isEqual;
}

export default palindromeChecker;

