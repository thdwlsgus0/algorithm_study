'''
https://programmers.co.kr/learn/courses/30/lessons/43163
단어변환 DFS/BFS
'''
import collections
route = dict()
def 하나차이(str1, str2):
    cnt = 0
    for i in range(len(str1)):
        if str1[i] != str2[i]:
            cnt += 1
        if cnt >= 2:
            return False
    return False if cnt == 0 else True

def connect(target, words):
    global route
    for word in words:
        if 하나차이(target, word):
            route[target] = route.get(target, []) + [word]
    pass

def bfs(begin, target):
    # target이 나왔을때 distance 를 append,
    answer = []
    visit = [[i, 0] for i in route.keys()]
    visit = dict(visit)
    distance = 0
    q = collections.deque()
    q.append(begin)
    while q:
        end = len(q)
        for i in range(end):
            front = q.popleft()

            if front == target:
                answer.append(distance)

            elif visit[front] == 0:
                visit[front] = distance
                for j in route[front]:
                    q.append(j)
        distance += 1
        pass
    return min(answer)
    pass

def solution(begin, target, words):
    if target not in words:
        return 0
    words.sort(reverse=True)
    # 하나 차이 = 인접한 노드
    connect(begin, words)
    for i in words:
        connect(i, words)

    answer = bfs(begin, target)
    return answer