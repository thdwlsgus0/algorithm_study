'''
https://programmers.co.kr/learn/courses/30/lessons/68646\
풍선 터트리기
'''

def solution(a):
    answer = 2 #어차피 양쪽은 가능
    leftMin, rightMin = a[0], a[-1] #양쪽을 각각 최솟값으로 두고 탐색

    for i in range(1, len(a) - 1):
        if leftMin > a[i]:
            answer += 1
            leftMin = a[i]
        if a[-1 - i] < rightMin:
            answer += 1
            rightMin = a[-1 - i]

    return answer if leftMin != rightMin else answer - 1 #leftMin 과 rightMin이 중복되는 경우를 제외하고 반환