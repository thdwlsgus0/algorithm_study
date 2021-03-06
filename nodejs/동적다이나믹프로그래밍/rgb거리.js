const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

const n = +input[0];
input.shift();

const dp = Array.from(Array(n), () => new Array(3));
for(let i=0; i<n; i++){
  input[i] = input[i].split(' ').map((v)=>+v);
}
for(let i=0; i<3; i++){
  dp[0][i] = input[0][i];
}
let ans = Infinity;
for(let i=1; i<n; i++){
  for(let j=0; j<3; j++){
    if(j===0){
      dp[i][j] = Math.min(input[i][j] + Math.min(dp[i-1][1], dp[i-1][2]));
    }else if(j===1){
      dp[i][j] = Math.min(input[i][j] + Math.min(dp[i-1][0],dp[i-1][2]));
    }else if(j===2){
      dp[i][j] = Math.min(input[i][j] + Math.min(dp[i-1][0],dp[i-1][1]));
    }
  }
}
for(let i=0; i<3; i++){
  ans = Math.min(ans, dp[n-1][i]);
}
console.log(ans);