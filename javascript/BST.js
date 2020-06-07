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

const performInOrderTraversal = function (tree, treeElements = []) {
  if (tree === null) {
    return;
  }
  performInOrderTraversal(tree.left, treeElements);
  // console.log(tree.value);
  treeElements.push(tree.value);
  performInOrderTraversal(tree.right, treeElements);
  return treeElements;
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

const main = function () {
  const list = [10, 5, 15, 2, 6, 12, 16];
  let tree = list.reduce(insert, null);
  // console.log(inOrderTraversal(tree));
  // printPreOrderTraversal(tree);
  // printPostOrderTraversal(tree);
  // console.log(search(tree, 22));
  // console.log(search(tree, 10));
  // tree = deleteNode(tree, 10);
  // console.log(tree);
  // printInOrderTraversal(tree);
  // console.log('-----------------------------');
  // tree = leftRotate(tree, 10);
  // printPreOrderTraversal(tree);
};

main();

module.exports = { performInOrderTraversal, insert };
