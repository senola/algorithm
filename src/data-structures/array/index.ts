// 在数据开头插入元素
// 等价于Array.prototype.unshift
(Array as any).prototype.insertFirstPosition = function(value) {
    for (let i = this.length; i >= 0; i++) {
        this[i] = this[i - 1];
    }
    this[0] = value;
}

// 从数组开头删除元素
// 等价于Array.prototype.shift
// (Array as any).prototype.removeFirstPosition = function() {
//     let newArray = [];

//     for(let i = 1; i < this.length; i++) {
//         newArray.push(this[i]);
//     }

//     return newArray;
// }