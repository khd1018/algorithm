# 책의 풀이
# 방향벡터가 핵심인 문제

n = int(input())
plans = list(input().split())

x, y = 1, 1

move_types = ['L', 'R', 'U', 'D']
dx = [0, 0, -1, 1]
dy = [-1, 1, 0, 0]

for plan in plans:
    for i in range(len(move_types)):
        if plan == move_types[i]:
            nx = x + dx[i]
            ny = y + dy[i]

    if nx > n or nx < 1 or ny > n or ny < 1:
        continue

    x, y = nx, ny

print(x, y)

# 어려운 문제는 아니었다. 하지만 책의 풀이 방식이 이해가 잘 안된다.
# 책의 풀이는 로직이 깔끔하고, 코드 길이가 짧다는 장점이 있다. 하지만 반복을 많이 해야한다.
# 내 풀이는 반복을 덜 한다는 장점이 있다. 하지만 반복되는 코드가 많고, 길다는 단점이 있다.
# 움직임이 4개가 아니라 더 많아진다면, 제약조건이 늘어난다면, 나의 방식대로 구현하기 힘들 것이다.
