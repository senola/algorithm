/**
 * @time 2020-8-24
 * @description 基于对象实现的的队列
 */

class Queue {
    items: {};
    count: number;
    minNum: number;
    constructor() {
        this.items = {}; // 用于存放队列数据
        this.count = 0; // 计数
        this.minNum = 0; // 最前面序号
    }

    // 入队
    enqueue(value) {
        this.items[this.count] = value;
        this.count++;
    }

    // 出队
    dequeue():any {
        if (this.isEmpty()) {
            return;
        }
        const val = this.items[this.minNum];

        delete this.items[this.minNum];
        this.minNum++;

        return val;
    }

    // 返回队列第一个元素
    peek() {
        return this.items[this.minNum];
    }

    isEmpty():boolean {
        return this.size() === 0;
    }

    size():number {
        return this.count - this.minNum;
    }

    clear() {
        this.items = {};
        this.count = 0;
        this.minNum = 0;
    }
}
export default Queue;
