import {fibonacci, fibonacciMemoization} from '../../../src/algorithms/recursion/fibonacci';

test('01、斐波那契数列', ()=> {
    expect(fibonacci(0)).toEqual(0);
    expect(fibonacci(1)).toEqual(1);
    expect(fibonacci(2)).toEqual(1);
    expect(fibonacci(3)).toEqual(2);
    expect(fibonacci(4)).toEqual(3);
    expect(fibonacci(5)).toEqual(5);
    expect(fibonacci(6)).toEqual(8);

    expect(fibonacciMemoization(0)).toEqual(0);
    expect(fibonacciMemoization(1)).toEqual(1);
    expect(fibonacciMemoization(2)).toEqual(1);
    expect(fibonacciMemoization(3)).toEqual(2);
    expect(fibonacciMemoization(4)).toEqual(3);
    expect(fibonacciMemoization(5)).toEqual(5);
    expect(fibonacciMemoization(6)).toEqual(8);
});
