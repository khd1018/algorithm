X, Y의 짝꿍이 0으로만 구성되어 있다면, 짝꿍은 0

- x,y에서 각 정수가 몇 개씩 있는지 count하는 기능
- 공통 정수를 찾는 기능
- 공통 정수를 내림차순으로 정렬하는 기능

*/

// 객체 배열 복사, airbnb 컨벤션 배열? 여러값 매개변수 관련, 프로퍼티명 숫자 가능?
// 

function solution(X, Y) {
    
    const objX = countDigit(X)
    const objY = countDigit(Y)
    
    const commonDigits =[...getCommonDigits(countDigit(X),countDigit(Y))]
    
    if(!commonDigits.length) return "-1"
    if(commonDigits.every(commonDigit=> commonDigit==="0")) return "0"
    
    return commonDigits.sort((a,b)=>b-a).join("")
}

const getCommonDigits = (objX,objY)=>{
    const digitOfX = Object.keys(objX)
    const commonDigits = []
    
    digitOfX.forEach(digit=>{
        if(objY[digit]){
            let numberOfCommonDigits = 0
            if(objX[digit]===objY[digit]) {
                numberOfCommonDigits = objY[digit]
                commonDigits.push(...Array(numberOfCommonDigits).fill(digit))
                return
            }
            
            numberOfCommonDigits = Math.min(objX[digit],objY[digit])
            commonDigits.push(...Array(numberOfCommonDigits).fill(digit))
        }
    })
    return commonDigits
}

const countDigit = (integer)=>{
    
    const numberOfDigits = {}
    const digits = integer.split("")
    
    digits.forEach(digit=>{
        if(!numberOfDigits[digit]){
            numberOfDigits[digit] = 1
            return
        }
        numberOfDigits[digit] += 1
    })
    
    return numberOfDigits
}
