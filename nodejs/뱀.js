const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');
const dy = [-1,0,1,0];
const dx = [0,1,0,-1];

const n = +input[0];
const k = +input[1];
const visited = Array.from(Array(n), ()=>Array(n).fill(0));

input.shift();
input.shift();

let time = 0;
const directionInfo = [];
const graph = Array.from(Array(n), () => Array(n).fill(0));
const bfs = () => {
   let queue = [];
   queue.push([0,0,1]);
   visited[0][0] = 1;
   while(queue.length > 0){
     time++;
     let [r,c,direction] = [queue[0][0], queue[0][1], queue[0][2]];
     const nr = r + dy[direction];
     const nc = c + dx[direction];
    
     if((nr<0 || nr>=n || nc<0 || nc>=n) || visited[nr][nc])break;
     visited[nr][nc] = 1;

     if(graph[nr][nc] === 1){
       graph[nr][nc] =0;
     }else{
       const [y,x,dir] = queue.shift();
       visited[y][x] = 0;
     }

     if(time === directionInfo[0][0]){
        if(directionInfo[0][1] === 'D'){
          direction = (direction+1)%4;
        }else if(directionInfo[0][1] === 'L'){
          direction = (direction+3)%4;
        }
        directionInfo.shift();
     }

     queue.push([nr,nc,direction]);
   }
}
for(let i=0; i<k; i++){
  const [r,c] = input[i].split(' ').map((v)=>+v);
  graph[r][c] = 1;
  input.shift();
}
const l = +input[0];
input.shift();
for(let i=0; i<l; i++){
  const [x,c] = input[i];
  directionInfo.push([+x,c]);
}
bfs();
console.log(time);