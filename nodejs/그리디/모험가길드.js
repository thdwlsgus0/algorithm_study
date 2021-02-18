const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const n = +input[0];
const arr = input[1].split(' ').map((v)=>+v);
let groupPerson = 0;
let ans = 0;
arr.sort((a,b)=>a-b);
for(let i=0; i<arr.length; i++){
  groupPerson++;
  if(groupPerson>= arr[i]){
      ans++;
      groupPerson=0;
  }
    
}
console.log(ans);