function solution(board, moves) {
  let result = [];
  let answer =0;
  for(let i=0; i<moves.length; i++){
      const currentIndex = moves[i]-1;
      for(let j=0; j<=board[currentIndex].length-1; j++){
          if(board[j][currentIndex] !==0){
              if(result.length===0){
                  result.push(board[j][currentIndex]);
              }else{
                  if(result[result.length-1] === board[j][currentIndex]){
                      result.pop();
                      answer+=2;
                  }
                  else{
                      result.push(board[j][currentIndex]);
                  }
              }
              board[j][currentIndex] = 0;
              break;
          }
      }
  }
  return answer;
}
const board = [[0,0,0,0,0],[0,0,1,0,3],[0,2,5,0,1],[4,2,4,4,2],[3,5,1,3,1]];
const moves = [1,5,3,5,1,2,1,4];
console.log(solution(board, moves));