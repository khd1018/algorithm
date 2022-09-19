function solution(n)
{
   
    while(n>1){
        if(n%2===0){
            n /= 2
        }else{
            n -= 1
            count++
        }

        
    }
    
    return count
}


// 이진수로 해결하는 방법
// 2로 나눈 나머지들의 합이 정답이므로!

function solution(n){
  
   const binary = Array(...n.toString(2))
   return binary.reduce((sum,bin)=> sum+(+bin) ,0)
   
}


// +string 으로 간단하게 숫자를 변환할 수 있다.
// 문제를 단순하게 
