const SimpleLinkedList = require('../../../src/data-structures/simple-linked-list');

test('01、创建一个空链表', ()=> {
    const linkedList = new SimpleLinkedList();

    expect(linkedList.head).toEqual(null);
    expect(linkedList.tail).toEqual(null);
});

test('02、创建一个包含一个节点的链表', ()=> {
    const linkedList = new SimpleLinkedList();

    linkedList.append('1');

    expect(linkedList.head.value).toEqual('1');
    expect(linkedList.head.next).toEqual(null);
    expect(linkedList.tail.value).toEqual('1');
    expect(linkedList.tail.next).toEqual(null);
});

test('03、创建一个包含多个节点的链表', ()=> {
    const linkedList = new SimpleLinkedList();

    linkedList.append('1');
    linkedList.append('2');
    linkedList.append('3');

    expect(linkedList.head.value).toEqual('1');
    expect(linkedList.head.next.value).toEqual('2');
    expect(linkedList.head.next.next.value).toEqual('3');

    expect(linkedList.tail.value).toEqual('3');
    expect(linkedList.tail.next).toEqual(null);
});

test('04、删除包含一个节点的链表的头节点:deleteHead()', ()=> {
    const linkedList = new SimpleLinkedList();

    linkedList.deleteHead();
    expect(linkedList.head).toEqual(null);
    expect(linkedList.tail).toEqual(null);

    linkedList.append('1');

    const deletedNode = linkedList.deleteHead();

    expect(linkedList.head).toEqual(null);
    expect(linkedList.tail).toEqual(null);
    expect(deletedNode.value).toEqual('1');
});

test('05、删除包含多个节点的链表的头节点:deleteHead()', ()=> {
    const linkedList = new SimpleLinkedList();

    linkedList.append('1');
    linkedList.append('2');
    linkedList.append('3');

    const deletedNode = linkedList.deleteHead();

    expect(linkedList.head.value).toEqual('2');
    expect(linkedList.head.next.value).toEqual('3');

    expect(linkedList.tail.value).toEqual('3');
    expect(deletedNode.value).toEqual('1');
});
test('06、删除空链表的尾节点:deleteTail()', ()=> {
    const linkedList = new SimpleLinkedList();

    const deletedNode = linkedList.deleteTail();

    expect(linkedList.head).toEqual(null);
    expect(linkedList.tail).toEqual(null);
    expect(deletedNode).toEqual(null);
});

test('07、删除包含一个节点的链表的尾节点:deleteTail()', ()=> {
    const linkedList = new SimpleLinkedList();

    linkedList.append('1');

    const deletedNode = linkedList.deleteTail();

    expect(linkedList.head).toEqual(null);
    expect(linkedList.tail).toEqual(null);
    expect(deletedNode.value).toEqual('1');
});

test('08、删除包含两个节点的链表的尾节点:deleteTail()', ()=> {
    const linkedList = new SimpleLinkedList();

    linkedList.append('1');
    linkedList.append('2');

    const deletedNode = linkedList.deleteTail();

    expect(linkedList.head.value).toEqual('1');
    expect(linkedList.head.next).toEqual(null);
    expect(linkedList.tail.value).toEqual('1');
    expect(linkedList.tail.next).toEqual(null);
    expect(deletedNode.value).toEqual('2');
});

test('09、删除包含多个节点的链表的尾节点:deleteTail()', ()=> {
    const linkedList = new SimpleLinkedList();

    linkedList.append('1');
    linkedList.append('2');
    linkedList.append('4');
    linkedList.append('7');
    linkedList.append('9');

    const deletedNode = linkedList.deleteTail();

    expect(linkedList.head.value).toEqual('1');
    expect(linkedList.head.next.value).toEqual('2');
    expect(linkedList.tail.value).toEqual('7');
    expect(linkedList.tail.next).toEqual(null);
    expect(deletedNode.value).toEqual('9');
});

test('10、查找某个节点信息:find()', ()=> {
    const linkedList = new SimpleLinkedList();

    expect(linkedList.find('4')).toEqual(null);

    linkedList.append('1');
    linkedList.append('2');
    linkedList.append('4');
    linkedList.append('7');
    linkedList.append('9');

    const findedNode1 = linkedList.find('4');
    const findedNode2 = linkedList.find('9');
    const findedNode3 = linkedList.find('0');

    expect(findedNode1.value).toEqual('4');
    expect(findedNode1.next.value).toEqual('7');
    expect(findedNode2.value).toEqual('9');
    expect(findedNode3).toEqual(null);
});

test('11、移除某个节点【空链表、包含一个节点链表、多个节点链表、多个重复值链表】:remove()', ()=> {
    const linkedList = new SimpleLinkedList();

    // 针多空链表做移除操作
    const removedNode = linkedList.remove('2');

    expect(removedNode).toEqual(null);
    expect(linkedList.head).toEqual(null);
    expect(linkedList.tail).toEqual(null);

    // 针多包含一个节点空链表做移除操作
    linkedList.append('1');

    const removedNode2 = linkedList.remove('1');

    expect(linkedList.head).toEqual(null);
    expect(linkedList.tail).toEqual(null);
    expect(removedNode2.value).toEqual('1');

    // 针对包含两个节点链表做移除操作

    linkedList.append('1');
    linkedList.append('1');

    const removedNode3 = linkedList.remove('1');

    expect(linkedList.head).toEqual(null);
    expect(linkedList.tail).toEqual(null);
    expect(removedNode3.value).toEqual('1');

    linkedList.append('1');
    linkedList.append('2');

    const removedNode4 = linkedList.remove('1');

    expect(linkedList.head.value).toEqual('2');
    expect(linkedList.head.next).toEqual(null);
    expect(linkedList.tail.value).toEqual('2');
    expect(linkedList.tail.next).toEqual(null);
    expect(removedNode4.value).toEqual('1');


    // 针对包含多个节点链表做移除操作

    linkedList.append('3');
    linkedList.append('4');
    linkedList.append('5');

    const removedNode5 = linkedList.remove('5');

    expect(linkedList.head.value).toEqual('2');
    expect(linkedList.head.next.value).toEqual('3');
    expect(linkedList.tail.value).toEqual('4');
    expect(linkedList.tail.next).toEqual(null);
    expect(removedNode5.value).toEqual('5');
});

test('12、尾部加一个节点:append()', ()=> {
    const linkedList = new SimpleLinkedList();

    linkedList.append('1');

    expect(linkedList.head.value).toEqual('1');
    expect(linkedList.head.next).toEqual(null);
    expect(linkedList.tail.value).toEqual('1');
    expect(linkedList.tail.next).toEqual(null);
});

test('13、头部追加一个节点:prepend()', ()=> {
    const linkedList = new SimpleLinkedList();

    linkedList.prepend('1');

    expect(linkedList.head.value).toEqual('1');
    expect(linkedList.head.next).toEqual(null);
    expect(linkedList.tail.value).toEqual('1');
    expect(linkedList.tail.next).toEqual(null);

    linkedList.prepend('2');

    expect(linkedList.head.value).toEqual('2');
    expect(linkedList.head.next.value).toEqual('1');
    expect(linkedList.tail.value).toEqual('1');
    expect(linkedList.tail.next).toEqual(null);
});

test('14、toArray()', ()=> {
    const linkedList = new SimpleLinkedList();

    linkedList.append('1');
    linkedList.append('2');

    const _array = linkedList.toArray();

    expect(_array.length).toBe(2);
    expect(_array).toContain('1');
    expect(_array).toContain('2');
});

test('14、toString()', ()=> {
    const linkedList = new SimpleLinkedList();

    linkedList.append('1');
    linkedList.append('2');
    linkedList.append('3');

    const _str = linkedList.toString();

    expect(_str).toMatch('1,2,3');
});
