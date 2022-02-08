
# 글자 하나씩 때서 문자열 압축 > 길이 저장
# 글자 두개씩 때서 문자열 압축 > 길이 저장
# 위 과정 반복
# 파싱한 글자 길이가 s길이//2 넘을 시 종료
# max값 return

# 문자열 압축
# 1. 문자열에서 반복되는지 확인할 문자열 파싱
# 2. 파싱한 문자열 다음부터 파싱한 문자열 길이만큼 증가하며 비교
# 4. 같은 문자열 발견 x, 파싱문자열길이+1 더해주고 해당 인덱스부터 새로 문자열 파싱
# 5. 남은 문자열 길이가 파싱 문자열 길이보다 짧은 경우 남은 문자열 길이 더해주고 종료
# i부터 len(s)-i+1

# i는 파싱할 문자열 길이


def solution(s):

    answer = []

    if len(s) == 1:
        return 1

    for i in range(1, len(s)//2+1):

        parse = s[:i]
        countStr = 0
        j = i
        p_index = 0
        countSame = 1

        while True:

            if len(s[j:]) < i or j > len(s)-1:

                print(countStr)
                if countSame > 1:

                    countStr = countStr + len(str(countSame)) + i + len(s[j:])
                else:
                    countStr += len(s[p_index:])

                break

            if parse != s[j:j+i]:

                if countSame > 1:
                    print("test", j)
                    countStr = countStr + i + len(str(countSame))

                else:

                    countStr += i

                parse = s[j:j+i]
                p_index = j
                j += i
                countSame = 1
            else:
                countSame += 1
                j += i

        answer.append(countStr)
    print(answer)

    return min(answer)


print(solution("aabbaccc"))


# 한 3시간 걸려 풀었다..
# 처음에 알고리즘의 밑그림을 제대로 그리지 못했다! 문제를 파악하는데 시간을 더 투자하자.
# 반복문에서 인덱스 다루는 것이 참 헷갈린다.

# 1. 종료조건
# 특히, 종료조건을 지정하는게 머리아프다. 이번 문제의 경우도 종료조건때문에 많은 시간을 보냈다.
# 종료조건을 이상하게 지정하면 out of index 오류가 발생하거나, 의도와 다른 지점에서 종료되기 때문이다.
# 천천히 생각하면 단순한데, 빨리 문제를 풀어야 된다는 생각때문에 급했던 것 같다.
# 머리속으로 생각이 안되면 노트에 적어가면서 생각을 정리하자.

# 2. 예외케이스
# 종료조건과 양대산맥, 예외 케이스도 골치아픈 문제다. 예외 케이스를 찾기 힘들기 때문이다...
# 아무래도 주어진 예시에 맞춰 알고리즘을 작성하기 때문에 예외 케이스에 무용지물이 되는 경우가 많다.
# 전체적인 알고리즘을 작성하고 나서, 가능한 예외 케이스들을 따로 정리해보고, 처리를 잘 하는지 확인을 하자.
# 이 문제같은 경우, 10ab처럼 특정문자가 10개이상 있는 문자열과, 문자 하나로 이루어진 문자열을 처리해야 풀 수 있었다.
