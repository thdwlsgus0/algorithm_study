'''
https://programmers.co.kr/learn/courses/30/lessons/49993#
Summer/Winter Coding (~2018)
'''
def checkSkill(skillTree,userSkill):
    if not userSkill:
        return True
    cur=0
    for skill in userSkill:
        if skillTree[cur] != skill:
            return False
        cur +=1
    return True

def solution(skillTree, userSkills):
    answer = 0
    requireSkill=[]
    for userSkill in userSkills:
        requireSkill.clear()
        for i in userSkill:
            if i in skillTree:
                requireSkill.append(i)
        if checkSkill(skillTree,requireSkill):
            print('True - ',userSkill, ', ',requireSkill)
            answer +=1
    return answer