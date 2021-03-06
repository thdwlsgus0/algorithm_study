const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const n = +input[0];

const dp = Array(n).fill(0);
dp[0] = 1;
dp[1] = 1;
for(let i=2; i<=n; i++){
  dp[i] = dp[i-1] + dp[i-2];
  dp[i]%=10007;
}
console.log(dp[n]);