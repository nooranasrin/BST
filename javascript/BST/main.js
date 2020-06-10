const insert = require('./insert');
const traversals = require('./traversals');
const deleteNode = require('./delete');
const search = require('./search');
const { leftRotate, rightRotate } = require('./rotate');
const balanceTree = require('./balancing');

const main = function () {
  const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  let tree = list.reduce(insert, null);
  // console.log(traversals.performInOrderTraversal(tree));
  // console.log(traversals.performPreOrderTraversal(tree));
  // console.log(traversals.performPostOrderTraversal(tree));
  // tree = deleteNode(tree, 10);
  // console.log(search(tree, 19));
  // console.log(leftRotate(tree, 10));
  // console.log(rightRotate(tree, 10));
  console.log(JSON.stringify(balanceTree(tree), null, 2));
};

main();
