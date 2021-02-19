const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const [n,m] = input[0].split(' ').map((v)=>+v);
const dx = [1,0,-1,0];
const dy = [0,1,0,-1];
const visited = Array.from(Array(n), ()=> Array(m).fill(0));
input.shift();
let ans = 0;
const dfs = (i,j) =>{
  visited[i][j] = 1;
  for(let k=0; k<4; k++){
    const ni = i+ dx[k];
    const nj = j+ dy[k];
    if(ni>=0 && ni<n && nj>=0 && nj<m){
      if(!visited[ni][nj] && input[ni][nj] === '0'){
        input[ni][nj]='1';
        dfs(ni,nj);
      }
    }
  }
}
for(let i=0; i<n; i++){
  for(let j=0; j<m; j++){
    if(!visited[i][j] && input[i][j] === '0'){
      ans++;
      dfs(i,j);
    }
  }
}
console.log(ans);