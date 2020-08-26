import BinarySearchTree from '../../../src/data-structures/tree/binarySearchTree';

const bst = new BinarySearchTree();

bst.insert(11);
bst.insert(7);
bst.insert(15);
bst.insert(5);
bst.insert(3);
bst.insert(9);
bst.insert(8);
bst.insert(10);
bst.insert(13);
bst.insert(12);
bst.insert(14);
bst.insert(20);
bst.insert(18);
bst.insert(25);
bst.insert(6);

test('01、二叉搜索树插入新节点 insert()', ()=> {
    const bst = new BinarySearchTree();

    expect(bst.remove(1)).toEqual(null);
    bst.insert(6);
    expect(!!bst.search(6)).toEqual(true);
});

test('02、二叉搜索树中序遍历 inOrderTraverse() ', ()=> {
    let result: any = '';
    const fn = (key: any)=> {
        result = `${result} ${key}`;
    };

    bst.insert(25);
    bst.insert(25);
    bst.insert(25);
    bst.inOrderTraverse(fn);
    expect(result).toEqual(' 3 5 6 7 8 9 10 11 12 13 14 15 18 20 25');
});

test('03、二叉搜索树中序遍历 preOrderTraverse()', ()=> {
    let result: any = '';
    const fn = (key: any)=> {
        result = `${result} ${key}`;
    };

    bst.preOrderTraverse(fn);
    expect(result).toEqual(' 11 7 5 3 6 9 8 10 15 13 12 14 20 18 25');
});
test('04、二叉搜索树后序遍历 postOrderTraverse()', ()=> {
    let result: any = '';
    const fn = (key: any)=> {
        result = `${result} ${key}`;
    };

    bst.postOrderTraverse(fn);
    expect(result).toEqual(' 3 6 5 8 10 9 7 12 14 13 18 25 20 15 11');
});

test('04、二叉搜索树查询最大最小值 max()、min()', ()=> {
    expect(bst.min().key).toEqual(3);
    expect(bst.max().key).toEqual(25);
});

test('05、二叉搜索树搜索特定的值 search()', ()=> {
    expect(!!bst.search(11)).toEqual(true);
    expect(!!bst.search(-1)).toEqual(false);
    expect(!!bst.search(25)).toEqual(true);
});

test('06、二叉搜索树移除特定的值 remove()', ()=> {
    let tree: any;

    tree = null;

    const bst1 = new BinarySearchTree();

    tree = bst1.remove(1);

    expect(tree).toEqual(null);
    bst1.insert(1);
    tree = bst1.remove(1);
    expect(tree).toEqual(null);
    expect(!!bst1.search(1)).toEqual(false);

    // 删除叶子节点
    const bst2 = new BinarySearchTree();

    bst2.insert(11);
    bst2.insert(7);
    bst2.insert(15);

    tree = bst2.remove(7);

    expect(!!bst2.search(7)).toEqual(false);
    expect(tree.left).toEqual(null);
    bst2.insert(7);
    tree = bst2.remove(15);

    expect(!!bst2.search(15)).toEqual(false);
    expect(tree.right).toEqual(null);

    // 移除有一个左侧或右侧子节点的节点
    const bst3 = new BinarySearchTree();

    bst3.insert(11);
    bst3.insert(7);
    bst3.insert(15);
    bst3.insert(5);
    bst3.insert(20);

    tree = bst3.remove(7);

    expect(!!bst3.search(7)).toEqual(false);
    expect(tree.left.left).toEqual(null);
    expect(tree.left.right).toEqual(null);
    expect(tree.left.key).toEqual(5);

    bst3.insert(7);
    tree = bst3.remove(15);

    expect(!!bst3.search(15)).toEqual(false);
    expect(tree.right.right).toEqual(null);
    expect(tree.right.right).toEqual(null);
    expect(tree.right.key).toEqual(20);


    // 情况三： 移除有两个子节点的节点
    const bst4 = new BinarySearchTree();

    bst4.insert(11);
    bst4.insert(7);
    bst4.insert(15);
    bst4.insert(5);
    bst4.insert(9);
    bst4.insert(20);
    bst4.insert(13);

    tree = bst4.remove(15);
    expect(!!bst4.search(15)).toEqual(false);
    expect(tree.right.key).toEqual(20);
});
