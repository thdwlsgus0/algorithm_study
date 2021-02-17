const graph = [
  [],
  [2,3,8],
  [1,7],
  [1,4,5],
  [3,5],
  [3,4],
  [7],
  [2,6,8],
  [1,7]
]
const bfs = (graph, start, visited) =>{
  let queue = [start];
  visited[start] = 1;
  while(queue.length>0){
    const v = queue.pop();
    console.log(v);
    for(let element of graph[v]){
      if(!visited[element]){
        visited[element] = 1;
        queue.unshift(element);
      }
    }
  }
}
let visited = Array(9).fill(0);
bfs(graph, 1, visited);