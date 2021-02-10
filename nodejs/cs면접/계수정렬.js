const CountingSort = (array) =>{
  const arrayLen = array.length;
  let ans = "";
  let max = -1;
  for(let i=0; i<arrayLen; i++){
    max = Math.max(max, array[i]);
  }
  const countArray = Array(max+1).fill(0);
  for(let i=0; i<arrayLen; i++){
    countArray[array[i]]++;
  }
  console.log(countArray);
  for(let i=0; i<=max; i++){
    for(let j=0; j<countArray[i]; j++){
      if(countArray[i]>0){
        ans= ans + i +" ";
      }
    }
  }
  return ans;
}
const test = [3,4,0,1,2,4,2,4,10];
console.log(CountingSort(test));
