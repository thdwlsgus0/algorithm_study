const solution = (participant, completion) =>{
    participant.sort();
    completion.sort();
    for(let i in participant){
        if(completion[i] !== participant[i])return participant[i];
    }
    return participant[participant.length-1];
}
console.log(solution(["leo", "kiki","eden"], ["eden", "kiki"]));
console.log(solution(["marina", "josipa", "nikola", "vinko", "filipa"], ["josipa","filipa", "marina","nikola"]))
console.log(solution(["mislav","stanko", "mislav", "ana"], ["stanko", "ana", "mislav"]))