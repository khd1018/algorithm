# 책의 풀이
# 완전 탐색 - 가능한 모든 경우의 수 검사
# 데이터크기가 매우 클 경우 다른 방법 고려해보자

h = int(input())
count = 0

for hour in range(h+1):
    for min in range(60):
        for sec in range(60):
            if '3' in str(hour) + str(min) + str(sec):
                count += 1


print(count)

# 책의 풀이는 로직이 정말 깔끔한 것 같다..
# 나도 비슷한 방식으로 접근하였지만, 좀 복잡하게 구현한 것 같다.
# 3중 for문 돌리는 것이 비효율적이라 생각했다.
# 또 str을 활용하는 방법을 생각하였지만, 마땅한 방법이 떠오르지 않아 다른 방식으로 구현하였었다.
# 전체 경우의 수가 얼마나 되는지 확인해보고 구현을 하도록 하자.

# if '3' in str(hour) + str(min) + str(sec) 요렇게도 활용할 수 있구나
