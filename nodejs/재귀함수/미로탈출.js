const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const [n,m] = input[0].split(' ').map((v)=>+v);
const dx = [1,-1,0,0];
const dy = [0,0,1,-1];
let graph = Array.from(Array(n), ()=>Array(m).fill(0));

input.shift();
for(let i=0; i<n; i++){
  for(let j=0; j<m; j++){
    graph[i][j] = +input[i][j];
  }
}
const bfs = () =>{
  let queue = [];
  queue.unshift([0,0]);
  while(queue.length>0){
    const [x,y] = queue.pop();
    for(let k=0; k<4; k++){
      const nextX = x + dx[k];
      const nextY = y + dy[k];
      if(nextX<0 || nextX>=n || nextY<0 || nextY>=m)continue;
      if(+graph[nextX][nextY] === 0)continue;
      if(graph[nextX][nextY] === 1){
        graph[nextX][nextY]= graph[x][y]+1;
        queue.unshift([nextX, nextY]);
      }
    }
  }
  return graph[n-1][m-1];
}
console.log(bfs());
