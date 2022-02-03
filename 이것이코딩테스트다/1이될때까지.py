# N이 1이 될때까지 1을 빼거나 k로 나눠준다.
# n이 k로 나눠떨어질때 나눌 수 있음

# if문 활용해서 나눠떨어질 때, 아닐 때 구분하여 처리
# n이 1이 될때까지 위의 과정 반복

n, k = map(int, input().split())
result = 0

# 책의 풀이
while True:
    target = (n//k)*k
    result += (n-target)
    n = target

    if n < k:
        break

    result += 1
    n //= k

result += (n-1)
print(result)


# 나의 풀이
while n > 1:
    if n % k == 0:
        n = n // k
        result += 1
    else:
        n -= 1
        result += 1

print(result)

# n이 작다면 나의 풀이도 상관이 없다.
# 하지만 문제 크기가 매우 커진다면, 책의 방식이 훨씬 빨리 실행될 것이다.(log시간 복잡도)
# n을 k로 나눌때 마다 n이 크게 줄어든다.
# 한번 반복할때마다 n을 k로 나눠줄 수 있도록 만들고 나눠주는 책의 방식이 더 효율적임!
