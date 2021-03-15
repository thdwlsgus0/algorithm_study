const solution = (n) => {
  let answer = 0;
  if(n===2) return 1;

  answer += Math.pow(n-1, 2);

  for(let i=3; i<=n; i++){
    answer += Math.pow(n-i+1, 2) * (i-1);
  }

  return answer;
}
console.log(solution(5));