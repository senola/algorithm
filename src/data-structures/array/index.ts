interface Array<T> {
    insertFirstPosition: (value: any) => any[];
    removeFirstPosition: () => any[];
}

// 在数据开头插入元素
// 等价于Array.prototype.unshift
// eslint-disable-next-line
Array.prototype.insertFirstPosition = function(value) {
    for (let i = this.length; i >= 0; i--) {
        this[i] = this[i - 1];
    }
    this[0] = value;
    return this;
};

// 从数组开头删除元素
// 等价于Array.prototype.shift
// eslint-disable-next-line
Array.prototype.removeFirstPosition = function() {
    const newArray = [];

    for (let i = 1; i < this.length; i++) {
        newArray.push(this[i]);
    }

    return newArray;
};
