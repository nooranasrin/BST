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
  Node_ptr *new_node_address;
  while (current_tree != NULL) {
    if (current_tree->value > value) {
      new_node_address = &current_tree->left;
      current_tree = current_tree->left;
    }
    else {
      new_node_address = &current_tree->right;
      current_tree = current_tree->right;
    }
  }

  *new_node_address = create_node(value);
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

int find_min(Node_ptr tree) {
  Node_ptr currNode = tree->right;
  while (currNode->left != NULL) {
    currNode = currNode->left;
  }
  return currNode->value;
};

Node_ptr delete_node(Node_ptr tree, int value) {
  if (tree == NULL) {
    return tree;
  }

  if (value < tree->value) {
    tree->left = delete_node(tree->left, value);
  } else if (value > tree->value) {
    tree->right = delete_node(tree->right, value);
  } else {
    if (tree->left == NULL && tree->right == NULL) {
      tree = NULL;
      return tree;
    }
    else if(tree->left == NULL) {
      Node_ptr temp = tree;
      tree = tree->right;
      free(temp);
    }
    else if(tree->right == NULL) {
      Node_ptr temp = tree;
      tree = tree->left;
      free(temp);
    } else {
      tree->value = find_min(tree);
      tree->right = delete_node(tree->right, tree->value);
    }
  }
  return tree;
};

Node_ptr right_rotate(Node_ptr tree, int value) {
  if (tree == NULL) {
    return tree;
  }
  if (tree->value > value) {
    tree->left = right_rotate(tree->left, value);
  } else if (tree->value < value) {
    tree->right = right_rotate(tree->right, value);
  } else {
    if (tree->left == NULL) {
      return tree;
    }
    Node_ptr pivot = tree->left;
    tree->left = pivot->right;
    pivot->right = tree;
    tree = pivot;
  }
  return tree;
};

Node_ptr left_rotate(Node_ptr tree, int value) {
  if (tree == NULL) {
    return tree;
  }
  if (tree->value > value) {
    tree->left = left_rotate(tree->left, value);
  } else if (tree->value < value) {
    tree->right = left_rotate(tree->right, value);
  } else {
    if (tree->right == NULL) {
      return tree;
    }
    Node_ptr pivot = tree->right;
    tree->right = pivot->left;
    pivot->left = tree;
    tree = pivot;
  }
  return tree;
};