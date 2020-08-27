/**
 * 红黑树实现，红黑树也是二叉搜索树
 */
import BinarySearchTree from './binarySearchTree';
import utils from '../../utils';
import RedBlackNode from './RedBlackNode';

class RedBlackTree extends BinarySearchTree {
    root: RedBlackNode;
    constructor(compareFn = utils.defaultCompare) {
        super(compareFn);
        this.root = null;
    }

    insert(key: any) {
        if (this.root === null) {
            this.root = new RedBlackNode(key);
            this.root.color = RedBlackNode.COLORS.BLACK;
        } else {
            if (!this.search(key)) { // 确保二叉树无重复数据
                const newNode = this.insertNode(this.root, key);

                this.fixTreePropertes(newNode);
            } else {
                return false;
            }
        }
        return true;
    }

    insertNode(node: RedBlackNode, key: any) {
        if (this.compareFn(key, node.key) < 0) {
            if (node.left === null) {
                node.left = new RedBlackNode(key);
                node.left.parent = node; // 保存了指向被插入节点父节点的引用
                return node.left;
            } else {
                return this.insertNode(node.left, key);
            }
        } else {
            if (node.right === null) {
                node.right = new RedBlackNode(key);
                node.right.parent = node; // 保存了指向被插入节点父节点的引用
                return node.right;
            } else {
                return this.insertNode(node.right, key);
            }
        }
    }
    fixTreePropertes(node: RedBlackNode) {
        while (node &&
               node.parent &&
               node.parent.color.isRed() &&
               node.color !== RedBlackNode.COLORS.BLACK) {
            let parent = node.parent;
            const grandParent = parent.parent;

            // 情形A：父节点是左侧子节点
            if (grandParent && grandParent.left === parent) {
                const uncle = grandParent.right;

                // 情形1A：叔节点也是红色——只需要重新填色
                if (uncle && uncle.color === RedBlackNode.COLORS.RED) {
                    grandParent.color = RedBlackNode.COLORS.RED;
                    parent.color = RedBlackNode.COLORS.BLACK;
                    uncle.color = RedBlackNode.COLORS.BLACK;
                    node = grandParent;
                } else {
                    // 情形2A：节点是右侧子节点——左旋转
                    if (node === parent.right) {
                        this.rotationRR(parent);
                        node = parent;
                        parent = node.parent;
                    }
                    // 情形3A：节点是左侧子节点——右旋转
                    this.rotationLL(grandParent);
                    parent.color = RedBlackNode.COLORS.BLACK;
                    grandParent.color = RedBlackNode.COLORS.RED;
                    node = parent;
                }
            } else { // 情形B：父节点是右侧子节点
                const uncle = grandParent.left;

                // 情形1B：叔节点是红色——只需要重新填色
                if (uncle && uncle.color === RedBlackNode.COLORS.RED) {
                    grandParent.color = RedBlackNode.COLORS.RED;
                    parent.color = RedBlackNode.COLORS.BLACK;
                    uncle.color = RedBlackNode.COLORS.BLACK;
                    node = grandParent;
                } else {
                    // 情形2B：节点是左侧子节点——右旋转
                    if (node === parent.left) {
                        this.rotationLL(parent); // {19}
                        node = parent;
                        parent = node.parent;
                    }
                    // 情形3B：节点是右侧子节点——左旋转
                    this.rotationRR(grandParent); // {20}
                    parent.color = RedBlackNode.COLORS.BLACK;
                    grandParent.color = RedBlackNode.COLORS.RED;
                    node = parent;
                }
            }
        }
        this.root.color = RedBlackNode.COLORS.BLACK;
    }

    // LL 左左旋转
    rotationLL(node: RedBlackNode) {
        const tmp = node.left;

        node.left = tmp.right;
        if (tmp.right && tmp.right.key) {
            tmp.right.parent = node;
        }
        tmp.parent = node.parent;
        if (!node.parent) {
            this.root = tmp;
        } else {
            if (node === node.parent.left) {
                node.parent.left = tmp;
            } else {
                node.parent.right = tmp;
            }
        }
        tmp.right = node;
        node.parent = tmp;
    }
    // RR 右右旋转
    rotationRR(node: RedBlackNode) {
        const tmp = node.right;

        node.right = tmp.left;
        if (tmp.left && tmp.left.key) {
            tmp.left.parent = node;
        }
        tmp.parent = node.parent;
        if (!node.parent) {
            this.root = tmp;
        } else {
            if (node === node.parent.left) {
                node.parent.left = tmp;
            } else {
                node.parent.right = tmp;
            }
        }
        tmp.left = node;
        node.parent = tmp;
    }
}

export default RedBlackTree;
