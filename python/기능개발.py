'''
https://programmers.co.kr/learn/courses/30/lessons/42586
-스택 / 큐
'''

def getExpectedDay(leftProgress,speed):
    m,n = divmod(leftProgress,speed)
    if n!=0:
        m=m+1
    return int(m)

def solution(progresses, speeds):
    answer = []
    st = []
    maxInSt = 0
    for progress,speed in zip(progresses,speeds):
        leftProgress = 100-progress
        expectedDay = getExpectedDay(leftProgress,speed)
        if not st :
            st.append(expectedDay)
            maxInSt = expectedDay
            #print('if',expectedDay)
        elif maxInSt >= expectedDay:
            st.append(expectedDay)
            #print('elif',expectedDay)
        else:
            answer.append(len(st))
            st.clear()
            st.append(expectedDay)
            maxInSt = expectedDay
    answer.append(len(st))
    return answer

