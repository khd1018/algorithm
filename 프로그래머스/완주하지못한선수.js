//해시 문제
// OR을 활용해서 초기화하여 코드를 더 깔끔하게 만들 수 있었음

function solution(participant, completion) {
    const participants = {}
    
    // 참가자 명을 key, 해당 이름의 개수를 value로 participants를 초기화
    participant.forEach((name)=>{
        participants[name] = participants[name] + 1 || 1
    })
    
    // 참가자 중 완주한 사람의 숫자를 빼줌
    completion.forEach((name)=>{
        participants[name] --
    })
    
    // 남은 참가자(완주하지 못한)를 리턴
    for(let part in participants){
        if(participants[part] > 0) return part
    }
    
}

