function solution(s){
    
    let openCount = 0
    
    for(let i=0;i<s.length;i++){
        if(s[i]===")"){
            if(openCount === 0){
                return false
            }
            
            openCount --
            
        }else{
            openCount ++
        }
    }
    
    return openCount===0? true : false
    
}


// 괄호 짝이 맞는지 확인하면 되기 때문에, 굳이 문자열을 조작하는 것 보다 여는괄호를 세면서 닫는 괄호가 나오면 여는괄호에서 하나 빼주는 방식을 사용했다.
// 만약 짝이 안맞으면 바로 false를 리턴해줬고 반복문이 끝난 후 openCount가 0이면(짝이 모두 맞다면) true반환, 아닐시 false반환
