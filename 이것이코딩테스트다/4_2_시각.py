# 00시00분00초부터 n시 59분 59초까지 3이 하나라도 포함되는 경우의 수 구하기
# 매시간마다 3이 들어가는 경우의 수는 같다.
# 3시엔 모든 분,초가 경우의 수에 포함된다.
# 시간>분>초 순으로 for문을 돌려 구해본다..

n = int(input())

number_of_case = 0
minutes = 60
seconds = 60
num_include_3 = [3, 13, 23, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 43, 53]

for hour in range(n+1):
    if hour == 3:
        number_of_case += minutes * seconds
        continue

    for min in range(minutes):
        if min in num_include_3:
            number_of_case += seconds
        else:
            number_of_case += len(num_include_3)

print(number_of_case)
