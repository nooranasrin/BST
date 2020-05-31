#include<stdio.h>
#include<stdlib.h>
#include "BST.h"

Node_ptr create_node(int value) {
  Node_ptr new_node = malloc(sizeof(Node));

  if(new_node == NULL) {
    return new_node;
  }

  new_node->value = value;
  new_node->left = NULL;
  new_node->right = NULL;
  return new_node;
}

Node_ptr insert(Node_ptr tree, int value) {
  if (tree == NULL) {
    return create_node(value);
  }

  if (tree->value > value) {
    tree->left = insert(tree->left, value);
  } else {
    tree->right = insert(tree->right, value);
  }
  return tree;
};

void printInOrderTraversal(Node_ptr tree) {
  if (tree == NULL) {
    return;
  }
  printInOrderTraversal(tree->left);
  printf("%d\n",tree->value);
  printInOrderTraversal(tree->right);
};

void printPreOrderTraversal(Node_ptr tree) {
  if (tree == NULL) {
    return;
  }
  printf("%d\n",tree->value);
  printPreOrderTraversal(tree->left);
  printPreOrderTraversal(tree->right);
};

void printPostOrderTraversal(Node_ptr tree) {
  if (tree == NULL) {
    return;
  }
  printPostOrderTraversal(tree->left);
  printPostOrderTraversal(tree->right);
  printf("%d\n",tree->value);
};

Status search(Node_ptr tree, int value) {
  if (tree == NULL) {
    return Failure;
  }
  if (tree->value == value) {
    return Success;
  }
  if (tree->value > value) {
    return search(tree->left, value);
  } else {
    return search(tree->right, value);
  }
};
