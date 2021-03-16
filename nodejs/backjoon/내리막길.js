const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const [n,m] = input[0].split(' ').map((v)=>+v);
const dx = [1,0,-1,0];
const dy = [0,1,0,-1];
const dfs = (x, y) => {
  if(x===n-1 && y ===m-1)return 1;
  if(dp[x][y] !== -1) return dp[x][y];

  dp[x][y] =0;
  for(let k=0; k<4; k++){
    const nextX = x + dx[k];
    const nextY = y + dy[k]; 
    if(nextX>=0 && nextX<n && nextY>=0 && nextY<m){
      if(input[x][y] > input[nextX][nextY]){
        dp[x][y] += dfs(nextX, nextY);
      }
    }
  }
  return dp[x][y];
}

input.shift();
const dp = Array.from(Array(n), ()=>Array(m).fill(-1));

for(let i=0; i<n; i++){
  input[i] = input[i].split(' ').map((v)=>+v);
}

dfs(0,0);
console.log(dp[0][0]);