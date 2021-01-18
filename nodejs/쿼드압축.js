let one = 0;
let zero = 0;
const divide = (n, x, y, arr) =>{
    if(isSame(n, x, y, arr)){
        if(arr[y][x] === 1)one++;
        else zero++;
        return;
    }
    console.log(n, x, y, arr);
    divide(Math.floor(n/2), x, y, arr);
    divide(Math.floor(n/2), x+n/2, y, arr);
    divide(Math.floor(n/2), x, y+n/2, arr);
    divide(Math.floor(n/2), x+n/2, y+n/2, arr);
}
const isSame = (n, x, y, arr) =>{
    const criteria = arr[y][x];
    for(let i=y; i<y+n; i++){
        for(let j=x; j<x+n; j++){
            if(arr[i][j] !== criteria) return false;
        }
    }
    return true;
}
function solution(arr) {
    console.log(arr.length);
    divide(arr.length-1, 0,0,arr);
    answer.push(zero, one);
    return answer;
}
const arr = [[1,1,0,0],[1,0,0,0],[1,0,0,1],[1,1,1,1]];
solution(arr);
