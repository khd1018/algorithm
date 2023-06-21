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

    return totalUpDownCount + Math.min(getLeftCount(name),getLeftCount([...name].reverse())+1)
}

const getLeftCount = (name)=>{
    
    const nameLength = name.length - 1
    const leftCases = []
    let rightCase = nameLength
    
    outer :
    for(let i=1; i<=nameLength; i++){
        if(name[i] === "A"){
            for(let j=i+1; j<= nameLength; j++){
                if(name[j]!=="A"){
                    leftCases.push( 2*(i-1) + nameLength - (j-1) )
                    break
                }else{
                    if(j===nameLength){
                        rightCase = i-1
                        break outer
                    }
                }
                
            }   
        }                
    }
    
    return Math.min(...leftCases) < rightCase ? Math.min(...leftCases) : rightCase
}



const getUpDownCount = (alphabet)=>{
    const asciiOfAlphabet = alphabet.charCodeAt()
    
    if( asciiOfAlphabet > "N".charCodeAt() ){
        return 90 - asciiOfAlphabet + 1
    }
    
    return asciiOfAlphabet - 65
}
