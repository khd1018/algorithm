function solution(s) {
    const indexOfAlphabets = {}
    const result = []
    
    for(let targetIndex=0; targetIndex<s.length ; targetIndex++){
        const target = s[targetIndex]
        
        if(indexOfAlphabets[target]===undefined){
            result.push(-1)
        }else{
            result.push(targetIndex-indexOfAlphabets[target])
        }
        
        indexOfAlphabets[target] = targetIndex
    }
    
    return result
}
