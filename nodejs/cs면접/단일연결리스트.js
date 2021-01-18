class LinkedList {
  constructor(item){
    this.data = item;
    this.link = null;
  }
  addFirstItem(item){
    let newNode = new LinkedList(item);
    if(this.link===null){
      this.link = newNode;
    }else{
      newNode.link = this.link;
      this.link = newNode;
    }
  }
  addLastItem(item){
    let newNode = new LinkedList(item);
    let p = this;
    while(p.link !==null){
      p = p.link;
    }
    p.link = newNode;
  }
  deleteLastItem(){
    if(this.link===null)return null;
    let p = this;
    while(p.link.link!==null){
      p = p.link;
    }
    p.link = null;
  }
  deleteFirstItem(item){
    if(this.null) return null;
    const removeNode = this.link;
    this.link = removeNode.link;
  }
  print(){
    let p = this;
    while(p!==null){
      console.log(p.data);
      p = p.link;
    }
  }
}
// 앞에 추가 앞 제거
// let head = new LinkedList('head');
// head.addFirstItem(10);
// head.addFirstItem(20);
// head.addFirstItem(30);
// head.print();
// head.deleteFirstItem();
// head.print();


// 뒤에 추가 뒤 제거
let head = new LinkedList('head');
let cur = new LinkedList('cur');
head.addLastItem(10);
head.addLastItem(20);
