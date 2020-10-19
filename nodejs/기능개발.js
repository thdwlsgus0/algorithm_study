function removeArray(progresses, speeds, cnt){
   for(let i=0; i<cnt; i++){
       progresses.shift();
       speeds.shift();
   }
}
function getCntValue(progresses, checkValue, cnt){
    progresses.forEach((value, index, array)=>{
        if(array[index]>=100 && index===0 && !checkValue){
            cnt++;
            checkValue=true;
        }else if(checkValue && array[index]>=100){
            cnt++;
        }else if(checkValue && array[index] <100){
            checkValue=false;
        }
    });
    return cnt;
}
function solution(progresses, speeds){
    let answer = [];
    while(progresses.length!==0){
        let cnt = 0;
        let checkValue = false;
        progresses.forEach((value, index, array)=>{
            array[index]+=speeds[index]; 
        });
       cnt = getCntValue(progresses, checkValue, cnt);
       removeArray(progresses, speeds, cnt);
       if(cnt>0)answer.push(cnt);
    }
    return answer;
}
const progresses = [93,30,55];
const speeds = [1,30,5];
const progresses2 = [95,90,99,99,80,99];
const speeds2 = [1,1,1,1,1,1];
console.log(solution(progresses,speeds));