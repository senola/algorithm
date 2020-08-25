/**
 * 双端队列: 一种允许我们同时从前端和后端添加和移除元素的特殊队列。
 * 由于双端队列同时遵守了先进先出和后进先出原则，可以说它是把队列和栈相结合的一种数据结构。
 */
class deque {
    count: number;
    items: object;
    front: number;
    back: number;
    constructor() {
        this.count = 0;
        this.items = {};
        this.front = 0;
        this.back = 0;
    }
    // 在双端队列前端添加新的元素。
    addFront(value) {
        if (this.isEmpty()) {
            this.back++;
        }
        this.items[this.front] = value;
        this.front--;
        this.count++;
    }
    // 在双端队列后端添加新的元素
    addBack(value) {
        if (this.isEmpty()) {
            this.addFront(value);
        } else {
            this.items[this.back] = value;
            this.back++;
            this.count++;
        }
    }
    // 从双端队列前端移除第一个元素
    removeFront() {
        const result = this.items[this.front + 1];

        if (result) {
            delete this.items[this.front + 1];
            this.front++;
            this.count--;
        }
        return result;
    }
    // 从双端队列后端移除第一个元素
    removeBack() {
        const result = this.items[this.back - 1];

        if (result) {
            delete this.items[this.back - 1];
            this.back--;
            this.count--;
        }
        return result;
    }
    // 返回双端队列前端的第一个元素
    peekFront() {
        return this.items[this.front + 1];
    }
    // 返回双端队列后端的第一个元素
    peekBack() {
        return this.items[this.back - 1];
    }
    isEmpty() {
        return this.count === 0;
    }
    clear() {
        this.count = 0;
        this.front = 0;
        this.back = 0;
        this.items = {};
    }
    size() {
        return this.count;
    }
}

export default deque;
