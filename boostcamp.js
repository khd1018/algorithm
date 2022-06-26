function countDuplicate (arr) {

    const answer = []
    const numOfDuplicate = {}  // 숫자를 key, arr에서 해당 숫자의 개수를 value로 하는 객체
    
    // 중복 숫자 count
    arr.forEach((num)=>{

        numOfDuplicate[num] = numOfDuplicate[num] + 1 || 1
    })
    
    // 객체를 순회하며 2 이상인 value만 answer에 push 
    for(let num in numOfDuplicate){
        if(numOfDuplicate[num]>1){
            answer.push(numOfDuplicate[num])
        }
    }
    
    return answer.length===0 ? [-1] : answer
}
