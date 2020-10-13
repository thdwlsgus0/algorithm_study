def solution(str):
    # sorted() :  list로 반환한다
    # sorted(string) -> 정렬후 list로 반환
    list = sorted(str, reverse=True)

    # ''.join(list) = list를 문자열로 변환
    answer = ''.join(list)
    return answer