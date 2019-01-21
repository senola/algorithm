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
        // 创建一个next指向头节点的Node
        const newNode = new DoublyLinkedListNode(value, this.head, null);

        // 如果头节点存在，则将头节点的prev指向新节点
        if (this.head) {
            this.head.prev = newNode;
        }
        // 头节点指向新的的节点
        this.head = newNode;

        if (!this.tail) {
            this.tail = newNode;
        }
        return this;
    }

    /**
     * 移除节点(相同节点全部移除)
     * @return DoublyLinkedList
     */
    remove(value) {
        if (!this.head) {
            return null;
        }

        let deleteNode = null;
        let currentNode = this.head;

        while (currentNode) {
            if (currentNode.value === value) { // 比较当前结点值与欲删除值
                deleteNode = currentNode;

                // 对头节点边界处理
                if (deleteNode === this.head) {
                    this.head = deleteNode.next;

                    // 将头节点的prev指向null
                    if (this.head) {
                        this.head.prev = null;
                    }
                    // 处理无尾节点情况
                    if (deleteNode === this.tail) {
                        this.tail = null;
                    }
                } else if (currentNode.value === this.tail) {
                    // 对尾节点边界处理
                    this.tail = currentNode.prev;
                    this.next = null;
                } else {
                    // A<=>B<=>C,currentNode = B 现需删除B
                    // A.next = C
                    // C.prev = A
                    currentNode.prev.next = currentNode.next;
                    currentNode.next.prev = currentNode.prev;
                }
            }
            currentNode = currentNode.next;
        }
        return deleteNode;
    }

    /**
     * 查找元素
     * @return DoublyLinkedList
     */
    // find(value) {

    // }

    /**
     * 删除头节点
     * @return DoublyLinkedList
     */
    // deleteHead() {

    // }

    /**
     * 删除尾节点
     * @return DoublyLinkedList
     */
    // deleteTail() {

    // }
}

module.exports = DoublyLinkedList;
