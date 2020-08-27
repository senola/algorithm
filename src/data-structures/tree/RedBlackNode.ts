import TreeNode from './binarySearchTreeNode';

class RedBlackNode extends TreeNode {
    static COLORS: { BLACK: string; RED: string; };
    color: string;
    parent: any;
    // eslint-disable-next-line no-useless-constructor
    constructor(key: any) {
        super(key);
        this.color = RedBlackNode.COLORS.RED; // 新节点为红色
        this.parent = null;
    }

    isRed() {
        return this.color === RedBlackNode.COLORS.RED;
    }
}
RedBlackNode.COLORS = {
    BLACK: 'black',
    RED: 'red'
};
export default RedBlackNode;
