//배열 메서드를 활용하지 못하기 때문에 굳이 배열로 변환하지 않아도 되어 문자열로 처리하게 수정하였다.
//또, 0을 제거한 문자열의 길이를 이진수로 변환하여 이진변환을 하기 때문에, 그냥 1의 개수를 count해서 이를 이진수로 변환하게 바꿧다.


function solution(s) {
    
    let changeCount = 0
    
    const binaryChange = (str)=>{
        
        if(str==='1') return 0
        
        changeCount ++
        let removeCount = 0
        let oneCount = 0
        let isAllOne = true
        
        
        for(let i=0; i<str.length;i++){
            if(str[i]==='1'){
                oneCount++
                continue
            }
            
            removeCount++
        }
        
        const changedStr=oneCount.toString(2)
        
        
        return binaryChange(changedStr) + removeCount
    }
    
    const zeroCount = binaryChange(s)
    
    return [changeCount,zeroCount]
    
}

