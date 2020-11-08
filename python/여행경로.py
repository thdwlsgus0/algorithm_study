'''
https://programmers.co.kr/learn/courses/30/lessons/43164
여행경로 DFS/BFS
'''
def solution(tickets):
    route = dict()
    tickets.sort(reverse=True)

    for start, end in tickets:
        route[start] = route.get(start, []) + [end]

    stack = ["ICN"]
    answer = []
    while stack:
        top = stack[-1]
        if top not in route or not route[top]:
            answer.append(stack.pop())
        else:
            stack.append(route[top].pop())

    answer.reverse()
    return answer