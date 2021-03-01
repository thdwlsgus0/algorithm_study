const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');


const [n,m] = input[0].split(' ').map((v)=>+v);
const dp = Array(m+1).fill(10001);
input.shift();
dp[0] = 0;
for(let i=0; i<n; i++){
  const data = +input[i];
  for(let j=data; j<=m; j++){
    if(dp[j-data] !== 10001){
      dp[j] = Math.min(dp[j], dp[j-data]+1);
    }
  }
}
if(dp[m]=== 10001){
  console.log(-1);
}else{
  console.log(dp[m]);
}