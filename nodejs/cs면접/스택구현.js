class Stack {
  constructor(){
    this.store = [];
  }
  push(item){
    this.store.push(item);
  }
  pop(){
    return this.store.pop();
  }
  print(){
    this.store.map((v,i)=>{
       console.log(v);
    });
  }
}
const stack = new Stack();
stack.push(1);
stack.push(2);
stack.pop();
stack.print();