/**
 * @time 2018-12-03
 * @description 简单的链表
 */

'use strict';

/**
 * 定义节点结构（链表由一组节点组成）
 */
class SimpleLinkedListNode {
    // 简单的链表节点只需要输出值和下一个节点的信息
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}

/**
 * 简单的链表实现
 */
class SimpleLinkedList {
    // 链表的头节点和尾结点信息
    // 可通过每个节点的next属性找到下一个节点的信息
    constructor() {
        this.head = null;
        this.tail = null;
    }

    /**
     * 尾部添加节点
     * @return SimpleLinkedList
     */
    append(value) {
        const newNode = new SimpleLinkedListNode(value);

        // 头节点为空，则创建一个新的头节点，并且头、尾节点指针都指向新节点
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;

            return this;
        }

        // 插入链表的尾部
        this.tail.next = newNode;
        this.tail = newNode;

        return this;
    }

    /**
     * 头部添加节点
     * @return SimpleLinkedList
     */
    prepend(value) {
        const newHead = new SimpleLinkedListNode(value, this.head);

        this.head = newHead;
        // 尾部节点不存在则头尾统一指向newHead
        if (!this.tail) {
            this.tail = newHead;
        }
        return this;
    }

    /**
     * 移除节点(相同节点全部移除)
     * @return SimpleLinkedList
     */
    remove(value) {
        // 如果头节点及判断的类型不一致返回null
        if (!this.head) {
            return null;
        }

        let deletedNode = null;

        while (this.head && this.head.value === value) {
            deletedNode = this.head;
            this.head = this.head.next;
        }

        let currentNode = this.head;

        if (currentNode !== null) {
            // 遍历检查
            while (currentNode.next) {
                if (currentNode.next.value === value) {
                    deletedNode = currentNode.next;
                    currentNode.next = currentNode.next.next;
                } else {
                    currentNode = currentNode.next;
                }
            }
        }

        // 尾部节点检查
        if (this.tail.value === value) {
            this.tail = currentNode;
        }

        return deletedNode;
    }

    /**
     * 查找元素
     * @return SimpleLinkedList
     */
    find(value) {
        if (!this.head) return null;

        let curentNode = this.head;

        while (curentNode) {
            if (value && curentNode.value === value) {
                return curentNode;
            }
            curentNode = curentNode.next;
        }
        return null;
    }

    /**
     * 删除头节点
     * @return SimpleLinkedList
     */
    deleteHead() {
        // 没有头节点情况
        if (!this.head) return null;
        const deleteNode = this.head;

        if (!this.head.next) { // 只有一个节点情况
            this.head = null;
            this.tail = null;
        } else { // 多个节点情况
            this.head = this.head.next;
        }
        return deleteNode;
    }

    /**
     * 删除尾节点
     * @return SimpleLinkedList
     */
    deleteTail() {
        // 没有尾节点情况
        if (!this.head) return null;

        const deleteNode = this.tail;

        if (!this.head.next) { // 只有一个节点情况
            this.head = null;
            this.tail = null;
        } else { // 多个节点情况
            // 找到倒数第二个节点
            let currentNode = this.head;

            while (currentNode) {
                // 找出第二个节点
                if (currentNode.next === this.tail) {
                    currentNode.next = null;
                    this.tail = currentNode; // 将指针指向新的尾节点
                }
                currentNode = currentNode.next;
            }
        }
        return deleteNode;
    }

    /**
     * 转换成数组
     */
    toArray() {
        const nodes = [];

        let currentNode = this.head;

        while (currentNode) {
            nodes.push(currentNode);
            currentNode = currentNode.next;
        }
        return nodes;
    }
}

export default SimpleLinkedList;
