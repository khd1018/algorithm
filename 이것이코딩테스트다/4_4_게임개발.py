# 문제를 정확히 이해하고, 이를 어떻게 구현할지 명확히 한 후 코드 작성하자..
# 도저히 안풀려서 책의 풀이를 참고해서 풀게되었다.


n, m = map(int, input().split())
row, column, direction = map(int, input().split())
origin_dir = direction
count_move = 1
# 0이면 3, 1이면 0, 2면 1, 3이면 2
# 가보지 않은 칸이라... map의 숫자를 바꿔줘야하나

dir_num = [0, 1, 2, 3]
dir_turn = [3, 0, 1, 2]
step = [(0, -1), (-1, 0), (0, 1), (1, 0)]
back_step = [(1, 0), (0, -1), (-1, 0), (0, 1)]

game_map = []

for i in range(n):
    map_data = list(map(int, input().split()))
    game_map.append(map_data)


while True:

    # 이게 문제엿구만.. 방향이 3인경우에 문제발생..! 왜냐,, for문을 다 돌았기 때문이다
    for i in range(len(dir_num)):
        # 방향확인하고 룰대로 이동
        if direction == dir_num[i]:
            direction = dir_turn[i]
            n_row = row + step[i][0]
            n_column = column + step[i][1]
    # 이동한 칸이 가본 칸or 바다인지 확인
    # 무한 루프 돌것 같더라..
    if game_map[n_row][n_column] == 0:
        row, column = n_row, n_column
        game_map[row][column] = 2
        count_move += 1
        origin_dir = direction
        continue

    if origin_dir == direction:
        for i in range(len(dir_num)):
            if direction == dir_num[i]:
                b_row = row + back_step[i][0]
                b_column = column + back_step[i][1]
        # 뒤로 이동할 수 없는 경우
        if game_map[b_row][b_column] == 1:
            break
        else:
            row = b_row
            column = b_column


print(count_move)
