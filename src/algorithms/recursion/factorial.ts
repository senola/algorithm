/**
 * 计算一个数的阶乘
 */
function factorial(n: number):number {
    if (n === 0 || n === 1) {
        return 1;
    }

    return n * factorial(n - 1);
}

export default factorial;
