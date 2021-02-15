// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().split('\n');

// let [n,k] = input[0].split(' ').map((v)=>+v);
// let ans = 0;
// while(n>1){
//   if(n%k===0){
//     n= Math.floor(n/k);
//     ans++;
//     continue;
//   }
//   n-=1;
//   ans++;
// }
// console.log(ans);

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

let result = 0;
let [n,k] = input[0].split(' ').map((v)=>+v);

while(true){
  let target = Math.floor(n/k) * k;
  result+= (n - target);
  n = target;
  
  if(n<k)break;
  result++;
  n = Math.floor(n/k);
}
console.log(result-1);