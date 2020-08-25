import Queue from '../../../src/data-structures/queue/deque';

test('01、创建一个空队列', ()=> {
    const queue = new Queue();

    expect(queue.isEmpty()).toEqual(true);
    expect(queue.size()).toEqual(0);
    expect(queue.isEmpty()).toEqual(true);

    queue.addFront(1);
    expect(queue.size()).toEqual(1);

    const queue2 = new Queue();

    queue2.addBack(1);
    expect(queue.size()).toEqual(1);
    expect(queue.isEmpty()).toEqual(false);

});

test('02、在双端队列前端添加新的元素', ()=> {
    const queue = new Queue();

    queue.addFront(1);
    queue.addFront(2);

    expect(queue.isEmpty()).toEqual(false);
    expect(queue.size()).toEqual(2);
    expect(queue.peekFront()).toEqual(2);
});

test('03、在双端队列后端端添加新的元素', ()=> {
    const queue = new Queue();

    queue.addFront(1);
    queue.addBack(2);
    queue.addBack(3);

    expect(queue.isEmpty()).toEqual(false);
    expect(queue.size()).toEqual(3);
    expect(queue.peekFront()).toEqual(1);
    expect(queue.peekBack()).toEqual(3);
});

test('04、移除元素', ()=> {
    const queue = new Queue();

    queue.addFront(1);
    queue.addFront(2);
    queue.addFront(3);
    queue.addFront(4);
    expect(queue.removeFront()).toEqual(4);
    expect(queue.removeFront()).toEqual(3);

    queue.addBack(5);
    queue.addBack(6);
    queue.addBack(7);

    expect(queue.removeBack()).toEqual(7);
    expect(queue.removeBack()).toEqual(6);
});

test('05、清空队列', ()=> {
    const queue = new Queue();

    queue.addFront(1);
    queue.addFront(2);
    queue.addFront(3);
    queue.addFront(4);

    queue.clear();

    expect(queue.size()).toEqual(0);
    expect(queue.isEmpty()).toEqual(true);
    expect(queue.removeBack()).toEqual(undefined);
    expect(queue.removeFront()).toEqual(undefined);
});
