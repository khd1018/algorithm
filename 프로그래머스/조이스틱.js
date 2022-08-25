function solution(name) {
    let counter = 0
    const rightMove = 1
    const lastIndex = name.length - 1
    let endOfA = 100
    let isBackward = 0
    
    const allA =  'A'.repeat(name.length)
    
    let i = 0
    
    if( name === allA){
        return 0
    }
    
    const countUpDown = (chr)=>{
        if(chr > 'N'){
            return 'Z'.charCodeAt(0) - chr.charCodeAt(0) + 1
        }else{
            return chr.charCodeAt(0) - 'A'.charCodeAt(0)
        }
    }
    
    const findEndOfA = (index)=>{
        let lastIndexOfA=index;
        
        for(let i=index+1;i<name.length;i++){
            if(name[i]!=='A'){
                return lastIndexOfA
            }else{
                lastIndexOfA = i
            }
        }
        return lastIndexOfA
    }
    
    
    while(i<name.length){
        
        counter += countUpDown(name[i])
        if(name[i+1]==='A'){
            endOfA = findEndOfA(i+1)
            const rightCase = endOfA - i
            const leftCase = i
            if(rightCase<leftCase){
                counter = counter+ rightCase + 1
                i = endOfA + 1
            }else{
                counter = counter + leftCase + 1
                i = lastIndex
                isBackward = 1
            }
            
        }else{
            if(isBackward===1) {
                i--
                if(i===endOfA) break
                counter += 1
                
            }else{
                i++
                if(i===name.length){
                    break
                }
                counter += 1
            }
        }
        
    }
    
    
    return counter ;
    // up, down, left, rigth 횟수 세기
    
    // 글자가 a인지 check a이면 이동만 +1
    // a가 아니면 알파벳 변경후 이동 + 1
    // 결과 -1 return 
    
    //예외 케이스

    // 첫, 마지막 글자 제외 모두 a인 경우 > 첫, 마지막만 알파벳 변경, 커서 이동은 +1
    
    // n은 양쪽 모두 13, o부터는 뒤에서 읽는게 낫다
    // 65~90
    
}
