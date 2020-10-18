// 프로그래머스 https://programmers.co.kr/learn/courses/30/lessons/12917 문자열 내림차순 정렬하기
function solution(s) {
  return s
    .split("")
    .sort((a, b) => {
      if (a > b) return -1;
      if (b > a) return 1;
      return 0;
    })
    .join("");
}
