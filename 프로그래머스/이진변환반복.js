//배열순회 메서드 대신에 for문을 사용하니 maximum call stack 에러가 해결되었다.
//메서드를 사용하면 callback 함수가 call stack에 많이 쌓이게 되어 발생하는 문제인 것 같다.
//배열순회 메서드를 남발하지 말자..!!
//늘 강조하지만 문제를 잘 읽자...


function solution(s) {
    const array = s.split("")
    let changeCount = 0                 // 재귀횟수를 세는 변수를 상위 scope에 둬서 이진변환횟수를 count했다. 더 좋은 방법은 없을까? 
    
    const binaryChange = (array)=>{
        
        if(array.length===1 && array[0]==='1') return 0     // 종료조건
        
        changeCount ++
        let count = 0
        const removedArray = []
        let isAllOne = true
        
        
        for(let i=0; i<array.length;i++){               // 배열을 만들지 않고, 1의 개수만 세도 될 것 같다.
            if(array[i]==='1'){
                removedArray.push(1)
                continue
            }
            count++
        }
        
        const changedArray=removedArray.length.toString(2).split("")
        
        
        return binaryChange(changedArray) + count
    }
    
    const zeroCount = binaryChange(array)
    
    return [changeCount,zeroCount]
    
}

