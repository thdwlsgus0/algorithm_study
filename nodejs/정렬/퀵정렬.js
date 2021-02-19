let array = [5, 7, 9, 0, 3, 1, 6, 2, 4, 8];

const quickSort = (array, start, end) =>{
  if(start >= end)return;
  pivot = start;
  left = start+1;
  right = end;
  while(left<=right){
    while(left<=end && array[left] <= array[pivot]){
      left++;
    }
    while(right>start && array[right]>= array[pivot]){
      right--;
    }
    if(left>right){
      [array[right], array[pivot]] = [array[pivot], array[right]];
    }else{
      [array[right], array[left]] = [array[left], array[right]];
    }
  }
  quickSort(array, start, right-1);
  quickSort(array, right+1, end);
}
quickSort(array, 0, array.length-1);
console.log(array);