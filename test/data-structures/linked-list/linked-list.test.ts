import LinkedList from '../../../src/data-structures/linked-list/linked-list';

test('01、创建一个链表', ()=> {
    const linkedList = new LinkedList();

    expect(linkedList.head).toEqual(null);
    expect(linkedList.tail).toEqual(null);
    expect(linkedList.size()).toEqual(0);
    expect(linkedList.isEmpty()).toEqual(true);

    linkedList.push('1');

    expect(linkedList.head.value).toEqual('1');
    expect(linkedList.tail.value).toEqual('1');
    expect(linkedList.size()).toEqual(1);
    expect(linkedList.isEmpty()).toEqual(false);
});

test('02、getValueAt()返回链表中特定位置的元素', ()=> {
    const linkedList = new LinkedList();

    linkedList.push('1');
    linkedList.push('2');
    linkedList.push('3');
    linkedList.push('4');

    expect(linkedList.getValueAt(0).value).toEqual('1');
    expect(linkedList.getValueAt(1).value).toEqual('2');
    expect(linkedList.getValueAt(-1)).toEqual(undefined);
});

test('03、insert() 向链表的特定位置插入一个新元素', ()=> {
    const linkedList = new LinkedList();

    linkedList.push('1');
    linkedList.push('2');
    linkedList.push('3');

    expect(linkedList.head.value).toEqual('1');
    expect(linkedList.head.next.value).toEqual('2');
    expect(linkedList.head.next.next.value).toEqual('3');

    linkedList.insert(0, '-1');
    expect(linkedList.head.value).toEqual('-1');
    linkedList.insert(1, '-2');
    expect(linkedList.getValueAt(1).value).toEqual('-2');

    expect(linkedList.insert(-1, '-1')).toEqual(false);
    expect(linkedList.insert(0, '-1')).toEqual(true);
});

test('04、prepend() 头部添加节点', ()=> {
    const linkedList = new LinkedList();

    linkedList.push('1');
    linkedList.push('2');
    linkedList.push('3');

    linkedList.prepend('0');
    expect(linkedList.head.value).toEqual('0');
    expect(linkedList.head.next.value).toEqual('1');
    expect(linkedList.head.next.next.value).toEqual('2');

    const linkedList2 = new LinkedList();

    linkedList2.prepend('1');

    expect(linkedList2.head.value).toEqual('1');
    expect(linkedList2.tail.value).toEqual('1');
});

test('05、removeAt() 从链表的特定位置移除一个元素', ()=> {
    const linkedList = new LinkedList();

    linkedList.push('1');
    linkedList.push('2');
    linkedList.push('3');
    linkedList.push('4');
    linkedList.push('5');

    expect(linkedList.removeAt(-1)).toEqual(undefined);

    linkedList.removeAt(0);
    expect(linkedList.head.value).toEqual('2');

    linkedList.removeAt(3);
    expect(linkedList.tail.value).toEqual('4');

    const linkedList2 = new LinkedList();

    expect(linkedList2.removeAt(0)).toEqual(undefined);
    linkedList2.removeAt(3);
    expect(linkedList2.tail).toEqual(null);

    const linkedList3 = new LinkedList();

    linkedList3.push('1');
    linkedList3.push('2');
    linkedList3.push('3');

    linkedList3.removeAt(2);

    expect(linkedList3.tail.value).toEqual('2');

});

test('06、indexOf() 返回元素在链表中的索引', ()=> {
    const linkedList = new LinkedList();

    expect(linkedList.indexOf('1')).toEqual(-1);

    linkedList.push(1);
    linkedList.push(2);
    linkedList.push(3);

    expect(linkedList.indexOf(1)).toEqual(0);
    expect(linkedList.indexOf(3)).toEqual(2);

});
test('07、remove() 从链表中移除元素', ()=> {
    const linkedList = new LinkedList();

    expect(linkedList.remove(1)).toEqual(undefined);

    linkedList.push(1);
    linkedList.push(2);
    linkedList.push(3);
    linkedList.push(4);

    expect(linkedList.remove(1)).toEqual(1);
    expect(linkedList.size()).toEqual(3);

    linkedList.remove(2);
    linkedList.remove(3);
    linkedList.remove(4);

    expect(linkedList.size()).toEqual(0);
    expect(linkedList.tail.next).toEqual(undefined);
});

test('08、toString()', ()=> {
    const linkedList = new LinkedList();

    expect(linkedList.toString()).toEqual('');

    linkedList.push('1');
    expect(linkedList.toString()).toEqual('1');

    linkedList.push('2');
    linkedList.push('3');

    expect(linkedList.toString()).toEqual('1,2,3');

    linkedList.deleteHead();

    expect(linkedList.toString()).toEqual('2,3');

    linkedList.deleteTail();

    expect(linkedList.toString()).toEqual('2');

    linkedList.deleteTail();
    linkedList.deleteHead();

    expect(linkedList.deleteTail()).toEqual(null);
    expect(linkedList.deleteHead()).toEqual(null);
    expect(linkedList.tail).toEqual(null);
    expect(linkedList.head).toEqual(null);

    linkedList.push('2');

    linkedList.deleteHead();
    expect(linkedList.head).toEqual(null);
    expect(linkedList.tail).toEqual(null);
});

test('09、删除包含两个节点的链表的尾节点:deleteTail()', ()=> {
    const linkedList = new LinkedList();

    linkedList.push('1');
    linkedList.push('2');

    const deletedNode = linkedList.deleteTail();

    expect(linkedList.head.value).toEqual('1');
    expect(linkedList.head.next).toEqual(null);
    expect(linkedList.tail.value).toEqual('1');
    expect(linkedList.tail.next).toEqual(null);
    expect(deletedNode.value).toEqual('2');
});

test('09、删除包含多个节点的链表的尾节点:deleteTail()', ()=> {
    const linkedList = new LinkedList();

    linkedList.push('1');
    linkedList.push('2');
    linkedList.push('4');
    linkedList.push('7');
    linkedList.push('9');

    const deletedNode = linkedList.deleteTail();

    expect(linkedList.head.value).toEqual('1');
    expect(linkedList.head.next.value).toEqual('2');
    expect(linkedList.tail.value).toEqual('7');
    expect(linkedList.tail.next).toEqual(null);
    expect(deletedNode.value).toEqual('9');
});
