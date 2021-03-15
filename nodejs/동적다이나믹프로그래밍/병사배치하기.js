const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const n = +input[0];
input.shift();
const arr = input[0].split(' ').map((v)=>+v).reverse();
const dp = Array(n).fill(1);
for(let i=0; i<n; i++){
  for(let j=0; j<=i; j++){
    if(arr[i] > arr[j]){
       dp[i] = Math.max(dp[i], dp[j]+1);
    }
  }
}
console.log(dp);
console.log(n - Math.max(...dp));