'''
https://programmers.co.kr/learn/courses/30/lessons/42579
베스트앨범 해시
'''
import collections
def solution(genres, plays):
    genrePlays = dict()
    DB = dict()

    for i, j in zip(genres, plays):
        genrePlays[i] = genrePlays.get(i, 0) + j
    for i in range(len(genres)):
        DB[i] = DB.get(i, []) + [genres[i]] + [plays[i]]

    genrePlays = sorted(genrePlays.items(), key=lambda x: x[1], reverse=True)
    q = collections.deque()

    for i in range(len(genrePlays)):
        q.append(genrePlays[i][0])

    DB = sorted(DB.items(), key=lambda x: x[1], reverse=True)
    answer = []
    while q:
        front = q.popleft()
        cnt = 0
        for i in range(len(DB)):
            if DB[i][1][0] == front:
                answer.append(DB[i][0])
                cnt += 1
            if cnt >= 2:
                break
    return answer