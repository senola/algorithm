/**
 * @time 2019-05-06
 * @description 基于链表实现的队列
 * @author twindyorg
 *
 **/

import LinkedList from '../simple-linked-list';

class Queue {
    constructor() {
        // 初始化一个空链表
        this.linkedList = new LinkedList();
    }

    /**
     * 入队操作
     */
    enqueue(value) {
        // 在链表的尾部添加元素
        this.linkedList.append(value);
    }

    /**
     * 出队操作
     */
    dequeue() {
        // 删除链表头部元素
        const deletedHead = this.linkedList.deleteHead();

        return deletedHead ? deletedHead.value : null;
    }

    /**
     * 判断栈是否为空队列
     * @return {boolean} true: 空队列， false: 非空队列
     */
    isEmpty() {
        return !this.linkedList.head;
    }

    /**
     * 访问队列当前顶最前端的元素
     * @return {*}
     */
    peek() {
        if (this.isEmpty()) return null;

        return this.linkedList.head.value;
    }

    /**
     * 转换成数组
     */
    toArray() {
        return this.linkedList.toArray();
    }
}

export default Queue;
