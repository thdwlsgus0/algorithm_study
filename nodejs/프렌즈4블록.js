function solution(m, n, board) {
  let result = [];
  const answer = [];
  board = board.map((value)=>value.split(""));
  while(true){
      for(let i=0; i<m-1; i++){
      for(let j=0; j<n-1; j++){
          if(board[i][j]!==0 && 
             board[i][j]===board[i][j+1] &&
             board[i][j]===board[i+1][j] &&
             board[i][j]===board[i+1][j+1]
            ){
              result.push([i,j]);
            }
      }  
   }
   if(result.length===0){
     return answer.concat(...board).filter((v)=>v===0).length;
   }
   // 0으로 바꿔줌 
   for(let i=0; i<result.length; i++){
       const h = result[i][0];
       const w = result[i][1];
       board[h][w] = 0;
       board[h][w+1] = 0;
       board[h+1][w] = 0;
       board[h+1][w+1] = 0;
   }
   // 0의 위치를 덮어씌우는 부분
    for(let i=m-1; i>=0; i--){
        for(let j=0; j<n; j++){
            for(let k=i-1; k>=0; k--){
                if(board[i][j]===0 && board[k][j]!==0){
                    board[i][j] = board[k][j];
                    board[k][j] = 0;
                    break;
                }
            }
        }
    }
    result = [];
  }
}
const m = 4;
const n = 5;
const board = ["CCBDE", "AAADE", "AAABF", "CCBBF"];
console.log(solution(m,n,board));