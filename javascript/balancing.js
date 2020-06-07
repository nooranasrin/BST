const { performInOrderTraversal, insert } = require('./BST');

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

const main = function () {
  const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];
  let tree = list.reduce(insert, null);
  tree = balanceTree(tree);
  console.log(JSON.stringify(tree, null, 3));
};

main();
