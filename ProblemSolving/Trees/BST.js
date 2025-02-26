//A tree has one root node, has left and right nodes, leaves have no children
//A Binary Tree is tree, where it has atmost 2 children
//BST is a Binary Tree, where it has atmost 2 children but always left is smaller than 
//parent and right is always greater than parent

class BinarySearchTree {
    constructor(){
        this.root = null;
    }
    insert(val){
        var newNode = new Node(val);
        if(this.root === null){
            this.root = newNode;
            return this;
        } else {
            //we will traverse the tree to place the node in the correct position
            var current = this.root;
            while(true){
                if(current.value === val) return undefined;
                if(current.value > val){
                    if(current.left === null){
                        current.left = newNode;
                        return this;
                    }  
                //if there is a left node already, then we move to that position for checking further
                current = current.left;
                    
                } 
                else {
                    if(current.right === null){
                        current.right = newNode;
                        return this;
                    }
                    current = current.right;
                    
                }
            }
        }
    }
}
class Node {
    constructor(){
        this.left = null;
        this.right = null;
        this.value = null;
    }
}

var tree = BinarySearchTree();
tree.insert(10);
tree.insert(5);
tree.insert(13);
tree.insert(11);
tree.insert(2);
tree.insert(16);
tree.insert(7);
tree.insert(1);