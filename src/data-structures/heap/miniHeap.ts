/**
 * 最小堆
 */
import utils from '../../utils';

class MiniHeap {
    compareFn: (a: any, b: any) => 0 | 1 | -1;
    heap: any[];
    constructor(compareFn = utils.defaultCompare) {
        this.compareFn = compareFn;
        this.heap = []; // 用数组存储数据
    }
    // 获取左侧子节点的位置
    getLeftIndex(index: number) {
        return 2 * index + 1;
    }
    // 获取右侧子节点的位置
    getRightIndex(index: number) {
        return 2 * index + 2;
    }
    // 获取父节点位置
    getParentIndex(index: number) {
        if (index === 0) {
            return undefined;
        }

        return Math.floor((index - 1) / 2);
    }
    insert(value: any) {
        if (value !== null) {
            this.heap.push(value);
            this.siftUp(this.heap.length - 1);
            return true;
        }
        return false;
    }
    // 上移操作
    siftUp(index: number) {
        let parentIndex = this.getParentIndex(index);

        while (
            index > 0 &&
            this.compareFn(this.heap[parentIndex], this.heap[index]) > 0
        ) {
            // 位置交换
            [this.heap[parentIndex], this.heap[index]] = [this.heap[index], this.heap[parentIndex]];
            index = parentIndex;
            parentIndex = this.getParentIndex(index); // {4
        }
    }
    // 移除最小值（最小堆）或最大值（最大堆）
    extract() {

    }
    // 返回最小值（最小堆）或最大值（最大堆）且不会移除这个值
    findMiniNum() {

    }
}

export default MiniHeap;
