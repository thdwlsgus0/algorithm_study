const n = 6;
const edges = [
  [0,2],
  [0,3],
  [1,3],
  [1,4],
  [2,3],
  [2,5],
  [3,5],
  [4,5]
];

const topologicalSort = (n, edges) => {
  const topologicalOrder = [];
  
  const inDegree = Array(n).fill(0);

  const graph = Array.from({length: n}, () => []);

  for(let i=0; i<edges.length; i++){
    const [from, to] = edges[i];
    graph[from].push(to);

    inDegree[to]++;
  }
  console.log(graph);
  const queue = [];

  for(let i=0; i<n; i++){
    if(inDegree[i] === 0) queue.push(i);
  }
  for(let i=0; i<n; i++){
    if(queue.length === 0) return false;
    const now = queue.shift();
    topologicalOrder.push(now);
    for(let j=0; j<graph[now].length; j++){
      const next = graph[now][j];
      inDegree[next]--;

      if(inDegree[next] === 0) queue.push(next);
    }
  }
  return topologicalOrder;
}
topologicalSort(n, edges);