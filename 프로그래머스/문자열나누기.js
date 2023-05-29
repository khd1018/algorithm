function solution(s) {
    return getResult(s)
}
    
const getResult = (s)=>{
    const x = s[0]
    let xCounter = 0
    let otherCounter = 0
    
    for(let i=0; i<s.length; i++){
        s[i]===x? xCounter++ : otherCounter++
        
        if(xCounter===otherCounter){
            return 1 + getResult(s.slice(i+1))
        }
    }
    
    return s.length? 1: 0
}
