
// 끝말잇기 종료 조건 : 중복 단어가 나온 경우 & 끝말잇기가 안 된 경우 
// return 값 : 끝말잇기 실패한 사람의 번호와 끝말잇기 종료되었을 때 차례를 배열로 리턴함. 

// 반복문을 돌면서 words의 단어가 종료 조건을 만족하는지 확인, 만족하지 않으면 array 배열에 추가.
// 종료조건 확인 방법 : includes 메서드를 활용, 단어가 이미 array에 포함되어 잇는지 확인 & array의 마지막 요소의 마지막 알파벳과 현재 words의 단어의 첫글자 같은지 확인


// includes 메서드 사용한게 조금 걸림. words의 단어가 많은 경우 좋은 방법은 아닌 듯 하다.
// indexOf()를 사용해 중복 단어를 찾는 방법도 있더라.. indexOf를 사용하는 걸 왜 생각못했지.. 이 방법이 굳이 배열 만들 필요도 없고 좋은 것 같다.

// words.indexOf(words[i])가 현재 인덱스와 다른 경우 중복 단어임
// words.slice(0,index).indexOf(words[i]) 이렇게 판별할 수도 있음. 이 경우 slice 메서드를 사용하기 때문에 위의 경우가 더 좋아 보임!


function solution(n, words) {
    
    const array = [words[0]]
    let endIndex = 0
    
    for(let i=1;i<words.length;i++){
        
        const lastAlpha = array.at(-1).slice(-1)
        
        if(array.includes(words[i]) || lastAlpha!==words[i][0]){
            
            endIndex = i
            break
        }
        
        array.push(words[i])
    }
    
    if(endIndex===0) return [0,0] 
    
    return [endIndex%n + 1,Math.ceil((endIndex+1)/n)]
    
}

// indexOf 메서드를 사용한 코드

function solution(n, words) {
    
    let lastWord = words[0]
    let endIndex = 0
    
    for(let i=1;i<words.length;i++){
        
        const lastAlpha = lastWord.slice(-1)
        
        if(words.indexOf(words[i])!==i || lastAlpha!==words[i][0]){
            
            endIndex = i
            break
        }
        
        lastWord = words[i]
        
    }
    
    if(endIndex===0) return [0,0] 
    
    return [endIndex%n + 1,Math.ceil((endIndex+1)/n)]
    
}


// 배열 마지막 요소 가져오는 방법
// 1. Array.slice(-1)[0] 
//2. Array.at(-1)
//3. Array.pop() : pop은 마지막 요소를 배열에서 삭제하면서 반환

// 문자열 마지막 요소 가져오는 방법
// 1. String.slice(-1)
// 2. String.substr(-1)
