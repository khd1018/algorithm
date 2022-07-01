function solution(s) {
    
    const result = []
    
    // 문자열 자를 단위를 반복
    for(let div= 1; div<= parseInt(s.length/2); div++){
        
        let i = 0
        let j = i  // 같은 문자열 발견시 사용할 인덱스
        let repeated = s.slice(i,i+div)  // 초기 반복 문자열 값
        let sameCount = 0   // 같은 문자열을 발견했을 때 카운트
        let zip = ""  // 압축된 문자열 
        
        
        // 문자열 s에서 같은 문자열 찾기
        while(i<s.length){
            
            if(repeated === s.slice(j,j+div)){
                sameCount ++
                j += div
            }else{
                if(sameCount===1){
                    zip += repeated
                    
                }else{
                    zip = zip + sameCount + repeated
                }
                sameCount = 0
                i = j
                repeated = s.slice(i,i+div)
            }
            
        }

        
        result.push(zip.length)
        
    }

    return s.length===1? 1 : Math.min(...result)
}
