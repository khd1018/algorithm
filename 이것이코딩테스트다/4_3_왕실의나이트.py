# 못푼 문제

# 이것도 완전 탐색  가능한 경우 다 해봐야지, 어떻게?
# 이동 가능한 최대 경우의 수 : 8가지


location = input()
column = ord(location[0])-ord('a') + 1
row = int(location[1])
count = 0

steps = [(-2, -1), (-2, 1), (2, -1), (2, 1),
         (1, -2), (1, 2), (-1, -2), (-1, 2)]

# 모든 가능한 경우의 위치를 구해서 범위 벗어낫는지 확인(행은 1,8을 넘어섯는지 열은 a나 h를 넘어섯는지)

for step in steps:
    move_columns = column + step[0]
    move_rows = row + step[1]

    if move_columns > 8 or move_columns < 1 or move_rows > 8 or move_rows < 1:
        continue

    count += 1

print(count)


# 상하좌우 문제와 푸는 방식은 똑같다.
# 다만 열이 알파벳이라서 이를 처리할 줄 모르면 풀 수가 없다.
# 나는 list.index를 사용해서 어캐어캐 풀어보려고 했다. 풀면은 풀리겟지만 코드가 난잡해지는 것을 피할 수가 없었을 것이다.
# 아스키코드를 활용할 방법을 생각했으나, 책의 풀이처럼 활용하는 방법은 생각하지 못했다.
