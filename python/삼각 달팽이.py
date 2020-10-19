'''
https://programmers.co.kr/learn/courses/30/lessons/68645
원간 코드챌린지 시즌1
'''
map = []
def move(x, y, cnt, move, opt):
    global map
    # moveDown
    if opt == 0:
        for i in range(0, move):
            y += 1
            map[y][x] = cnt
            cnt += 1
    # moveRight
    elif opt == 1:
        for i in range(0, move):
            x += 1
            map[y][x] = cnt
            cnt += 1
    # moveUp
    else:
        for i in range(0, move):
            y -= 1
            x -= 1
            map[y][x] = cnt
            cnt += 1
    return x, y, cnt

def solution(n):
    answer = []
    global map
    map = [[0] * (n + 1) for i in range(n + 1)]
    x, y, opt, cnt = 0, 0, 0, 1

    while n:
        x, y, cnt = move(x, y, cnt, n, opt % 3)
        opt += 1
        n -= 1

    answer = [map[i][j] for i in range(len(map)) for j in range(len(map[i])) if map[i][j] != 0]
    return answer
