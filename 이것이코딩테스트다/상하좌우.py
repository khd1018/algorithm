# 구현 문제

# R이면 열 + 1, D면 행 +1 , u는 행 -1, L는 열 -1
# 만약 열이나 행 값이 0이되거나 행렬의 범위를 넘길시 무시한다.
# C,R,U,D 각 케이스별로 나누어 준다.
# 초기 행렬값 1,1

n = int(input())
schedule = list(input().split())

x, y = 1, 1

for i in schedule:
    if i == 'R':
        if y+1 > n:
            continue
        else:
            y += 1
    elif i == 'L':
        if y - 1 <= 0:
            continue
        else:
            y -= 1
    elif i == 'U':
        if x - 1 <= 0:
            continue
        else:
            x -= 1
    else:
        if x + 1 > n:
            continue
        else:
            x += 1


print(x, y)
