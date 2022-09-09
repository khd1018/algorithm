//const binaryChanged = array.filter((bin)... 에서 Maximum call stack size exceeded 에러 발생!
// 테스트케이스는 짧은데 왜 콜스택 사이즈에 문제가 있는지 모르겠다. 
//for문을 돌려서 해결해봐야 할 듯

function solution(s) {
    const array = s.split("")
    let changeCount = 0
    
    const binaryChange = (array)=>{
    
        changeCount ++
        let count = 0
    
        const isAllOne = array.every((bin)=> bin==='1')
        if(isAllOne){
            return 0
        }
    
        const binaryChanged = array.filter((bin)=>{
            if(bin===0){
                count ++
                return false
            }
            return true
        })
    
        return binaryChange(binaryChanged) + count
    }
    
    const zeroCount = binaryChange(array)
    
    return [changeCount,zeroCount]
    
}
