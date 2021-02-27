const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const n = +input[0];
input.shift();
const dp = Array(n).fill(0);
const arr = input[0].split(' ').map((v)=>+v);
dp[0] = arr[0];
dp[1] = Math.max(arr[0], arr[1]);
for(let i=2; i<=n; i++){
  dp[i] = Math.max(dp[i-1], dp[i-2] + arr[i]);
}
console.log(dp[n-1]);