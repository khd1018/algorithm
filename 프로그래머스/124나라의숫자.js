// 제한시간초과
// 당연히 안될것 같았지만 한번 구현해봤다.

function solution(n) {
    
    let former = 0
    
    for(let i=1;i<=n;i++){
        
        let decimal= former + 1
        
        while(true){
        
            const isContained124 = String(decimal).split("").every((value)=>{
                return value==='1' || value==='2' || value === '4' ? true : false
            })

            if(!isContained124){
                decimal++
                continue
            }
            
            former = decimal
            break
    
        }
    }

    return String(former)
}
