/**
 * @time 2019-05-06
 * @description 基于链表实现的栈
 * @author twindyorg
 *
 **/

import LinkedList from '../simple-linked-list';

class Stack {
    constructor() {
        // 初始化一个空的链表
        this.linkedList = new LinkedList();
    }

    /**
     * 判断栈是否为空栈
     * @return {boolean} true: 空栈， false: 非空栈
     */
    isEmpty() {
        return !this.linkedList.head;
    }

    /**
     * 访问栈当前顶端(末尾)的元素
     * @return {*}
     */
    peek() {
        if (this.isEmpty()) return null;

        return this.linkedList.head;
    }

    /**
     * 入栈
     */
    push(value) {
        // 入栈操作相当于在链表的头部添加节点
        this.linkedList.prepend(value);
    }

    /**
     * 出站
     * @return {*}
     */
    pop() {
        // 出栈操作相当于删除链表的头结点
        const deleteHead = this.linkedList.deleteHead();

        // 返回删除的节点值
        return deleteHead ? deleteHead.value : null;
    }

    /**
     * 转换成数组
     */
    toArray() {
        return this.linkedList.toArray();
    }

    /**
     * toString
     */
    toString() {
        return this.linkedList.toString();
    }
}

export default Stack;
