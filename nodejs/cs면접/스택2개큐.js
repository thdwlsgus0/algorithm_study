class Stack {
  constructor() {
    this.store = [];
  }
  
  push(item) {
    this.store.push(item);
  }
  
  pop() {
    return this.store.pop();
  }
  
  print(){
    this.store.map((v,i)=>{
       console.log(v);
    });
  }
  shiftStacks(){
    
  }
}
let arr = [1,2,3];
const stack1 = new Stack(); // enqueue stack
const stack2 = new Stack(); // dequeue stack
if(stack1)