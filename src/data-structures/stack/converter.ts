import Stack from './index';

/**
 * 利用栈进行进制转换
 * @param {number} decNumber
 * @param {string} base
 */
function converter(decNumber: number, base: number) {
    const stack = new Stack();
    const digits = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    let number = decNumber, rem, baseString = '';

    if (number === 0) return '0';
    if (!(base >= 2 && base <= 36)) {
        return '';
    }

    // 要把十进制转化成N进制，我们可以将该十进制数除以N（二进制是满二进一）并对商取整，直到结果是0为止。
    while (number > 0) {
        rem = Math.floor(number % base); // js有精度问题，需要取整
        stack.push(rem);
        number = Math.floor(number / base);
    }
    // 出栈，获取进制值
    while (!stack.isEmpty()) {
        baseString += digits[stack.pop()];
    }

    return baseString;
}

export default converter;
