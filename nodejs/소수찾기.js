let answer = [];
const swap = (arr, i, n)=>{
    let temp = arr[n];
    arr[n] = arr[i];
    arr[i] = temp;
}
const getPrime = (arr, n, k)=>{

    if(n === arr.length-1){
        const str = arr.slice(0,k).join("");
        if(!answer.includes(str))answer.push(str);
        return;
    }else{
        for(let i=n; i<arr.length; i++){
            swap(arr, i, n);
            getPrime(arr, n+1, k); 
            swap(arr, i, n);
        }
        return answer;
    }
};
const isPrime = (n) =>{
   for(let i=2; i<=Math.sqrt(n); i++){
       if(n%i===0)return false;
   }
   return true;
}
function solution(numbers) {
    let count = 0;
    let answerArray = [];
    for(let i=0; i<numbers.length; i++){
       answerArray.push(getPrime(numbers.split(""), 0, i+1));
    }
    let answerZero = answerArray[0];
    let answerInt = answerZero
.map((value)=>Number(value))
.reduce((unique, item)=> unique.includes(item)? unique:[...unique, item],[]);
answerInt.forEach((value)=>{ if(isPrime(value) && value!==1 && value!==0)count++;});
    return count;
}