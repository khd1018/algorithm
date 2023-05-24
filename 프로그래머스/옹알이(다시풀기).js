
/*
1. 가능한 발음인지 확인
    - 해당 단어가 가능한 발음들의 조합이어야 함 
2. 가능한 발음이 연속되는지 확인
*/


function solution(babbling) {
    
    const possiblePronuns = ["aya", "ye", "woo", "ma"]
    let count = 0
    
    babbling.forEach(babble=>{

        if(!checkSpeakable(babble,possiblePronuns)){
            return
        }
        
        if(isContiuos(babble,possiblePronuns)){
            return
        }
        
        count++
    })
    
    return count
}


const checkSpeakable = (babble,possiblePronuns)=>{
    
    if(!babble.length){
        return true
    }
    
    for(let i=0; i<possiblePronuns.length; i++){
        const lasts = babble.split(possiblePronuns[i])
        
        if(lasts[0]!==babble){
            const rest = possiblePronuns.slice(i+1)
            const isSpeakable = lasts.every((last)=>checkSpeakable(last,rest))
            
            return isSpeakable ? true : false
        }
    }
    
    return false
}

const isContiuos = (babble,possiblePronuns)=>{
    
    return possiblePronuns.some((possiblePronun)=>{
        const regex = new RegExp(`(${possiblePronun})`+"\\1+","g")
        
        return regex.test(babble) ? true : false
    })
    
}

