# 문제를 정확히 이해하고, 이를 어떻게 구현할지 명확히 한 후 코드 작성하자..
# 도저히 안풀려서 책의 풀이를 참고해서 풀게되었다.

n, m = map(int, input().split())
x, y, direction = map(int, input().split())

# 방문한 위치를 저장하기 위한 맵을 생성
d = [[0]*m for _ in range(n)]

# 현재위치 방문 표시
d[x][y] = 1

map_arr = []
for _ in range(n):
    map_arr.append(list(map(int, input().split())))

# 각 방향에서 x,y 이동하는 값 (북,동,남,서)
dx = [-1, 0, 1, 0]
dy = [0, 1, 0, -1]


def turn_left():
    # direction이 전역변수이기 때문에 global 키워드 사용
    global direction
    # 방향 틀면 현 방향 -1한 방향임!
    direction -= 1
    if direction == -1:
        direction = 3


count_move = 1
turn_time = 0

while True:
    turn_left()
    nx = x + dx[direction]
    ny = y + dy[direction]

    if map_arr[nx][ny] == 0 and d[nx][ny] == 0:
        d[nx][ny] = 1
        count_move += 1
        turn_time = 0
        x = nx
        y = ny
        continue

    else:
        turn_time += 1
    print(turn_time)
    print(nx, ny)
    if turn_time == 4:
        # 반대방향으로 가려면 -1 곱해주면 됨
        nx = x - dx[direction]
        ny = y - dy[direction]

        if map_arr[nx][ny] == 0:
            x = nx
            y = ny
        else:
            break

        turn_time = 0


print(count_move)


# 현재 방향에서 서쪽으로 방향 변경> 변경된 방향으로 이동 > 처음 가본 칸이거나 육지면 해당 칸으로 이동
# 이미 방문한 칸이거나 바다이면, 다시 위의 과정 ㄱㄱ
# 만약 네 면이 모두 가본 칸 or 바다이면 현재 방향 유지한채로 한칸 뒤로 이동,
# 이 때 뒤쪽이 바다인 칸이면 종료.
