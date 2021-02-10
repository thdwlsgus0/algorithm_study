const insertMaxHeap = (array, item) =>{
  array.push(item);
  let index = array.length - 1;
  while(index!==1 && item > array[parseInt(index/2)]){
    array[index] = array[parseInt(index/2)];
    index = parseInt(index/2);
  }
  array[index] = item;
}
const deleteMaxHeap = (heapArray) =>{
  let parent = 1; // index
  let child = 2; // 우선, 왼쪽 자식 index를 keep
  let item = heapArray[1];
  let last = heapArray.pop();
  while(child < heapArray.length-1){
    if(child < heapArray.length-1 && heapArray[child]< heapArray[child+1]){
      child++;
    }
    if(last >= heapArray[child]){
      break;
    }
    heapArray[parent] = heapArray[child];

    parent = child;
    child *=2;
  }
  heapArray[parent] = last;
  return item;
}