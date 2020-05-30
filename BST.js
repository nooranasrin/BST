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

const main = function () {
  const list = [10, 5, 15, 2, 6, 12, 16];
  const tree = list.reduce(insert, null);
  console.log(tree);
};

main();
