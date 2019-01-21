const DoublyLinkedList = require('../../../src/data-structures/doubly-linked-list/doublyLinkedList');

test('01、创建一个空双向链表', ()=> {
    const doublyLinkedList = new DoublyLinkedList();

    expect(doublyLinkedList.head).toEqual(null);
    expect(doublyLinkedList.tail).toEqual(null);
});

test('02、双向链表尾部添加节点', ()=> {
    const doublyLinkedList = new DoublyLinkedList();

    doublyLinkedList.append('1');
    expect(doublyLinkedList.head.value).toBe('1');
    expect(doublyLinkedList.head.next).toEqual(null);
    expect(doublyLinkedList.tail.value).toBe('1');
    expect(doublyLinkedList.tail.next).toBe(null);

    doublyLinkedList.append('2');

    expect(doublyLinkedList.head.value).toBe('1');
    expect(doublyLinkedList.head.next.value).toEqual('2');
    expect(doublyLinkedList.tail.value).toBe('2');
    expect(doublyLinkedList.tail.next).toBe(null);
    expect(doublyLinkedList.tail.prev.value).toBe('1');

    doublyLinkedList.append('3');
    doublyLinkedList.append('4');

    expect(doublyLinkedList.tail.value).toBe('4');
    expect(doublyLinkedList.tail.next).toEqual(null);
    expect(doublyLinkedList.tail.prev.value).toBe('3');
});

test('03、双向链表头部添加节点', ()=> {
    const doublyLinkedList = new DoublyLinkedList();

    doublyLinkedList.prepend('1');

    expect(doublyLinkedList.head.value).toBe('1');
    expect(doublyLinkedList.head.next).toEqual(null);
    expect(doublyLinkedList.head.prev).toEqual(null);
    expect(doublyLinkedList.tail.value).toEqual('1');
    expect(doublyLinkedList.tail.next).toEqual(null);
    expect(doublyLinkedList.tail.prev).toEqual(null);

    doublyLinkedList.prepend('2');

    expect(doublyLinkedList.head.value).toBe('2');
    expect(doublyLinkedList.head.next.value).toEqual('1');
    expect(doublyLinkedList.head.prev).toEqual(null);
    expect(doublyLinkedList.tail.value).toEqual('1');
    expect(doublyLinkedList.tail.next).toEqual(null);
    expect(doublyLinkedList.tail.prev.value).toEqual('2');

    doublyLinkedList.prepend('3');
    doublyLinkedList.prepend('4');

    expect(doublyLinkedList.head.value).toBe('4');
    expect(doublyLinkedList.head.next.value).toEqual('3');
    expect(doublyLinkedList.head.next.next.value).toEqual('2');
    expect(doublyLinkedList.head.prev).toEqual(null);
    expect(doublyLinkedList.tail.value).toEqual('1');
    expect(doublyLinkedList.tail.next).toEqual(null);
    expect(doublyLinkedList.tail.prev.value).toEqual('2');
});
