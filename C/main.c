#include<stdio.h>
#include "BST.h"

int main(void) {
  Node_ptr tree = insert(NULL, 10);
  tree = insert(tree, 5);
  tree = insert(tree, 15);
  tree = insert(tree, 2);
  tree = insert(tree, 6);
  tree = insert(tree, 16);
  tree = insert(tree, 12);
  // printInOrderTraversal(tree);
  // printPreOrderTraversal(tree);  
  // printPostOrderTraversal(tree);
  // printf("%d \n", search(tree, 17));
  // printPreOrderTraversal(tree);
  tree = left_rotate(tree, 10);
  printPreOrderTraversal(tree);
  return 0;
}