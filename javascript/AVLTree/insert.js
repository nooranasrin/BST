const balanceTree = require('./balance');

const createNode = function (value) {
  return { value, balanceFactor: 0, left: null, right: null };
};

const insert = function (tree, value) {
  if (tree === null) {
    return createNode(value);
  }
  if (tree.value > value) {
    tree.left = insert(tree.left, value);
    tree = balanceTree(tree, value);
  } else {
    tree.right = insert(tree.right, value);
    tree = balanceTree(tree, value);
  }
  return tree;
};

module.exports = insert;
