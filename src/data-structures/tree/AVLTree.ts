/**
 * 自平衡树（AVL）
 * 在AVL树中插入或移除节点和BST完全相同。然而，AVL树的不同之处在于我们需要检验它的平衡因子，如果有需要，会将其逻辑应用于树的自平衡。
 */
import BinarySearchTree from './binarySearchTree';
import utils from '../../utils';
// eslint-disable-next-line no-unused-vars
import TreeNode from './binarySearchTreeNode';

// 平衡参数
const BalanceFactor = {
    UNBALANCED_RIGHT: 1,
    SLIGHTLY_UNBALANCED_RIGHT: 2,
    BALANCED: 3,
    SLIGHTLY_UNBALANCED_LEFT: 4,
    UNBALANCED_LEFT: 5
};

class AVLTree extends BinarySearchTree {
    constructor(compareFn = utils.defaultCompare) {
        super(compareFn);
        this.root = null;
        this.compareFn = compareFn;
    }

    // 获取节点的高度
    getNodeHeight(node: TreeNode) {
        if (node === null) {
            return -1;
        }
        return Math.max(this.getNodeHeight(node.left), this.getNodeHeight(node.right)) + 1;
    }

    // 获取平衡因子
    getBalanceFactor(node: TreeNode) {
        // 左子树与右子树高度之差
        const heightDifference = this.getNodeHeight(node.left) - this.getNodeHeight(node.right);

        switch (heightDifference) {
            case -2:
                return BalanceFactor.UNBALANCED_RIGHT;
            case -1:
                return BalanceFactor.SLIGHTLY_UNBALANCED_RIGHT;
            case 1:
                return BalanceFactor.SLIGHTLY_UNBALANCED_LEFT;
            case 2:
                return BalanceFactor.UNBALANCED_LEFT;
            default:
                return BalanceFactor.BALANCED;
        }
    }
    // LL 旋转
    rotationLL(node: TreeNode) {
        const tmp = node.left; // tmp 为新的根节点

        node.left = tmp.right; // 新的根节点的右子节点分配给旧根节点的左子节点
        tmp.right = node; // 新的根节点的右子节点分配为旧的根节点
        return tmp;
    }
    // RR 旋转
    rotationRR(node: TreeNode) {
        const tmp = node.right; // tmp 为新的根节点

        node.right = tmp.left; // 新的根节点的左子节点分配给旧根节点的右子节点
        tmp.left = node; // 新的根节点的左子节点分配为旧的根节点
        return tmp;
    }
    // LR旋转
    rotationLR(node: TreeNode) {
        node.left = this.rotationRR(node.left);
        return this.rotationLL(node);
    }
    // RL旋转
    rotationRL(node: TreeNode) {
        node.right = this.rotationLL(node.right);
        return this.rotationRR(node);
    }

    insert(key: any): boolean {
        if (!this.search(key)) { // 确保二叉树无重复数据
            this.root = this.insertNode(this.root, key);
        } else {
            return false;
        }
        return true;
    }
    insertNode(node: TreeNode, key: any): TreeNode {
        // 像在BST树中一样插入节点
        if (node === null) {
            return new TreeNode(key);
        } else if (this.compareFn(key, node.key) < 0) {
            node.left = this.insertNode(node.left, key);
        } else if (this.compareFn(key, node.key) > 0) {
            node.right = this.insertNode(node.right, key);
        } else {
            return node; // 重复的键
        }
        // 如果需要，将树进行平衡操作
        const balanceFactor = this.getBalanceFactor(node);

        if (balanceFactor === BalanceFactor.UNBALANCED_LEFT) {
            if (this.compareFn(key, node.left.key) < 0) {
                node = this.rotationLL(node);
            } else {
                return this.rotationLR(node);
            }
        }
        if (balanceFactor === BalanceFactor.UNBALANCED_RIGHT) {
            if (this.compareFn(key, node.right.key) > 0) {
                node = this.rotationRR(node);
            } else {
                return this.rotationRL(node);
            }
        }
        return node;
    }

    removeNode(node: TreeNode, key: any) {
        node = super.removeNode(node, key);
        if (node === null) {
            return node; // null，不需要进行平衡
        }
        // 检测树是否平衡
        const balanceFactor = this.getBalanceFactor(node);

        if (balanceFactor === BalanceFactor.UNBALANCED_LEFT) {
            const balanceFactorLeft = this.getBalanceFactor(node.left);

            if (
                balanceFactorLeft === BalanceFactor.BALANCED ||
                balanceFactorLeft === BalanceFactor.SLIGHTLY_UNBALANCED_LEFT
            ) {
                return this.rotationLL(node);
            }
            if (
                balanceFactorLeft === BalanceFactor.SLIGHTLY_UNBALANCED_RIGHT
            ) {
                return this.rotationLR(node.left);
            }
        }
        if (balanceFactor === BalanceFactor.UNBALANCED_RIGHT) {
            const balanceFactorRight = this.getBalanceFactor(node.right);

            if (
                balanceFactorRight === BalanceFactor.BALANCED ||
                 balanceFactorRight === BalanceFactor.SLIGHTLY_UNBALANCED_RIGHT
            ) {
                return this.rotationRR(node);
            }
            if (balanceFactorRight === BalanceFactor.SLIGHTLY_UNBALANCED_LEFT) {
                return this.rotationRL(node.right);
            }
        }
        return node;
    }
}

export default AVLTree;
