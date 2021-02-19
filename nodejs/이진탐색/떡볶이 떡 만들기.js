const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const [n,m] = input[0].split(' ').map((v)=>+v);

input.shift();
let graph = input[0].split(' ').map((v)=>+v).sort((a,b)=>a-b);

let left = 0;
let right = Math.max(...graph);

let mid;
while(left <= right){
  let ans = 0;
  mid = Math.floor((left+right)/2);
  ans = graph.reduce((acc, cur)=>{
     if(cur-mid>0){
      return acc+cur-mid;
     }else{
       return acc;
     }
  },0);
  console.log(mid, ans);
  if(ans===m){
    console.log(mid);
    break;
  }else if(ans < m){
    right = mid-1;
  }else if(ans>m){
    left = mid+1;
  }
}

 
