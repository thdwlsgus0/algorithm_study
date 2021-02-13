const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');
let visited; 
let first, second, third;
let flag;
let q;
const bfs = () =>{
  visited[0][0] = 1;
  q.unshift([0,0,0]);
  while(q.length>0){
    const [fI, sI, tI] = q.pop();
    if(tI === third.length){
        flag = true;
        return;
    }
    if(!visited[fI+1][sI] && third[tI] === first[fI]){
      visited[fI+1][sI] = 1;
      q.unshift([fI+1, sI, tI+1]);
    }
    if(!visited[fI][sI+1] && third[tI] === second[sI]){
      visited[fI][sI+1] = 1;
      q.unshift([fI, sI+1, tI+1]);
    }
  }
}
for(let i=1; i<=+input[0]; i++){
  [first, second, third] = input[i].split(' ');
  visited = Array.from(Array(202), () => Array(202).fill(0));
  flag = false;
  q = [];
  bfs();
  if(flag){
    console.log(`Data set ${i}: yes`);
  }else{
    console.log(`Data set ${i}: no`);
  }
}