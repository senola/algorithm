/**
 * 二叉搜索树实现
 */
import TreeNode from './binarySearchTreeNode';
import utils from '../../utils';

class BinarySearchTree {
    compareFn: Function;
    root: TreeNode;
    constructor(compareFn = utils.defaultCompare) {
        this.compareFn = compareFn; // 用来比较节点值的函数
        this.root = null; // 根节点
    }

    insert(key: any): boolean {
        if (this.root === null) { // 插入节点是否为第一个节点
            this.root = new TreeNode(key);
        } else {
            if (!this.search(key)) { // 确保二叉树无重复数据
                this.insertNode(this.root, key);
            } else {
                return false;
            }
        }
        return true;
    }
    // 向node节点中插入key。insertNode方法需要找到新节点应该插入的正确位置
    insertNode(node: TreeNode, key: any) {
        if (this.compareFn(node.key, key) > 0) {
            if (node.left === null) { // 左节存储比父节点小的值
                return node.left = new TreeNode(key);
            } else {
                return this.insertNode(node.left, key);
            }
        } else { // 右节存储比父节点大的值
            if (node.right === null) {
                return node.right = new TreeNode(key);
            } else {
                return this.insertNode(node.right, key);
            }
        }
    }
    // 搜索一个特定的值
    search(key: any) {
        return this.searchNode(this.root, key);
    }
    searchNode(node: TreeNode, key: any): any {
        if (node === null) {
            return;
        }

        if (this.compareFn(node.key, key) > 0) {
            return this.searchNode(node.left, key);
        } else if (this.compareFn(node.key, key) < 0) {
            return this.searchNode(node.right, key);
        } else {
            return node;
        }
    }
    // 通过中序遍历方式遍历所有节点
    inOrderTraverse(callBack: Function) {
        this.inOrderTraverseNode(this.root, callBack);
    }
    inOrderTraverseNode(node: TreeNode, callBack: Function) {
        if (node !== null) { // 停止递归遍历条件
            this.inOrderTraverseNode(node.left, callBack);
            callBack(node.key); // 遍历节点值在中间
            this.inOrderTraverseNode(node.right, callBack);
        }
    }
    // 通过先序遍历方式遍历所有节点
    preOrderTraverse(callBack: Function) {
        this.preOrderTraverseNode(this.root, callBack);
    }

    preOrderTraverseNode(node: TreeNode, callBack: Function) {
        if (node !== null) {
            callBack(node.key); // 遍历节点值在前面
            this.preOrderTraverseNode(node.left, callBack);
            this.preOrderTraverseNode(node.right, callBack);
        }
    }

    // 通过后序遍历方式遍历所有节点
    postOrderTraverse(callBack: Function) {
        this.postOrderTraverseNode(this.root, callBack);
    }

    postOrderTraverseNode(node: TreeNode, callBack: Function) {
        if (node !== null) {
            this.postOrderTraverseNode(node.left, callBack);
            this.postOrderTraverseNode(node.right, callBack);
            callBack(node.key); // 遍历节点值在最后
        }
    }
    // 返回树中最小值
    min() {
        return this.minNode(this.root);
    }
    minNode(node: TreeNode) {
        let currentNode = node;

        while (currentNode !== null && currentNode.left !== null) {
            currentNode = currentNode.left;
        }
        return currentNode;
    }
    // 返回树中最大值
    max() {
        return this.maxNode(this.root);
    }
    maxNode(node: TreeNode) {
        let currentNode = node;

        while (currentNode !== null && currentNode.right !== null) {
            currentNode = currentNode.right;
        }
        return currentNode;
    }
    // 从树中删除某个key
    remove(key: any) {
        return this.root = this.removeNode(this.root, key);
    }

    removeNode(node: TreeNode, key: any) {
        if (node === null) {
            return null;
        }

        if (this.compareFn(node.key, key) > 0) {
            node.left = this.removeNode(node.left, key);
            return node;
        } else if (this.compareFn(node.key, key) < 0) {
            node.right = this.removeNode(node.right, key);
            return node;
        } else {
            // 情况一： 移除一个叶节点
            if (node.left === null && node.right === null) {
                return null;
            }
            // 情况二： 移除有一个左侧或右侧子节点的节点
            if (node.left === null) {
                return node = node.right;
            } else if (node.right === null) {
                return node = node.left;
            }
            // 情况三： 移除有两个子节点的节点
            // step1: 找到它右边子树中最小的节点
            const repleceNode = this.minNode(node.right);

            // step2: 将其替换为要删除的key
            node.key = repleceNode.key;
            // step3: 删除repleceNode
            node.right = this.removeNode(node.right, repleceNode.key);
            // step4: 返回node
            return node;
        }
    }
}

export default BinarySearchTree;
