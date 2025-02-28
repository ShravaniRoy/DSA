//A tree has one root node, has left and right nodes, leaves have no children
//A Binary Tree is tree, where it has atmost 2 children
//BST is a Binary Tree, where it has atmost 2 children but always left is smaller than
//parent and right is always greater than parent

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(val) {
    var newNode = new Node(val);
    if (this.root === null) {
      this.root = newNode;
      return this;
    } else {
      //we will traverse the tree to place the node in the correct position
      var current = this.root;
      while (true) {
        if (current.value === val) return this;
        if (current.value > val) {
          if (current.left === null) {
            current.left = newNode;
            return this;
          }
          //if there is a left node already, then we move to that position for checking further
          current = current.left;
        } else {
          if (current.right === null) {
            current.right = newNode;
            return this;
          }
          current = current.right;
        }
      }
    }
  }
  find(val){
    if(this.root === null) return -1;
    if(this.root.value === val) return 1;
    var currentNode = this.root;
    var found = -1;
    while(currentNode && found === -1){
        if(currentNode.value > val){
            currentNode = currentNode.left;
        }
        else if(currentNode.value < val){
            currentNode = currentNode.right;
        }
        else {
            found = 1;
        }
    }
    return found;
  }
}
class Node {
  constructor(val) {
    this.left = null;
    this.right = null;
    this.value = val;
  }
}

var tree = new BinarySearchTree();
tree.insert(10);
tree.insert(5);
tree.insert(13);
tree.insert(11);
tree.insert(2);
tree.insert(16);
tree.insert(7);
tree.insert(1);
tree.find(7);
tree.find(70);
