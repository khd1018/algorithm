// 2차원 배열을 직접 만들고, slice함
// 간단한 연산만 있어 될 줄 알았는데 시간초과됨.

function solution(n, left, right) {
    
    const array = []
    
    for(let i=0;i<n;i++){
        

        for(let j=0;j<n;j++){
            
            array.push(Math.max(i,j)+1)
        }
    }
    
    return array.slice(left,right+1)
    
}

// right, left를 n으로 나눈 나머지, 몫이 right,left의 2차원 배열의 인덱스라는 것을 이용.
// 통과! 

function solution(n, left, right) {
    
    const array = []
    
    const r_low = parseInt(right/n),
          r_column = right%n
    
    const l_low = parseInt(left/n),
          l_column = left%n
    
    
    for(let i=l_low ;i<=r_low;i++){
        
        let start = 0
        let end = n-1
        
        if(i===l_low) start = l_column
        if(i===r_low) end = r_column
        
        for(let j=start;j<=end;j++){
                array.push(Math.max(i,j)+1)
            }
        }
    return array
}

// 다른 사람 코드. 원리는 같지만 더 간단하게 코드를 짠 거 같다.
// 오히려 2,3번 테케같은 경우 내 것이 더 빠르더라.

function solution(n, left, right) {
    
    const array = []
    
    for(let i=left;i<=right;i++){
        array.push(Math.max(i%n+1,parseInt(i/n)+1))
    }
    return array
}
    
