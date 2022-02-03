# greedy 알고리즘

# 다양한수로 이루어진 배열이 있을 때 주어진 수들을 M번더하여 가장 큰 수 만듬
# 특정 인덱스 수가 연속으로 k번 초과하여 더해질 수 없음

# 나의 해결방법 : 가장 큰 수 k번 더하고, 그 다음 큰수를 한 번 더하는 것을 반복하면 가장 큰 수가 나올 것이다.
# 따라서 가장 큰 수와 그 다음 큰 수를 추출하고, 위의 과정을 수행하는 코드를 작성


n, m, k = map(int, input().split())
data = list(map(int, input().split()))

data.sort()
first = data[n-1]
second = data[n-2]

# 가장 큰 수가 더해지는 횟수 계산
# 가장 큰 수 k번 더하고 그 다음 큰 수 한번 더하는 수열이 반복되기 때문에 k+1
count = (m//(k+1))*k + m % (k+1)
result = count * first + (m-count)*second

print(result)

# 나의 방식이 잘못된 이유
# m이 k의 배수인 경우, 나머지가 존재하지 않기 때문에, second * 0이 된다...

answer = (m//k)*first + (m % k)*second

#테스트
