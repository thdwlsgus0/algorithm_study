const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');
let sum = 0;
let ans = 1;
let step =0;
const [ a, b, c ] = input[0].split(' ').map((v) => +v)
let visited = new Array(1501);
for(let i=0; i<visited.length; i++){
  visited[i] = new Array(1501)
}
sum = a+b+c;
if(sum%3!==0)ans = 0;

let que = [];
que.unshift([a,b]);
visited[a][b] = true;

while(que.length>0){
  step++;
  if(step>=400) break;
  const [A,B] = que.pop();
  const stones = [A,B,sum-A-B];
  for(let i=0; i<3; i++){
    for(let j=0; j<3; j++){
      if(stones[i] < stones[j]){
        let n1 = stones[i]*2;
        let n2 = stones[j] - stones[i];
        if(visited[n1][n2])continue;
        
        visited[n1][n2] = true;
        que.unshift([n1,n2]);
      }
    }
  }
}
if(sum%3===0 && visited[sum/3][sum/3])ans = 1;
else ans = 0;
console.log(ans);