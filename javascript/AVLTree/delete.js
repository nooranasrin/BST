const fs = require('fs');
const balanceTree = require('./balance');
const insert = require('./insert');

const findMin = function (tree) {
  let currNode = tree.right;
  while (currNode.left !== null) {
    currNode = currNode.left;
  }
  return currNode.value;
};

const deleteNode = function (tree, value) {
  if (tree !== null) {
    if (value < tree.value) {
      tree.left = deleteNode(tree.left, value);
    } else if (value > tree.value) {
      tree.right = deleteNode(tree.right, value);
    } else {
      if (tree.left === null && tree.right === null) {
        return null;
      } else if (tree.left === null) {
        tree = tree.right;
      } else if (tree.right === null) {
        tree = tree.left;
      } else {
        tree.value = findMin(tree);
        tree.right = deleteNode(tree.right, tree.value);
      }
    }
    tree = balanceTree(tree, value);
  }
  return tree;
};

module.exports = deleteNode;
