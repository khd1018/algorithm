function solution(numbers) {
    const numArr =numbers.split("") 
    let primeCount = 0      // 소수 개수를 저장하는 변수
    const warehouse= []     // 소수인 숫자를 저장하는 배열
    
    
    // 사용된 숫자 삭제한 배열을 리턴하는 함수
    const delelteEl = (arr,target)=>{
        let targetIndx = 0
        for(let i=0;i<arr.length;i++){
            if(arr[i]===target){
                targetIndx = i
                break
            }
        }
        return arr.filter((_,indx)=> indx!==targetIndx)
    }
    
    // 재귀 함수 - 모든 케이스 돌면서 소수인지 체크
    const allSearch = (ableNumArr,nowNum)=>{
        
        if(isPrimeNum(nowNum)){
            if(!warehouse.includes(nowNum)){              // 여기 조건을 설정하지 않아서 333과 같은 case에 결과가 3이 나옴..
                warehouse.push(nowNum)
                primeCount++
            }
        }
        
      // 재귀 종료 조건
        if(nowNum.length===numbers.length){
            return 
        }
        
        // 재귀 돌리는 반복문
        for(let i=0;i<ableNumArr.length;i++){
             const newNum = nowNum + ableNumArr[i]
             allSearch(delelteEl(ableNumArr,ableNumArr[i]),newNum) // 여기 오류 찾는데 시간 오래 걸림.. ableNumArr[i]에 newNum을 쓰고 있엇다..(삭제할 문자 잘못 설정함)
        }
    }
    
    // 루트 케이스로 시작하게끔 하는 반복문
    for(let i=0;i<numArr.length;i++){
        if(numArr[i]!=='0'){
            const ableNumArr = delelteEl(numArr,numArr[i])
            allSearch(ableNumArr,numArr[i])
        }
    }
    
    return primeCount

}

// 소수판별 함수
function isPrimeNum (num) {
    
    const numb = parseInt(num)
    for (let i = 2; i <= Math.sqrt(numb); i++) {
        if (numb % i === 0) return false;
    }
    return numb >= 2;
    
}


// 돌아가긴 하는데.. 코드가 너무 길다
// deleteEl도 줄일 수 잇는 방법이 있을 것 같고 permutation을 좀더 깔끔하게 구현할 방법도 있을 것 같다,,,
