const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const [n,m] = input[0].split(' ').map((v)=>+v);
const graph = input.slice(1).map((v)=>v.split('').map((z)=>+z));
const dx = [-1,0,1,0];
const dy = [0,1,0,-1];
const dist = Array.from(Array(n), ()=> Array(m).fill(0));
const bfs = () => {
  const queue = [];
  queue.push([0,0]);
  while(queue.length>0){
    const [x,y] = queue.shift();
    for(let k=0; k<4; k++){
      const nx = x+dx[k];
      const ny = y+dy[k];
      if(nx>=0 && nx<n && ny>=0 && ny<m && dist[nx][ny] === 0){
          if(graph[nx][ny] === 1){
            queue.push([nx,ny]);
            dist[nx][ny] = dist[x][y]+1;
          }else{
            queue.unshift([nx,ny]);
            dist[nx][ny] = dist[x][y];
          }
      }
    }
  }
  return dist[n-1][m-1];
}
console.log(bfs());
console.log(dist);