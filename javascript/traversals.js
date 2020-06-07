const performInOrderTraversal = function (tree, treeElements = []) {
  if (tree === null) {
    return;
  }
  performInOrderTraversal(tree.left, treeElements);
  treeElements.push(tree.value);
  performInOrderTraversal(tree.right, treeElements);
  return treeElements;
};

const performPreOrderTraversal = function (tree, treeElements = []) {
  if (tree === null) {
    return;
  }
  treeElements.push(tree.value);
  performPreOrderTraversal(tree.left, treeElements);
  performPreOrderTraversal(tree.right, treeElements);
  return treeElements;
};

const performPostOrderTraversal = function (tree, treeElements = []) {
  if (tree === null) {
    return;
  }
  performPostOrderTraversal(tree.left, treeElements);
  performPostOrderTraversal(tree.right, treeElements);
  treeElements.push(tree.value);
  return treeElements;
};

module.exports = {
  performInOrderTraversal,
  performPostOrderTraversal,
  performPreOrderTraversal,
};
