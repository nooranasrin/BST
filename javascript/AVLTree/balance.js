const { leftRotate, rightRotate } = require('../BST/rotate');

const findHeight = function (tree) {
  if (tree === null) {
    return 0;
  }
  return 1 + Math.max(findHeight(tree.left), findHeight(tree.right));
};

const findBalanceFactor = function (tree) {
  const leftHeight = findHeight(tree.left);
  const rightHeight = findHeight(tree.right);
  return rightHeight - leftHeight;
};

const updateBalanceFactor = function (tree) {
  if (tree === null) {
    return tree;
  }
  tree.balanceFactor = findBalanceFactor(tree);
  tree.left = updateBalanceFactor(tree.left);
  tree.right = updateBalanceFactor(tree.right);
  return tree;
};

const balanceTree = function (tree, value) {
  tree.balanceFactor = findBalanceFactor(tree);
  if (tree.balanceFactor < -1 && value < tree.left.value) {
    tree = rightRotate(tree, tree.value);
  }
  if (tree.balanceFactor > 1 && value < tree.right.value) {
    tree = rightRotate(tree, tree.right.value);
    tree = leftRotate(tree, tree.value);
  }
  if (tree.balanceFactor > 1 && value > tree.right.value) {
    tree = leftRotate(tree, tree.value);
  }
  if (tree.balanceFactor < -1 && value > tree.left.value) {
    tree = leftRotate(tree, tree.left.value);
    tree = rightRotate(tree, tree.value);
  }
  return updateBalanceFactor(tree);
};

module.exports = balanceTree;
