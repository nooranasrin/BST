const createNode = function (value) {
  return { value, left: null, right: null };
};

const insert = function (tree, value) {
  if (tree === null) {
    return createNode(value);
  }

  if (tree.value > value) {
    tree.left = insert(tree.left, value);
  } else {
    tree.right = insert(tree.right, value);
  }
  return tree;
};

const printInOrderTraversal = function (tree) {
  if (tree === null) {
    return;
  }
  printInOrderTraversal(tree.left);
  console.log(tree.value);
  printInOrderTraversal(tree.right);
};

const printPreOrderTraversal = function (tree) {
  if (tree === null) {
    return;
  }
  console.log(tree.value);
  printPreOrderTraversal(tree.left);
  printPreOrderTraversal(tree.right);
};

const printPostOrderTraversal = function (tree) {
  if (tree === null) {
    return;
  }
  printPostOrderTraversal(tree.left);
  printPostOrderTraversal(tree.right);
  console.log(tree.value);
};

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

const main = function () {
  const list = [10, 5, 15, 2, 6, 12, 16];
  const tree = list.reduce(insert, null);
  // printInOrderTraversal(tree);
  // printPreOrderTraversal(tree);
  // printPostOrderTraversal(tree);
  console.log(search(tree, 22));
  console.log(search(tree, 10));
};

main();
