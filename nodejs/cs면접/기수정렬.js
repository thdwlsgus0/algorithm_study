const BUCKETS = 10;
const DIGITS = 2;
// 이 부분을 수정하면 더 큰 자리 정수도 정렬이 가능합니다.

const RadixSort = (array) =>{
  const queues = Array.from({length: BUCKETS}, () => []);
  const arrLen = array.length;
  let factor = 1;

  for(let i=0; i<DIGITS; i++){
    for(let j=0; j<arrLen; j++){
      queues[parseInt((array[j] / factor)%10)].push(array[j]);
    }
    for(let j=0, arrIdx = 0; j<BUCKETS; j++){
       while(queues[j].length){
         array[arrIdx++] = queues[j].shift();
       }
    }
    factor*=10;
  }
}
const test = [28, 3, 39, 81, 6, 72, 38, 26, 8, 5];
RadixSort(test);
console.log(test);