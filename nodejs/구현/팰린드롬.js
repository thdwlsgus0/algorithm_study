const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const len = +input[0];

input.shift();
const getBackStr = (str) => str.split('').reverse().join('');


for(let i=0; i<len; i++){
   // 대소문자 구분 안하기 위해서 모든 문자열을 소문자로 변환
   const str = input[i].toLowerCase();
   
   // 역으로 위치했을 때와 정으로 위치했을 때 같은지 비교 
   if(getBackStr(str) === str){
     console.log('Yes');
   }else{
     console.log('No');
   }
}