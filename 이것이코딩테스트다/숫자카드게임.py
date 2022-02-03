# 각행마다 가장 작은 수를 찾고, 그 수 중에서 가장 큰 수 찾는 문제

n, m = map(int, input().split())
minValue = []
result = 0

# 책의 풀이
for i in range(n):
    data = list(map(int, input().split()))
    min_value = min(data)
    result = max(result, min_value)

print(result)


# 나의 풀이
for i in range(n):
    data = list(map(int, input().split()))
    minValue.append(min(data))

result = max(minValue)
print(result)


# 책의 방식이 훨씬 효율적이다. 나의 방식대로 풀면, 리스트에 min값들을 저장하기 때문에, 입력값이 많아질 수록 더 많은 메모리를 차지할 것이고, max비교할 때 연산 속도가 느려질 것이다.
# 배열에 꼭 저장해야 하는지 다시 한번 생각해보자
