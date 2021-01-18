const v = [1,2,3,4,5];
const e = [
  [1,2],
  [1,5],
  [2,5],
  [2,3],
  [3,4],
  [2,4],
  [4,5]
];

const list = Array.from({length: v.length+1}, () => []);
const visited = Array(5).fill(false);
for(let i=0; i<e.length; i++){
      const from = e[i][0];
      const to = e[i][1];
      
      list[from].push(to);
      list[to].push(from);
}
console.log(list);
const dfs = (nowVertex) =>{
  visited[nowVertex] = true;
  console.log(nowVertex);
  for(let i=0; i<list[nowVertex].length; i++){
    const nextVertex = i;
    if(!visited[nextVertex]){
      dfs(nextVertex);
    }
  }
} 
dfs(0);
