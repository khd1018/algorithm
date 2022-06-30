function solution(priorities, location) { 
    
    // 초기 인덱스를 나중에 추적할 수 있게 객체로 저장해둠. 
    const defaultArr = priorities.map((priority,index)=>{
        return{
            index,
            priority
        }
    })
    
    const completedDoc = []
    
    while(defaultArr.length>0){
        
        // 문제의 설명대로 구현
        const firstDoc = defaultArr.shift()
        
        const isNotHighest = defaultArr.some((obj)=> obj.priority > firstDoc.priority)
        
        if(isNotHighest){
            defaultArr.push(firstDoc)
            
        }else{
            completedDoc.push(firstDoc)
        }
    }
    
    return completedDoc.findIndex((obj)=> obj.index === location ) + 1
}


// some()은 배열 내 요소 중 판별함수에 대해 true를 반환하는 요소가 있는지 확인하는 메서드이다
// findIndex()은 배열 내에서 조건을 만족하는 요소의 인덱스를 반환

