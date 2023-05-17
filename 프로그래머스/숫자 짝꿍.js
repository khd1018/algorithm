X, Y의 짝꿍이 0으로만 구성되어 있다면, 짝꿍은 0

- x,y에서 각 정수가 몇 개씩 있는지 count하는 기능
- 공통 정수를 찾는 기능
- 공통 정수를 내림차순으로 정렬하는 기능

*/

// 객체 배열 복사, airbnb 컨벤션 배열? 여러값 매개변수 관련, 프로퍼티명 숫자 가능?
// 

function solution(X, Y) {
    
    const commonNumbers = []
    let shorterInteger= X
    let longerInteger = Y
    
    if(X.length > Y.length){
        shorterInteger = Y
        longerInteger = X
        
    }
    
    for(const shorterNum of shorterInteger){
        const indexOfSameNumber= getIndexOfSameNumber(shorterNum,longerInteger)
        if(indexOfSameNumber === -1){
            continue
        }
        commonNumbers.push(shorterNum)
        longerInteger = longerInteger.slice(0,indexOfSameNumber) + longerInteger.slice(indexOfSameNumber+1,)
        
    }
    
    if(!commonNumbers.length) return "-1"
    if(commonNumbers.every(number=>number==="0")) return "0"
    
    return commonNumbers.sort((a,b)=>b-a).join("")
    
}
                            
const getIndexOfSameNumber = (shorterNum,longerInteger)=>{
    let indexOfSameNumber =  -1
    
    longerInteger.split("").some((longerNum,i)=>{
            if(shorterNum === longerNum){
                indexOfSameNumber = i
                return true
            }
            return false
        })
    
    return indexOfSameNumber
} 

