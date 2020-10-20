function divMod(n){
    let answer = [];
    while(n!=0){
        answer.push(n%3);
        n= parseInt(n/3);
    }
    return answer;
}
function solution(n) {
    let threeValue = parseInt(divMod(n).join(""),3);
    return threeValue;
}
console.log(solution(125));