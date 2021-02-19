const ShellInsertionSort = (array, first, gap) =>{
  let i;
  let j;
  let key;
  let last = array.length - 1;
  for(i = first + gap; i <= last; i+=gap){
    key = array[i];
    for(j = i - gap; j >= first && array[j] > key; j -= gap){
      array[j+gap] = array[j];
    }
    array[j+gap] = key;
  }
}
const ShellSort = (array) =>{
  let i;
  let gap;
  let length = array.length;
  for(gap = parseInt(length/2); gap>0; gap= parseInt(gap/2)){
    if(gap%2===0) gap++;
  for(i=0; i<gap; i++){
    ShellInsertionSort(array, i, gap);
  }
}
};


const array = [3,2,6,1,5,4];
ShellSort(array);
console.log(array);