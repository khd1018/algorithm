// 정수 x,y의 각 자리 숫자 개수를 count
// x,y에서 공통으로 나타나는 숫자들의 쌍의 개수를 count
// 공통으로 나타나는 숫자를 모두 나열


function solution(X, Y) {
    const xObj = countDigit(X)
    const yObj = countDigit(Y)

    const numberOfPairs = countPairOfSameNumber(yObj,xObj)
    const couple = getAllSameNumbers(numberOfPairs).sort((a,b)=>b-a)

    return getResult(couple)
}

const countPairOfSameNumber = (xObj,yObj)=>{
    const numberOfPairs = {}
    
    Object.entries(xObj).forEach(([xNumber,xCount])=>{
        if(yObj[xNumber]){
            numberOfPairs[xNumber] = Math.min(xCount,yObj[xNumber])
        }
    })
    
    return numberOfPairs
}

const getResult = (sameNumbers)=>{
    if(!sameNumbers.length)
        return "-1"
    
    if(sameNumbers[0] === "0")
        return "0"
    
    return sameNumbers.join('')
}

const countDigit = (integer)=>{
    const numberOfDigits = {}
    
    for(const number of integer){
        if(!numberOfDigits[number]){
            numberOfDigits[number] = 1
            continue
        }
        numberOfDigits[number] ++
    }
    
    return numberOfDigits
}

const getAllSameNumbers = (concatObj)=>{
    return Object.entries(concatObj).reduce((allSameNumbers,[sameNumber,count])=>{
        allSameNumbers += sameNumber.repeat(count)
        return allSameNumbers
    },"").split("")
}

