const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const [n,m] = input[0].split(' ').map((v)=>+v);
input.shift();
const edges = [];
const topologicalOrder = [];
const topologicalSort = (n, m, edges) => {

  const inDegree = Array(n).fill(0);
  const graph = Array.from({length: n}, () => []);
  for(let i=0; i<m; i++){
    const [from,to] = edges[i];
    graph[from-1].push(to-1);

    inDegree[to-1]++;
  }
  const queue = [];
  for(let i=0; i<n; i++){
    if(inDegree[i] === 0)queue.push(i); 
  }
  for(let i=0; i<n; i++){
    if(queue.length === 0)return false;
    const now = queue.shift();
    topologicalOrder.push(now+1);
    for(let j=0; j<graph[now].length; j++){
      const next = graph[now][j];
      inDegree[next]--;

      if(inDegree[next] === 0) queue.push(next);
    }
  }
  return topologicalOrder;
}
for(let i=0; i<m; i++){
  edges.push(input[i].split(' ').map((v)=>+v));
}
let str ='';
topologicalSort(n,m,edges);
for(let i=0; i<topologicalOrder.length; i++){
  str+=topologicalOrder[i]+' ';
}
console.log(str);