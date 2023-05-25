
/*
1. 가능한 발음인지 확인
    - 해당 단어가 가능한 발음들의 조합이어야 함 
2. 가능한 발음이 연속되는지 확인
*/


function solution(babbling) {
    
    const possiblePronuns = ["aya", "ye", "woo", "ma"]
    let count = 0
    
    babbling.forEach(babble=>{

        if(!isSpeakable(babble,possiblePronuns)){
            return
        }
        
        if(isContiuos(babble,possiblePronuns)){
            return
        }
        
        count++
    })
    
    return count
}
const isSpeakable = (babble,possiblePronuns)=>{
    
    let testWord = babble
    
    possiblePronuns.forEach(pronuns=>{
        const regex = new RegExp(`(${pronuns})`,"g")
         testWord = testWord.replace(regex," ").trim()
    })
    
    return testWord ? false : true
}

const isContiuos = (babble,possiblePronuns)=>{
    
    return possiblePronuns.some((possiblePronun)=>{
        const regex = new RegExp(`(${possiblePronun})`+"\\1+","g")
        
        return regex.test(babble) ? true : false
    })
    
}

