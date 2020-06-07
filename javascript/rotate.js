const rightRotate = function (tree, value) {
  if (tree === null) {
    return tree;
  }
  if (tree.value > value) {
    tree.left = rightRotate(tree.left, value);
  } else if (tree.value < value) {
    tree.right = rightRotate(tree.right, value);
  } else {
    if (tree.left === null) {
      return tree;
    }
    let pivot = tree.left;
    tree.left = pivot.right;
    pivot.right = tree;
    tree = pivot;
  }
  return tree;
};

const leftRotate = function (tree, value) {
  if (tree === null) {
    return tree;
  }
  if (tree.value > value) {
    tree.left = leftRotate(tree.left, value);
  } else if (tree.value < value) {
    tree.right = leftRotate(tree.right, value);
  } else {
    if (tree.right === null) {
      return tree;
    }
    let pivot = tree.right;
    tree.right = pivot.left;
    pivot.left = tree;
    tree = pivot;
  }
  return tree;
};

module.exports = { leftRotate, rightRotate };
