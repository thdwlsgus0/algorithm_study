let array = [5, 7, 9, 0, 3, 1, 6, 2, 4, 8];

const quickSort = (array, start, end) =>{
  if(start >= end)return; 
  let pivot = Math.floor((start+end)/2);
  let left = start+1;
  let right = end;
  while(left <= right){
    while(array[pivot]>= array[left] && left<=end){
      left++;
    }
    while(array[pivot]<=array[right] && right>=left){
      right--;
    }
    if(left<=right){
      [array[left], array[right]] = [array[right], array[left]];
      left++;
      right--;
    }
  }
  quickSort(array, start+1, right);
  quickSort(array, left, end);
}
quickSort(array, 0, array.length-1);
console.log(array);