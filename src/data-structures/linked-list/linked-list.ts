/**
 * @time 2018-12-03
 * @description 简单的链表
 */

'use strict';

import Utils from '../../utils';
const defaultCompareFn = Utils.defaultCompare;

/**
 * 定义节点结构（链表由一组节点组成）
 */
class LinkedListNode {
    value: any;
    next: any;
    // 简单的链表节点只需要输出值和下一个节点的信息
    constructor(value: any, next: object = undefined) {
        this.value = value;
        this.next = next;
    }
}

/**
 * 简单的链表实现
 */
class LinkedList {
    head: any;
    tail: any;
    count: number;
    compareFn: Function;
    // 链表的头节点和尾结点信息
    // 可通过每个节点的next属性找到下一个节点的信息
    constructor(compareFn = defaultCompareFn) {
        this.head = null;
        this.tail = null;
        this.count = 0; // 记录链表长度
        this.compareFn = compareFn; // 比较函数
    }

    /**
     * 尾部添加节点
     * @return LinkedList
     */
    push(value: any): LinkedList {
        const newNode = new LinkedListNode(value);

        // 头节点为空，则创建一个新的头节点，并且头、尾节点指针都指向新节点
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            // 插入链表的尾部
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.count++; // 链表长度 +1
        return this;
    }

    /**
     * 向链表的特定位置插入一个新元素。
     * @param position
     * @param value
     */
    insert(position: number, value: any) {
        if (position >= 0 && position < this.count) {
            const newNode = new LinkedListNode(value);

            if (position === 0) {
                const current = this.head;

                this.head = newNode;
                newNode.next = current;
            } else {
                const prev = this.getValueAt(position - 1);
                const current = prev.next;

                newNode.next = current;
                prev.next = newNode;
            }

            this.count++;
            return true;
        }

        return false;
    }

    /**
     * 头部添加节点
     * @return SimpleLinkedList
     */
    prepend(value: any) {
        const newHead = new LinkedListNode(value, this.head);

        this.head = newHead;
        // 尾部节点不存在则头尾统一指向newHead
        if (!this.tail) {
            this.tail = newHead;
        }
        return this;
    }
    // 返回链表中特定位置的元素。如果链表中不存在这样的元素，则返回null
    getValueAt(position: number) {
        if (position >= 0 && position < this.count) {
            let current = this.head;

            for (let i = 0; i < position && current !== null; i++) {
                current = current.next;
            }
            return current;
        }
        return undefined;
    }
    // 返回元素在链表中的索引。如果链表中没有该元素则返回-1
    indexOf(value: any) {
        let current = this.head;

        for (let i = 0; i < this.count; i++) {
            if (this.compareFn(value, current.value) === 0) {
                return i;
            }
            current = current.next;
        }

        return -1;
    }

    /**
     * 移除节点
     * @return SimpleLinkedList
     */
    remove(value: any) {
        const index = this.indexOf(value);

        return this.removeAt(index);
    }

    // 从链表的特定位置移除一个元素
    removeAt(position: number) {
        // 边界检查
        if (position >= 0 && position < this.count) {
            let current = this.head;

            // 删除第一项
            if (position === 0) {
                this.head = current.next;
            } else {
                const prev = this.getValueAt(position - 1);

                current = prev.next;
                // 将prev与current的下一项链接，跳过current，从而达到删除的效果
                prev.next = current.next;
                // 如果删除的是最后节点，更新tail
                if (position === this.count - 1) {
                    this.tail = prev;
                }
            }
            this.count--;
            return current.value;
        }

        return undefined;
    }

    isEmpty() {
        return this.count === 0;
    }

    size() {
        return this.count;
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
    toString() {
        if (!this.head) {
            return '';
        }
        let objString = `${this.head.value}`;
        let current = this.head.next;

        for (let i = 1; i < this.size() && !!current; i++) {
            objString = `${objString},${current.value}`;
            current = current.next;
        }
        return objString;
    }
}

export default LinkedList;
