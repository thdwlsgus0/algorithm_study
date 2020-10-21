'''
https://programmers.co.kr/learn/courses/30/lessons/42839
완전탐색 소수찾기
'''
import itertools
import math

def primeNumber(num):
    if num <2:
        return False
    for i in range(2,int(math.sqrt(num))+1):
        if num%i==0:
            return False
    return True

def solution(numbers):
    #str을 리스트 요소로 분리하고
    numbers = [i for i in numbers]

    #그 리스트를 조합하고,
    numbers = [list(map(''.join,itertools.permutations(numbers,i))) for i in range(1,len(numbers)+1)]

    #조합한걸 중복을 없애고 (집합으로 변하고))
    numbersSet=set()
    for i in range(len(numbers)):
        for j in range(len(numbers[i])):
            numbersSet.add(int(numbers[i][j]))

    #집합을 다시 리스트로,
    numbers = list(numbersSet)

    #요소별로 검사
    answer = 0
    for number in numbers:
        if primeNumber(number):
            answer +=1
    return answer