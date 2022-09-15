// 효율성체크에서 실패
// 종료조건을 잘못 설정해서 좀 헤맸음. 추가 테이스케이스 "abcaacd" > 모두 제거 실패 but  부분 제거한 케이스
// 파라미터로 받아오는 변수 자체를 건드리지 말자.. (문자열이나 배열일 경우!!)


// 시간초과 한 이유는 잘 모르겠다.. 

function solution(s)
{
    let i = 0
    
    while(true){
        
        if(s[i+1]===s[i]){
            if(i>0){
                s = s.slice(0,i)+ s.slice(i+2)
                i--
            }else{
                s= s.slice(i+2)
            }
            
            if(s.length===0) return 1
            continue
        }
        
        if(i+1 === s.length-1 || i===s.length-1) return 0
        
        
        i++
        
    }
    
    return 0
}
