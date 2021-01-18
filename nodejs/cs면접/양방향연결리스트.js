const head = new DoubleLinkedList('head');
const tail = new DoubleLinkedList('tail');
class DoubleLinkedList {
  constructor(item){
     this.item = item;
     this.prev = null;
     this.next = null;
     this.size = 0;
  }
  addFirstNode(item){
    let newNode = new DoubleLinkedList(item);
    newNode.next = head;
    if(head!==null) head.prev = newNode;
    head = newNode;
    this.size++;
    if(head.next === null) tail = newNode;
  }
  addLastNode(item){
    let newNode = new DoubleLinkedList(item);
    
  }
}
const numbers = new DoubleLinkedList();
numbers.addFirstNode(10);
numbers.addFirstNode(20);
numbers.addFirstNode(30);

