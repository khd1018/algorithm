// https://school.programmers.co.kr/questions/11991를 참고하여 재귀 대신 for문을 사용하여 피보나치 수열을 구했고, 매 값마다 1234567을 나눠줬다.

function solution(n) {
    
    const fiboArray = Array(n).fill(0)
    
    fiboArray[1] = 1
    
    for(let i=2; i<=n; i++) fiboArray[i] = (fiboArray[i-1] + fiboArray[i-2]) % 1234567
    
    return fiboArray[n]
}
