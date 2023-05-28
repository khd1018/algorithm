function solution(s) {
    const result = []
    
    for(let i=0; i<s.length; i++){
        const target = s[i]
        let isSameNumberFounded = false
        
        for(let j=i-1;j>=0;j--){
            if(s[j]===target){
                isSameNumberFounded = true
                result.push(i-j)
                break
            }
        }
        
        if(!isSameNumberFounded){
            result.push(-1)
        }
    }
    
    return result
}
