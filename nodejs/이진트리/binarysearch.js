class Node{
  constructor(data, left, right){
    this.data = data;
    this.left = left;
    this.right = right;
  }
  show(){
    return this.data;
  }
}
class BST{
  constructor(){
    this.root = null;
  }
  getRoot(){
    return this.root;
  }
  insert(data){
    let n = new Node(data, null, null);
    if(this.root == null){
      this.root = n;
    }
    else{
      let current = this.root;
      let parent;
      while(true){
        parent = current;
        if(data < current.data){
          current = current.left;
          if(current == null){
            parent.left = n;
            break;
          }
        }
        else{
          current = current.right;
          if(current == null){
            parent.right = n;
            break;
          }
        }
      }
    }
  }
  inOrder(node){
     if(!(node == null)){
       this.inOrder(node.left);
       console.log(node.show());
       this.inOrder(node.right);
     }
  }
  preOrder(node){
     if(!(node == null)){
       console.log(node.show());
       this.preOrder(node.left);
       this.preOrder(node.right);
     }
  }

}

const nums = new BST();
nums.insert(23);
nums.insert(45);
nums.insert(15);
nums.insert(37);
nums.insert(3);
nums.insert(99);
nums.insert(21);
nums.insert(40);
nums.insert(44);
nums.insert(1);
nums.insert(65);
nums.preOrder(nums.getRoot());
