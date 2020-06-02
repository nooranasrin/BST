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
  if(tree == NULL) {
    return create_node(value);
  }

  Node_ptr current_tree = tree;
  Node_ptr previous;
  while (current_tree != NULL) {
    previous = current_tree;
    if (current_tree->value > value) {
      current_tree = current_tree->left;
    }
    else {
      current_tree = current_tree->right;
    }
  }

  if (previous->value > value) {
    previous->left = create_node(value);
  }
  else {
    previous->right = create_node(value);
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
  while(tree != NULL) {
    if(tree->value == value) {
      return Success;
    }
    if (tree->value > value) {
      tree = tree->left;
    }
    else {
      tree = tree->right;
    }
  }
  return Failure;
};
