/**
 * LRU（Least recently used，最近最少使用）算法。该算法的观点是，最近被访问的数据那么它将来访问的概率就大，缓存满的时候，优先淘汰最无人问津者。
 */

/**
 * LRUNode
 */
class LRUNode {
    key: string;
    value: any;
    prev: any;
    next: any;
    constructor(key: string, value: any, prev: any, next: any) {
        this.key = key;
        this.value = value;
        this.prev = prev;
        this.next = next;
    }

    setValue(value: any) {
        this.value = value;
    }
}

/**
 * LRUCache
 */
class LRUCache {
    limit: number;
    map: {};
    size: number;
    head: LRUNode;
    tail: LRUNode;
    constructor(limit = 10) {
        this.limit = limit;
        this.map = {};
        this.size = 0;
        this.head = this.tail = undefined;
    }

    set(key: string, value: any) {

        const oldNode = this.get(key);

        if (oldNode) { // 更新值
            return oldNode.setValue(value);
        }


        const newnNode = new LRUNode(key, value, this.head, undefined);

        this.map[key] = newnNode;
        this.size++;

        if (!this.head) {
            this.head = newnNode;
            this.tail = newnNode;
        } else {
            this.head.next = newnNode;
            this.head = newnNode;
        }

        // 超出limit范围后，删除尾部元素
        if (this.size > this.limit) {
            delete this.map[this.tail.key];
            this.tail = this.tail.next;
            this.tail.prev = undefined;
            this.size--;
        }
    }

    get(key: string) {
        const node = this.map[key];
        // 如果查找不到含有`key`这个属性的缓存对象

        if (node === undefined) return;

        // 如果查找到的缓存对象已经是 tail (最近使用过的)
        if (node === this.head) { // 判断该节点是不是是第一个节点
            // 是的话，皆大欢喜，不用移动元素，直接返回
            return node;
        } else if (node === this.tail) { // 查找值是尾部节点
            this.head.next = this.tail;
            this.head = this.tail;
            this.tail = this.tail.next;
            this.tail.prev = undefined;
        } else { // 查找值中间节点
            node.prev.next = node.next;
            node.prev = this.head;
            this.head.next = node;
            this.head = node;
        }

        return node;
    }
}

export default LRUCache;
