/**
 * @time 2018-12-20
 * @description 双向链表
 */

'use strict';

/**
 * 定义双向链表的节点结构（链表由一组节点组成）
 */
class DoublyLinkedListNode {
    constructor(value, next = null, prev = null) {
        this.value = value;
        this.next = next;
        this.prev = prev;
    }
}

/**
 * 双向链表实现
 */
class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    /**
     * 尾部添加节点
     * @return DoublyLinkedList
     */
    append(value) {
        const newNode = new DoublyLinkedListNode(value);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;

            return this;
        }
        // 【注意】新的尾节点prev指针指向旧的尾节点，旧的尾节点next指针要指向newNode
        this.tail.next = newNode;
        newNode.prev = this.tail;
        // 修改旧的尾节点指向新的尾节点
        this.tail = newNode;

        return this;
    }

    /**
     * 头部添加节点
     * @return DoublyLinkedList
     */
    prepend(value) {

    }

    /**
     * 移除节点(相同节点全部移除)
     * @return DoublyLinkedList
     */
    remove(value) {

    }

    /**
     * 查找元素
     * @return DoublyLinkedList
     */
    find(value) {

    }

    /**
     * 删除头节点
     * @return DoublyLinkedList
     */
    deleteHead() {

    }

    /**
     * 删除尾节点
     * @return DoublyLinkedList
     */
    deleteTail() {

    }
}

module.exports = DoublyLinkedList;
