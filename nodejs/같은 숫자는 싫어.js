function solution(arr){
    let answer = [];
    return arr.filter((val,index)=> val!==arr[index+1]);
}
const arr = [1,1,3,3,0,1,1];
console.log(solution(arr));