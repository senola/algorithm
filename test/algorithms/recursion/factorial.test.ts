import factorial from '../../../src/algorithms/recursion/factorial';

test('01、计算一个数的阶乘', ()=> {
    expect(factorial(0)).toEqual(1);
    expect(factorial(1)).toEqual(1);
    expect(factorial(2)).toEqual(2);
    expect(factorial(3)).toEqual(6);
    expect(factorial(5)).toEqual(120);
    expect(factorial(10)).toEqual(3628800);
});
