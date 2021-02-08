'''
https://www.acmicpc.net/problem/1012
백준1012_ 유기농배추
'''
import sys

direction = [[0, 1], [1, 0], [0, -1], [-1, 0]]  # 시계방향
def solution(field, routes, horizon, vertical):
    count = 0
    for route in routes:
        if field[route[0]][route[1]] > 0:  # 방문 아직 안한 배추위치라면
            st = []
            st.append(route)
            while st:
                curY, curX = st.pop()
                field[curY][curX] = -1  # 방문처리
                # 상,우,하,좌 탐색
                for i in range(4):
                    nextY, nextX = curY + direction[i][0], curX + direction[i][1]
                    # 필드범위내에 방문한적이 없는 배추라면
                    if (0 <= (nextY) < vertical) and (0 <= (nextX) < horizon):
                        if field[nextY][nextX] == 1:
                            st.append([nextY, nextX])  # 인접한것이므로 해당위치 스택
            count += 1
    return count


def main():
    testCase = int(sys.stdin.readline())

    for i in range(testCase):
        horizon, vertical, numOfCabbage = map(int, sys.stdin.readline().rstrip().split(' '))
        field = [[0] * horizon for _ in range(vertical)]  # 밭 초기화
        routes = [[0, 0]]

        for j in range(numOfCabbage):  # 배추 심기 (배추 갯수만큼 동작)
            x, y = map(int, sys.stdin.readline().rstrip().split(' '))
            field[y][x] = 1  # 필드에 배추심고
            routes.append([y, x])  # 배추 위치 기록
        print(solution(field, routes, horizon, vertical))
    return 0


if __name__ == "__main__":
    main()