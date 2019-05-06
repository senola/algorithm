import Queue from '../../../src/data-structures/queue';

test('01、创建一个空队列', ()=> {
    const queue = new Queue();

    expect(queue.isEmpty()).toEqual(true);
});

test('02、入队操作：enqueue()', ()=> {
    const queue = new Queue();

    queue.enqueue('1');
    expect(queue.isEmpty()).toEqual(false);

    queue.enqueue('1');
    queue.enqueue('21');
    queue.enqueue('14');
    queue.enqueue('16');

    expect(queue.peek()).toEqual('1');
});

test('03、出队操作：dequeue()', ()=> {
    const queue = new Queue();

    expect(queue.dequeue()).toEqual(null);
    expect(queue.peek()).toEqual(null);

    queue.enqueue('1');
    queue.enqueue('21');
    queue.enqueue('14');

    expect(queue.dequeue()).toEqual('1');
    expect(queue.dequeue()).toEqual('21');
    expect(queue.dequeue()).toEqual('14');
    expect(queue.dequeue()).toEqual(null);
});

test('04、toArray()', ()=> {
    const queue = new Queue();

    queue.enqueue('1');
    queue.enqueue('21');
    queue.enqueue('14');

    const _array = queue.toArray();

    expect(_array.length).toBe(3);
    expect(_array[0].value).toEqual('1');
    expect(_array[1].value).toEqual('21');
});
