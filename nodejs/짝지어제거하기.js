const solution = (s)=>{
    let stack = [];
    s.split('').forEach(element => { 
        if(stack.length!==0){
            if(element === stack[stack.length-1])stack.pop();
            else stack.push(element);
        }else stack.push(element);
     });
     return stack.length===0?1:0;
}
let s = 'cdcd';
console.log(solution(s));