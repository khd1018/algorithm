// 간단히 피보나치 수열을 구현하는 문제인줄 알았는데 시간초과 및 런타임에러가 발생하였다.
// 바로 숫자 범위를 넘어서기 때문이었다.. 


function solution(n) {
    return f(n)  % 1234567
}

const f = (n)=> {
    
    if(n===0 || n===1){
        return n
    }
    
    return solution(n-1) + solution(n-2)
        
}
