import Stack from '../../../src/data-structures/stack';

test('01、创建一个空栈', ()=> {
    const stack = new Stack();

    expect(stack.size).toEqual(0);
    expect(stack.isEmpty()).toEqual(true);
});

test('02、入栈操作：push()', ()=> {
    const stack = new Stack();

    stack.push('1');
    stack.push('2');
    stack.push('3');

    expect(stack.isEmpty()).toEqual(false);
    expect(stack.peek()).toEqual('3');
    expect(stack.size).toEqual(3);

    const a = {a: 1};

    stack.push(a);
    expect(stack.peek()).toEqual(a);
});

test('03、出栈操作：pop()', ()=> {
    const stack = new Stack();

    stack.push('1');
    stack.push('2');
    stack.push('3');
    const a = {a: 1};

    stack.push(a);


    expect(stack.pop()).toEqual(a);
    expect(stack.size).toEqual(3);
    expect(stack.peek()).toEqual('3');
    stack.pop();
    stack.pop();
    stack.pop();
    stack.pop();
    stack.pop();
    expect(stack.peek()).toEqual(null);
});
