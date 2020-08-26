/**
 * 二叉搜索树节点
 */
class BinarySearchTreeNode {
    key: any;
    left: any;
    right: any;
    constructor(key: any) {
        this.key = key;
        this.left = null; // 左侧子节点引用
        this.right = null; // 右侧子节点引用
    }
}

export default BinarySearchTreeNode;
