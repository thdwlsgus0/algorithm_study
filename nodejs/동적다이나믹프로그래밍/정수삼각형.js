const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const n = +input[0];
const arr = input.slice(1).map((v)=>v.split(' ').map((z)=>+z));
const dp = Array.from(Array(n), () => Array(n).fill(0));

dp[0][0] = input[0][0];
for(let i=1; i<n; i++){
  for(let j=0; j<=i; j++){
    if(j===0)dp[i][j] = dp[i-1][j]+input[i][j];
    else if(j===i)dp[i][j] = dp[i-1][j-1]+input[i][j];
    else{
      dp[i][j] = Math.max(input[i][j] + Math.max(dp[i-1][j-1], dp[i-1][j]));
    }
  }
}

console.log(Math.max(...input[input.length-1]));