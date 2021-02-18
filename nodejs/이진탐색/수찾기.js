const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const nList = input[1].split(' ').map((v)=>+v).sort((a,b)=>a-b);
const mList = input[3].split(' ').map((v)=>+v);

const binarySearch = (v) =>{
  let left = 0;
  let right = nList.length;
  while(left<=right){
    let mid = Math.floor((left+right)/2);
    if(nList[mid]===v){
      return true;
    }else if(nList[mid]<v){
      left = mid+1;
    }else{
      right = mid-1;
    }
  }
  return false;
}

mList.map((v)=>{
   if(binarySearch(v)){
      console.log(1);
   }else{
     console.log(0);
   }
});
