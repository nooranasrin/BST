const performInOrderTraversal = require('./traversals').performInOrderTraversal;
const insert = require('./insert');

const getMiddleElement = function (array) {
  return Math.floor(array.length / 2);
};

const balanceTree = function (tree) {
  if (tree === null) {
    return tree;
  }
  let sortedList = performInOrderTraversal(tree);
  const root = getMiddleElement(sortedList);
  [sortedList[0], sortedList[root]] = [sortedList[root], sortedList[0]];
  tree = sortedList.reduce(insert, null);
  tree.left = balanceTree(tree.left);
  tree.right = balanceTree(tree.right);
  return tree;
};

module.exports = balanceTree;
