'''
https://programmers.co.kr/learn/courses/30/lessons/42842
카펫 완전탐색
'''
def solution(brown, yellow):
    BY = brown + yellow
    pair = dict()
    for i in range(2,BY):
        if (BY%i) ==0:
            m = BY/i
            if i>m:
                break
            pair[i] = pair.get(i,0) + int(m)

    for key in pair.keys():
        if ((key-2) * ((pair[key])-2)) == yellow:
            return [pair[key],key]

    return []