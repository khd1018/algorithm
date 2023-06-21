function solution(name) {
    
    let totalUpDownCount = [...name].reduce((sum,alphabet)=> {
        if(alphabet==="A"){
            return sum
        }
        
        return sum + getUpDownCount(alphabet)
    }, 0)
    
    if(!totalUpDownCount){
        return totalUpDownCount
    }
    
    if(!name.includes("A")){
        return totalUpDownCount + name.length - 1
    }
    
    return totalUpDownCount + getLeftRightCount(name)
}

const getLeftRightCount = (name)=>{
    
    const nameLength = name.length
    let lengthOfContinousA = 0
    let firstIndexOfA = name.indexOf("A")
    let lastIndexOfA = 0
    
    for(let i=0; i<name.length; i++){
        if(name[i] === "A"){
            for(let j=firstIndexOfA+1; j< nameLength; j++){
                if( name[j] !== "A" ){
                    lastIndexOfA = i-1
                    lengthOfContinousA = lastIndexOfA - firstIndexOfA + 1
                    break
                }
            }   
        }                
    }
    
    if( firstIndexOfA - 1 < lengthOfContinousA ){
        return (firstIndexOfA - 1) * 2 + nameLength - lastIndexOfA - 1 
    }
    
    return nameLength - 1
}

const getUpDownCount = (alphabet)=>{
    const asciiOfAlphabet = alphabet.charCodeAt()
    
    if( asciiOfAlphabet > "N".charCodeAt() ){
        return 90 - asciiOfAlphabet + 1
    }
    
    return asciiOfAlphabet - 65
}
