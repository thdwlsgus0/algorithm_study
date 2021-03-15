const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');
const dy = [-1,0,1,0];
const dx = [0,1,0,-1];

let result = 0;
const [n,m] = input[0].split(' ').map((v)=>+v);
input.shift();
const [r,c,d] = input[0].split(' ').map((v)=>+v);
input.shift();

for(let i=0; i<input.length-1; i++){
  input[i] = input[i].split(' ').map((v)=>+v);
}

const bfs = (r, c, d) => {
   let queue = [];
   queue.push([r,c,d]);
   while(queue.length>0){
     const [nr, nc, dir] = queue.shift();
     // 1. 현재 위치 청소
     if(input[nr][nc] === 0){
       input[nr][nc] = 2;
       result++;
     }
     // 2. 현재 방향을 기준으로 왼쪽방향부터 탐색 
     let check = false;
     for(let k=0; k<4; k++){
       let nextDir = (dir+ (3-k))%4;
       let nextR = nr + dy[nextDir];
       let nextC = nc + dx[nextDir];
       if(nextR>=0 && nextR<n && nextC>=0 && nextC<m){
        if(input[nextR][nextC] === 0){
          queue.push([nextR, nextC, nextDir]);
          check = true;
          break;
       } 
       }
      
     }
     if(!check){
         // 후진 기능 
         let nextR = nr - dy[dir];
         let nextC = nc - dx[dir];
         if(nextR>=0 && nextR<n || nextC>=0 && nextC<m){
          if(input[nextR][nextC] !== 1){
            queue.push([nextR,nextC, dir]);
          }else{
            break;
          }
         }
     }
   }
}
bfs(r, c, d);
console.log(result);