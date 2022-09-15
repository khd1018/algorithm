// 효율성체크에서 실패
// 종료조건을 잘못 설정해서 좀 헤맸음. 추가 테이스케이스 "abcaacd" > 모두 제거 실패 but  부분 제거한 케이스
// 파라미터로 받아오는 변수 자체를 건드리지 말자.. (문자열이나 배열일 경우!!)


// 왜 시간초과되는지 몰랐는데, slice가 많아서 그랬다. 
// stack을 활용하니 바로 통과했다. ㅜㅜ 스택을 왜 생각못했지..
// 그리고 문제해결 방법을 좀 더 생각하고 코드를 작성해야될 거 같다.. 간단한 문제였는데 너무 복잡하게 


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


// stack을 활용한코드

// 효율성검사에도 테스트케이스 하나 빼고 다 통과하긴 했다.


function solution(s)
{
    const array = s.split("")
    const stack = [s[0]]
    
    
    for(let i=1;i<s.length;i++){
        if(stack.at(-1)===array[i]){
            stack.pop()
            
        }else{
            stack.push(array[i])
            
        }
        
        
    }
    
    return stack.length===0? 1 : 0
}


//위의 코드 수정 -- split하는 코드 제거하니 통과한다!

function solution(s)
{
    const stack = [s[0]]
    
    
    for(let i=1;i<s.length;i++){
        if(stack.at(-1)===s[i]){
            stack.pop()
            
        }else{
            stack.push(s[i])
            
        }
        
        
    }
    
    return stack.length===0? 1 : 0
}

