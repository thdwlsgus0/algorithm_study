class Node{
  constructor(){
    this.data = data;
    this.children = [];
  }
  add(data){
    this.children.push(new Node(data));
  }
  remove(data){
    this.children = this.children.filter(child=>child.data === data? false:true);
  }
}