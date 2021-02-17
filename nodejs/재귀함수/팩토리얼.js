const factorial_iterative = (n) =>{
  let result = 1;
  for(let i=1; i<=n; i++){
    result*=i;
  }
  return result;
}
const factorial_recursive = (n) =>{
  if(n<=1) return 1;
  return n * factorial_recursive(n-1);
}
console.log('반복적으로 구현', factorial_iterative(5));
console.log('재귀적으로 구현', factorial_recursive(5));