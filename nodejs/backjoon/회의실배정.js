const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

input.splice(0,1);
input.splice(input.length-1, 1);
let timeTable = input.reduce((acc, cur)=>{
   const [startTime, endTime] = cur.split(' ');
   acc.push([+startTime, +endTime]);
   return acc;
},[]);
timeTable.sort((a,b)=>{
  if(a[1]!==b[1]){
    return a[1]-b[1];
  }else{
    return a[0]-b[0];
  }
});
let ans = 1;
let endTime = timeTable[0][1];
for(let i=1; i<timeTable.length; i++){
  if(timeTable[i][0] >= endTime){
    ans++;
    endTime = timeTable[i][1];
  }
}
console.log(ans);