const DoublyLinkedList = require('../../../src/data-structures/doubly-linked-list');

test('01、创建一个空双向链表', ()=> {
    const doublyLinkedList = new DoublyLinkedList();

    expect(doublyLinkedList.head).toEqual(null);
    expect(doublyLinkedList.tail).toEqual(null);
});

test('02、双向链表尾部添加节点:append()', ()=> {
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

test('03、双向链表头部添加节点:prepend()', ()=> {
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

test('04、移除节点:remove()', ()=> {
    const doublyLinkedList = new DoublyLinkedList();

    const removedItme = {
        a: 1
    };

    expect(doublyLinkedList.remove(removedItme)).toEqual(null);
    expect(doublyLinkedList.remove('1')).toEqual(null);

    doublyLinkedList.append('1');
    doublyLinkedList.append(removedItme);

    expect(doublyLinkedList.remove('1').value).toEqual('1');
    expect(doublyLinkedList.head.value).toEqual(removedItme);
    expect(doublyLinkedList.head.next).toEqual(null);
    expect(doublyLinkedList.head.prev).toEqual(null);
    expect(doublyLinkedList.tail.value).toEqual(removedItme);
    expect(doublyLinkedList.tail.next).toEqual(null);
    expect(doublyLinkedList.tail.prev).toEqual(null);
    expect(doublyLinkedList.remove(removedItme).value).toEqual(removedItme);

    const doublyLinkedList2 = new DoublyLinkedList();

    doublyLinkedList2.append('1');
    doublyLinkedList2.append(removedItme);
    doublyLinkedList2.append('2');

    expect(doublyLinkedList2.remove(removedItme).value).toEqual(removedItme);
    expect(doublyLinkedList2.head.value).toEqual('1');
    expect(doublyLinkedList2.head.next.value).toEqual('2');
    expect(doublyLinkedList2.head.prev).toEqual(null);
    expect(doublyLinkedList2.tail.value).toEqual('2');
    expect(doublyLinkedList2.tail.next).toEqual(null);
    expect(doublyLinkedList2.tail.prev.value).toEqual('1');

    doublyLinkedList2.remove('1');
    doublyLinkedList2.remove('2');

    expect(doublyLinkedList.head).toEqual(null);
    expect(doublyLinkedList.tail).toEqual(null);

    const doublyLinkedList3 = new DoublyLinkedList();

    doublyLinkedList3.append('1');
    doublyLinkedList3.append('2');

    doublyLinkedList3.remove('2');
    expect(doublyLinkedList3.head.value).toEqual('1');
    expect(doublyLinkedList3.tail.value).toEqual('1');
});

test('05、查找节点:find()', ()=> {
    const doublyLinkedList = new DoublyLinkedList();

    const findItme = {
        a: 1
    };

    expect(doublyLinkedList.find(findItme)).toEqual(null);
    doublyLinkedList.append(findItme);
    doublyLinkedList.append('1');
    doublyLinkedList.append('3');
    doublyLinkedList.append(6);

    expect(doublyLinkedList.find(8)).toEqual(null);
    expect(doublyLinkedList.find(6).value).toEqual(6);
    expect(doublyLinkedList.find('1').value).toEqual('1');
    expect(doublyLinkedList.find(findItme).value.a).toEqual(1);
});

test('06、删除头节点:deleteHead()', ()=> {
    const doublyLinkedList = new DoublyLinkedList();

    // 没有节点情况
    doublyLinkedList.deleteHead();
    expect(doublyLinkedList.head).toEqual(null);

    // 只有一个节点情况
    doublyLinkedList.append(1);
    doublyLinkedList.deleteHead();
    expect(doublyLinkedList.head).toEqual(null);
    expect(doublyLinkedList.tail).toEqual(null);

    // 有多个节点情况
    doublyLinkedList.append(1);
    doublyLinkedList.append(2);
    doublyLinkedList.append(3);
    doublyLinkedList.append(4);

    expect(doublyLinkedList.head.value).toEqual(1);

    // 删除头节点
    doublyLinkedList.deleteHead();
    expect(doublyLinkedList.head.value).toEqual(2);
    expect(doublyLinkedList.head.prev).toEqual(null);
    expect(doublyLinkedList.tail.value).toEqual(4);
    expect(doublyLinkedList.tail.next).toEqual(null);

    // 删除头节点
    doublyLinkedList.deleteHead();
    expect(doublyLinkedList.head.value).toEqual(3);
    expect(doublyLinkedList.head.prev).toEqual(null);
    expect(doublyLinkedList.tail.value).toEqual(4);
    expect(doublyLinkedList.tail.next).toEqual(null);

    doublyLinkedList.deleteHead();
    doublyLinkedList.deleteHead();

    expect(doublyLinkedList.head).toEqual(null);
    expect(doublyLinkedList.tail).toEqual(null);
});


test('07、删除尾节点:deleteTail()', ()=> {
    const doublyLinkedList = new DoublyLinkedList();

    // 没有节点情况
    doublyLinkedList.deleteTail();
    expect(doublyLinkedList.tail).toEqual(null);

    // 只有一个节点情况
    doublyLinkedList.append(1);
    doublyLinkedList.deleteTail();
    expect(doublyLinkedList.head).toEqual(null);
    expect(doublyLinkedList.tail).toEqual(null);

    // 有多个节点情况
    doublyLinkedList.append(1);
    doublyLinkedList.append(2);
    doublyLinkedList.append(3);
    doublyLinkedList.append(4);

    expect(doublyLinkedList.tail.value).toEqual(4);

    // 删除头节点
    doublyLinkedList.deleteTail();
    expect(doublyLinkedList.head.value).toEqual(1);
    expect(doublyLinkedList.head.prev).toEqual(null);
    expect(doublyLinkedList.tail.value).toEqual(3);
    expect(doublyLinkedList.tail.next).toEqual(null);

    // 删除头节点
    doublyLinkedList.deleteTail();
    expect(doublyLinkedList.head.value).toEqual(1);
    expect(doublyLinkedList.head.prev).toEqual(null);
    expect(doublyLinkedList.tail.value).toEqual(2);
    expect(doublyLinkedList.tail.next).toEqual(null);

    doublyLinkedList.deleteTail();
    doublyLinkedList.deleteTail();

    expect(doublyLinkedList.head).toEqual(null);
    expect(doublyLinkedList.tail).toEqual(null);
});

test('08、toArray()', ()=> {
    const doublyLinkedList = new DoublyLinkedList();

    doublyLinkedList.append('1');
    doublyLinkedList.append('2');

    const _array = doublyLinkedList.toArray();

    expect(_array.length).toBe(2);
    expect(_array).toContain('1');
    expect(_array).toContain('2');
});

test('09、toString()', ()=> {
    const doublyLinkedList = new DoublyLinkedList();

    doublyLinkedList.append('1');
    doublyLinkedList.append('2');
    doublyLinkedList.append('3');

    const _str = doublyLinkedList.toString();

    expect(_str).toMatch('1,2,3');
});
