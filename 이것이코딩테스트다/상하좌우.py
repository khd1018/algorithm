# 책의 풀이

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
