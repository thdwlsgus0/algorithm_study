const info = []
const readline = require('readline')
readline.createInterface({
    input: process.stdin,
    output: process.stdout
  })
  .on('line', (line) => {
    info.push(line.split(/\s+/).map((n) => +n))
  })
  .on('close', () => {
    solve()
    process.exit()
  })

const getParent = (parent, x) => {
  if(parent[x] === x) return x;
  return parent[x] = getParent(parent, parent[x]);
}
const union = (parent, u, v) => {
  u = getParent(parent, u);
  v = getParent(parent, v);
  parent[v] = u;
}

const find = (parent, u, v) => {
  u = getParent(parent, u);
  v = getParent(parent, v);
  if(u === v) return 1;
  else return 0;
}
const solve = () => {
  const [n,m] = info[0];
  const input = info.slice(1);
  const parent = Array.from({length:n+1}, (_, i)=> i);
  let answer = '';
  for(let i=0; i<m; i++){
    const [operation, a, b] = input[i];
    if(operation===0){
       union(parent, a, b);
    }else if(operation === 1){
      if(find(parent, a, b)){
        answer+='YES\n';
      }else{
        answer+='NO\n';
      }
    }
  }
  console.log(answer);
}
