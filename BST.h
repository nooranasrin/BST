#ifndef __BST_H_
#define __BST_H_

typedef struct node
{
  int value;
  struct node *left;
  struct node *right;
} Node;

typedef Node *Node_ptr;

typedef enum
{
  Failure,
  Success
}Status;

Node_ptr create_node(int value);
Node_ptr insert(Node_ptr tree, int value);
void printInOrderTraversal(Node_ptr tree);
void printPreOrderTraversal(Node_ptr tree);
void printPostOrderTraversal(Node_ptr tree);
Status search(Node_ptr tree, int value);

#endif