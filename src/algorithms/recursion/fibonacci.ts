/**
 * 斐波那契数列是一个由0、1、1、2、3、5、8、13、21、34等数组成的序列。数2由1 + 1得到，数3由1 + 2得到，数5由2 + 3得到，以此类* * 推。斐波那契数列的定义如下。
 * 1、位置0的斐波那契数是零
 * 2、1和2的斐波那契数是1
 * 3、n（此处n>2）的斐波那契数是（n-1）的斐波那契数加上（n-2）的斐波那契数
 */
export function fibonacci(n: number): number {
    if (n === 0) return 0;
    if (n === 1 || n === 2) return 1;

    return fibonacci(n - 1) + fibonacci(n - 2);
}

/**
 * 记忆化斐波那契数
 * @param n
 */
export function fibonacciMemoization(n: number): number {
    const memo = [0, 1];

    /**
     * 斐波那契数
     * @param n
     */
    function _fibonacci(n: number): number {
        if (memo[n] !== undefined) {
            return memo[n];
        }

        return memo[n] = _fibonacci(n - 1) + _fibonacci(n - 2);
    }

    return _fibonacci(n);
}
