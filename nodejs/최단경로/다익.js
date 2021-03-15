const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');
const INF = infinity;

// n과 m을 받는다.
const [n,m] = input[0].split(' ').map((v)=>+v);
input.shift();

// 시작 정점을 받는다.
const start = +input[0];
// 각 노드에 연결되어 있는 노드에 댛ㄴ 정보를 담는 리스트 생성하기
const graph = Array(n+1).fill([]);

// 방문한 적이 있는지 없는지 체크하는 목적의 리스트를 만들기
const visited = Array(n+1).fill(false);

// 최단 거리 테이블을 모두 무한으로 초기화함.
const distance = Array(n+1).fill(INF);

for(let i=1; i<m; i++){
  const [a,b,c] = input[i].split(' ').map((v)=>+v);
  // a번 노드에서 b번 노드로 가는 비용이 c라는 뜻
  graph[a].push([b,c]);
}

// 방문하지 않은 노드 중에서 가장 짧은 노드를 구해줍니다.
const getSmallestNode = () => {
  let minValue = INF;
  let id = 0;
  for(let index = 1; index<=n; index++){
    if(distance[index]< minValue && !visited[index]){
      minValue = distance[index];
      id = index;
    }
  }
  return id;
}

const dijkstra = (start) => {
  distance[start] = 0;
  visited[start] = true;
  for(let j in graph[start]){
    distance[j[0]] = j[1];
  }
  for(let i=0; i<=n-2; i++){
    // 현재 최단 거리가 가장 짧은 노드를 꺼내서, 방문 처리
    const now = getSmallestNode();
    visited[now] = true;

    // 현재 노드와 연결된 다른 노드를 확인
    for(let j in graph[now]){
      const cost = distance[now] + j[1];
      if(cost < distance[j[0]])distance[j[0]] = cost;
    }
  }
}
dijkstra(start);
for(let i=1; i<=n; i++){
  if(distance[i] === INF){
    console.log('INFINITY');
  }else{
    console.log(distance[i]);
  }
}


