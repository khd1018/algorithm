function solution(n) {
    
    const converted = divide(n).split("")
    
    return converted.map((num)=>num==='3'? 4 : num ).join("")
    
    
}

// 삼진법을 조금 변형하면 되는 문제
// 규칙을 이해하기 힘들었다...
// 

const divide = (n)=>{
    
    
    let remainder = n%3
    let quotient =  parseInt(n/3)
    
    if(n%3===0){
        quotient -= 1
        remainder = n - (3*quotient)
    }
    
        
    if(parseInt(n/3)<3){
        return quotient===0? `${remainder}` : `${quotient}${remainder}`
    }
        
    return `${divide(quotient)}${remainder}`
}
