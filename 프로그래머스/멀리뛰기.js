// 조합을 활용해, 2의 개수가 0개,1개,2개... 일때 조합의 개수를 구했다.
// 정수 오버플로우 발생해서 모든 테케가 통과되지는 않았다.. 왜 틀렸는지 오래 찾았는데 허무하네..
// 다른 사람 풀이 보니까 그냥 피보나치를 구현하면 되는 것이었,,



function solution(n) {
        
    let answer = 1
      for (let i=1;i<=Math.floor(n/2);i++){
          answer += combination(n-i,i)  
      }
    
    return answer % 1234567
}

const combination = (n,r)=>{
    
    if(n-r===0) return 1
    
    return factorial(n) / (factorial(n-r) * factorial(r)) 
}

const factorial = (n)=>{
    
    let result = 1
    
    for(let i=2;i<=n;i++){
        result *= i
    }
    
    return result
}

// 피보나치
function solution(n) {
    
    const array = [0,1,2]
    if (n==1) return 1;
    else if (n==2) return 2;
        
    for(let i=3;i<=n; i++){
        
        array[i] = (array[i-1] + array[i-2]) % 1234567
    }
    
    return array[n]
}
