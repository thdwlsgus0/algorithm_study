const n = 6;
const toplogicalSort = (n, edges) => {
  // 위상 순서를 기록할 배열
  const topologicalOrder = [];
  
  // 각 정점의 진입 차수 기록
  const inDegree = Array(n).fill(0);

  // 인접 리스트로 그래프 생성
  const graph = Array(n).fill([]);
  for(let i=0; i<edges.length; i++){
    const [from, to] = edges[i];
    // 단방향 그래프이므로 한 번만 넣는다.
    graph[from].push(to);
    // 진입 차수 기록
    inDegree[to]++;
  }

  // 후보 정점들 저장
  const queue = [];
 
  for(let i=0; i<n; i++){
    if (inDegree[i] === 0) queue.push(i);
  }
}
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

console.log(toplogicalSort(n, edges));
