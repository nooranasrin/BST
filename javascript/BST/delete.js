const findMin = function (tree) {
  let currNode = tree.right;
  while (currNode.left !== null) {
    currNode = currNode.left;
  }
  return currNode.value;
};

const deleteNode = function (tree, value) {
  if (tree === null) {
    return tree;
  }

  if (value < tree.value) {
    tree.left = deleteNode(tree.left, value);
  } else if (value > tree.value) {
    tree.right = deleteNode(tree.right, value);
  } else {
    if (tree.left === null && tree.right === null) {
      tree = null;
      return tree;
    }
    if (tree.left === null) return tree.right;
    if (tree.right === null) return tree.left;

    tree.value = findMin(tree);
    tree.right = deleteNode(tree.right, tree.value);
  }
  return tree;
};

module.exports = deleteNode;
