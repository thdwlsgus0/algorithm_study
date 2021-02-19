const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const binarySearch = (arr, m) =>{
  let left = 0;
  let right = 0;
  let mid;
  let ans=0;
  for(let i=0; i<arr.length; i++){
     right = Math.max(arr[i], right);
  }
  while(left <= right){
    let sum = 0;
    mid = Math.floor((left+right)/2);
    sum = arr.reduce((acc, cur) => {
      if(cur-mid>0){
        return acc+cur-mid;
      }else{
        return acc;
      }
    },0);
    if(sum >= m){
      if(ans<mid){
        ans = mid;
      }
      left = mid+1;
    }else if(sum<m){
      right = mid-1;
    }
  }
  return ans;
}

const [n, m] = input[0].split(' ').map((v)=>+v);
const arr = input[1].split(' ').map((v)=>+v).sort((a,b)=>a-b);
console.log(binarySearch(arr, m));