function solution(k, m, score) {
    
    let result = 0
    
    score.sort((a,b)=>b-a)
    
    for(let i=0; i<score.length; i+= m){
        if(!score[i+m-1]){
            break
        }
        
        const minScore = Math.min(...score.slice(i,i+m))
        result += (minScore * m)
    }
    
    return result
}
