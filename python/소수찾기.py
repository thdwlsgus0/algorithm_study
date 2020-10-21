'''
https://programmers.co.kr/learn/courses/30/lessons/42839
완전탐색 소수찾기
'''
import itertools
import math

def primeNumber(num):
    if num < 2:
        return False
    for i in range(2,int(math.sqrt(num))+1):
        if num%i ==0:
            return False
    return True

def solution(numbers):
    #원소 하나씩 넣는것만으로 문자열을 문자 리스트로
    a = [i for i in numbers]
    #조합
    numbers = [list(map(''.join,itertools.permutations(a,i))) for i in range(1,len(a)+1)]
    #조합후 int 타입으로
    numbers = [list(map(int,numbers[i])) for i in range(len(numbers))]

    #중복 제거할 집합 변수
    mySet = set()

    #변수 삽입
    for i in range(0,len(numbers)):
        for j in range(0,len(numbers[i])):
            mySet.add(numbers[i][j])

    #집합을 리스트로
    mySet = list(mySet)

    answer = 0
    for number in mySet:
        if primeNumber(number):
            answer +=1
    return answer