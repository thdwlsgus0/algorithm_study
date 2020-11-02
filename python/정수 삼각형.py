'''
https://programmers.co.kr/learn/courses/30/lessons/43105?language=python3
정수 삼각형 DP
'''
def solution(triangle):
    for i in range(1,len(triangle)):
        for j in range(len(triangle[i])):
            if j == 0:
                triangle[i][j] += triangle[i-1][j]
            elif j == i:
                triangle[i][j] += triangle[i-1][j-1]
            else:
                triangle[i][j] += max(triangle[i-1][j-1],triangle[i-1][j])
    return max(triangle[-1])