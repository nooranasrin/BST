#include<stdio.h>
#include "BST.h"

int main(void) {
  Node_ptr tree = insert(NULL, 10);
  tree = insert(tree, 5);
  tree = insert(tree, 15);
  tree = insert(tree, 4);
  tree = insert(tree, 6);
  tree = insert(tree, 16);
  tree = insert(tree, 14);
  // printInOrderTraversal(tree);
  // printPreOrderTraversal(tree);
  // printPostOrderTraversal(tree);
  // printf("%d \n", search(tree, -2));
  return 0;
}