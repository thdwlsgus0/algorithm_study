const timeSlice = 4;

const process = [24,3,3];
let idx = 0;
while(process.length!==0){
  process[idx]-=timeSlice;
  console.log(process[idx]);
  if(process[idx]<=0)process.splice(idx,1);
  idx= (idx+1)%process.length;
  
}