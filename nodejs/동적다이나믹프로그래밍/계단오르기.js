const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const n = +input[0];
input.shift();
const dp = Array(n).fill(0);
for(let i=0; i<n; i++){
  input[i] = +input[i];
}
dp[0] = input[0];
dp[1] = input[0] + input[1];
dp[2] = Math.max(input[2] + input[0], input[1] + input[2]);
for(let i=3; i<n; i++){
  dp[i] = Math.max(dp[i-2]+ input[i], input[i-1] + dp[i-3] + input[i]);
}
console.log(dp[n-1]);