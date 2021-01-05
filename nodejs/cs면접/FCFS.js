const process = [
 {name:'p1', arriveTime:0,  burstTime:24},
 {name:'p2', arriveTime:1, burstTime:3},
 {name:'p3', arriveTime:2, burstTime:3}
];
const Scheduling = ()=>{
  let totalTime = 0;
  let waitTime = [];
  process.map((v,i)=>{
    if(i===0)waitTime.push(v.arriveTime);
    else{
      waitTime.push(totalTime-v.arriveTime);
    }
    totalTime+=v.burstTime;
  });
  const waitAvgTime = waitTime.reduce((acc,cur)=>{
     return acc+cur;
  }, 0);
  console.log(`총 걸린시간: ${totalTime}ms 평균 대기시간 : ${waitAvgTime/waitTime.length}ms`);
}
Scheduling();

