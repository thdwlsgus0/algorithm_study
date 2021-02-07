'''
https://www.acmicpc.net/problem/9019
백준 9019 DSLR문제
'''
# value 'n' int register is 0~9999
# rD : n=2n (if 2n>9999 then n=2n mod 9999)
# rS : n=n-1 (if n==0 then n=9999)
# rL : n=BCDA (rotate to left)
# rR : n=DABC (rotate to right)
import sys
import collections

# n=2n (if 2n>9999 then n=2n mod 9999)
def D(num):
    return ((num * 2) if (num * 2 < 9999) else (num * 2) % 10000)

# n=n-1 (if n==0 then n=9999)
def S(num):
    return (num - 1 if num != 0 else 9999)

# n=BCDA (rotate to left)
def L(num):
    stringTemp = str(num)
    stringTemp = ''.join('0' for i in range(4 - len(stringTemp))) + stringTemp  # 부족한 자릿수 만큼 0으로 채운다 ('7' -> '0007')
    return int(stringTemp[1:] + stringTemp[0])  # L shift 후 int로 반환 ('0070' -> '0700' -> 700)

# n=DABC (rotate to right)
def R(num):
    stringTemp = str(num)  # 문자열로 바꾸고
    stringTemp = ''.join(['0' for i in range(4 - len(stringTemp))]) + stringTemp
    # while len(stringTemp)<4:
    #    stringTemp = '0'+stringTemp
    return int(stringTemp[-1] + stringTemp[:-1])  # int로 반환 ('0700' -> '0070' -> 70)

def solution(N):
    begin = int(N[0])  # 초기숫자
    end = int(N[1])  # 목표숫자

    route = ["" for _ in range(10000)]  # 0~9999까지의 경로가 있다.
    q = collections.deque()  # 큐
    q.append(begin)  # 초기숫자 부터

    while q:
        curNum = q.popleft()  # 현재 인덱스
        curPath = route[curNum]  # 현재경로 = route[현재 인덱스] (ex_ route[현재 인덱스]="DDL")

        if curNum == end:  # 목표 위치면
            # print('curNum = ',curNum,'curPath:',curPath)
            return curPath  # 현재 경로 뱉는다

        else:
            curNumD = D(curNum)
            curNumS = S(curNum)
            curNumL = L(curNum)
            curNumR = R(curNum)

            if route[curNumD] == "":
                route[curNumD] = curPath + "D"
                q.append(curNumD)

            if route[curNumS] == "":
                route[curNumS] = curPath + "S"
                q.append(curNumS)

            if route[curNumL] == "":
                route[curNumL] = curPath + "L"
                q.append(curNumL)

            if route[curNumR] == "":
                route[curNumR] = curPath + "R"
                q.append(curNumR)

    return "error"


def main():
    num = int(sys.stdin.readline())
    N = []
    for i in range(num):
        N.append(sys.stdin.readline().rstrip().split(' '))
        # N = sys.stdin.readline().rstrip().split(' ')
    for i in range(num):
        print(solution(N[i]))

if __name__ == "__main__":
    main()