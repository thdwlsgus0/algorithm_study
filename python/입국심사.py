'''
https://programmers.co.kr/learn/courses/30/lessons/43238
입국심사 이분탐색
'''
def solution(n, times):
    left = 1  # 가장 빨리 끝나는 케이스 = 1분
    right = max(times) * n  # 가장 늦게 끝나는 케이스 = 심사관중 가장 느린사람이 n명을 다 검사할 때
    answer = 0
    while left <= right:
        people = 0
        mid = (left + right) // 2
        for time in times:
            people += mid // time

            if people >= n:  # 검사 가능한 사람수 >= 목표치 이면
                answer = mid  # 그 값이 답 일 수도 있으니까 저장
                right = mid - 1  # 답이 아닐 수 도 있으니까 right을 줄인다.
                break

        if people < n:  # 목표치 미달이면
            left = mid + 1  # left를 늘린다.
        pass
    return answer