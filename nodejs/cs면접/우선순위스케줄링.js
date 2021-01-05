const priority = [
  {name:'p1', time:10, rank:3},
  {name:'p2', time:1, rank:1},
  {name:'p3', time:2, rank:4},
  {name:'p4', time:1, rank:5},
  {name:'p5', time:5, rank:2}
];
let sum = 0;
priority.sort((a,b)=>{
  return a.rank-b.rank;
}).map((v,i)=>{
   console.log(`${v.name}이 ${v.time}시간동안 수행됩니다.`);
   sum+=v.time;
});
console.log(`총 수행시간은 ${sum}입니다.`);