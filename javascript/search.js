const search = function (tree, value) {
  if (tree === null) {
    return false;
  }
  if (tree.value === value) {
    return true;
  }
  if (tree.value > value) {
    return search(tree.left, value);
  } else {
    return search(tree.right, value);
  }
};

module.exports = search;
