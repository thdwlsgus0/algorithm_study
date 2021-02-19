const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

const di = [0,1,0,-1,0,1,-1,-1,1];
const dj = [0,0,1,0,-1,1,1,-1,-1];

let personQ = [];
let visited = Array.from(Array(8), () => Array(8).fill(0));
const safe = (i,j) =>{
  return (i<0 || i>=8 || j<0 || j>=8)? false:true; 
}
let graph = Array.from(Array(8), () => Array(8).fill(0)); 
const init = () =>{
  for(let i=0; i<8; i++){
    for(let j=0; j<8; j++){
      graph[i][j] = input[i][j];
    }
  }
}
const move = () =>{
  for(let i=7; i>=0; i--){
    for(let j=7; j>=0; j--){
      if(i===0){
        graph[i][j] = '.'; 
      }else{
        graph[i][j] = graph[i-1][j];
      }
    }
  }
}

const bfs = () =>{
    while(personQ.length>0){
      const size = personQ.length;
      for(let l=0; l<size; l++){
        const [ni, nj] = personQ.pop();
        if(graph[ni][nj]==='#')continue;
        for(let k=0; k<9; k++){
          const newI = ni+di[k];
          const newJ = nj+dj[k];
          if(!safe(newI, newJ))continue;
          if(newI === 0 && newJ === 7){
            return true;
          }
          if(!visited[newI][newJ] && graph[newI][newJ] !== '#'){
            visited[newI][newJ] = 1;
            personQ.unshift([newI,newJ]);
          }
        }
      }
      move();
  }
  return false;
}

// 초기 벽의 위치 추가
init();
personQ.unshift([7,0]);
if(bfs()){
  console.log(1);
}else{
  console.log(0);
}
