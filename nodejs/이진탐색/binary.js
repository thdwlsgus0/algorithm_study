const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const [n, target] = input[0].split(' ').map((v)=>+v);
let array = input[1].split(' ').map((v)=>+v);

const binary_search = (array, target, start, end) =>{
  if(start>end)return 0;
  let mid = Math.floor((start+end)/2);
  if(array[mid] === target)return mid;
  else if(array[mid]>target){
    return binary_search(array, target, start, mid-1);
  }else{
    return binary_search(array, target, mid+1, end);
  }
}
let result = binary_search(array, target, 0, n-1);
if(result === 0)console.log('원소가 존재하지 않습니다.');
else console.log(result+1);