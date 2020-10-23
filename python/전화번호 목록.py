'''
https://programmers.co.kr/learn/courses/30/lessons/42577?language=python3#
전화번호 목록 - 해시
'''
def solution(phoneBook):
    #중복제거 - list(set(phoneBook))
    phoneBook = sorted(list(set(phoneBook)), key=lambda x :len(x)and int(x)) #길이로 정렬 + 숫자로 정렬 -> 순서 바뀌면 안됨
    for j in range(len(phoneBook)):
        for i in range(1+j,len(phoneBook)):
            if phoneBook[j] in phoneBook[i][:len(phoneBook[j])]:
                return False
    return True