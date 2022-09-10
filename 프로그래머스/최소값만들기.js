function solution(A,B){
    
    // 모든 누적합을 구하는 것은 비효율적이라고 판단하여 다른 방법을 모색해봄(최대 배열의 길이가 각각 1000이라서)
    // 각 배열의 가장큰 수 x 가장 작은 수를 더해주면 최소누적합을 구할 수 있을 것이라 가정함
    //Math의 min,max메서드를 활용하는 것보다, 각 배열을 오름차순, 내림차순으로 정렬한 후 순차적으로 곱해주었다.
    // 효율성테스트에서 걸릴줄 알았는데 매우 빠른 속도로 작동하였음
    
    let answer = 0
    
    A.sort((a,b)=>a-b)
    B.sort((a,b)=>b-a)
    
    for(let i=0;i<A.length;i++){
        
        answer += (A[i]*B[i])
        
    }
    
    return answer
    
}
