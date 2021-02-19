const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

let [n,k] = input[0].split(' ').map((v)=>+v);
let ans = 0;
for(let i=1; i<input.length; i++){
  input[i] = +input[i];
}

for(let i=input.length-2; i>=1; i--){
   if(Math.floor(k/input[i])<=0){
     continue;
   }
   ans += Math.floor(k/input[i]);
   k%=input[i];
}
console.log(ans);