const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');
const t = +input[0];
let ans = 0;
input.shift();

const maxValue = (dp, n, m) =>{
  let dpArr = Array.from(Array(n), () => Array(m).fill(0));

  for(let i=0; i<dp.length; i++){
    dpArr[i][0] = dp[i][0];  
  }
  for(let i=1; i<dp[0].length; i++){
    for(let j=0; j<dp.length; j++){
       if(j === 0){
         dpArr[j][i] = dp[j][i] + Math.max(dpArr[j][i-1], dpArr[j+1][i-1]);
       }else if(j===1){
         dpArr[j][i] = dp[j][i] + Math.max(dpArr[j][i-1], dpArr[j+1][i-1], dpArr[j-1][i-1]);
       }else if(j===2){
         dpArr[j][i] = dp[j][i] + Math.max(dpArr[j][i-1], dpArr[j-1][i-1]); 
       }
    }
  }
  return dpArr;
}
for(let i=0; i<t; i++){
  const [n, m] = input[i].split(' ').map((v)=>+v);
  input.shift();
  const dp = Array.from(Array(n), () => Array(m).fill(0));
  const arr = input[0].split(' ').map((v)=>+v);
  let index = 0;
  for(let j=0; j<n; j++){
    for(let k=0; k<m; k++){
      dp[j][k] = arr[index++];
    }
  }
  input.shift();
  for(let i=0; i<dp.length; i++){
    ans = Math.max(ans, maxValue(dp,n,m)[i][dp[0].length-1]);
  }
  console.log(ans);
}
