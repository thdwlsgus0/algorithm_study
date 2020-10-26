'''
https://programmers.co.kr/learn/courses/30/lessons/49189
가장 먼 노드 _ 그래프
'''
from collections import deque
def bfs(route, n):
    visited = [False] * (n + 1)
    cnt = [0] * (n + 1)
    q = deque()
    q.append(1)
    distance = 0

    while q:
        end = len(q)
        for i in range(end):
            front = q.popleft()

            if visited[front] == False:
                visited[front] = True
                for a in route[front]:
                    q.append(a)
                cnt[front] = distance
        distance += 1
        print('cnt : ', cnt)
    return cnt

def solution(n, edge):
    answer = []
    route = [[] for i in range(n + 1)]
    print(route)
    for start, end in edge:
        route[start].append(end)
        route[end].append(start)
    print(route)
    answer = bfs(route, n)
    return answer.count(max(answer))