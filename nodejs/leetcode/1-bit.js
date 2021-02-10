/**
 * @param {number[]} bits
 * @return {boolean}
 */
var isOneBitCharacter = function(bits) {
  let answer = true;
  let index = 0;
  let bitMethod = 1;
  while(bits.length!==0){
      if(bits[index]===1){
          bits.splice(0, 2);
          bitMethod = 2;
      }else if(bits[index]===0){
          bits.splice(0, 1);
          bitMethod = 1;
      }
  }
  if(bitMethod===2)answer=false;
  return answer;
};
console.log(isOneBitCharacter([1,1,1,0]));