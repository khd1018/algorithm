function solution(record) {
    
    const db = {}
    const answer = []
    const recordArr = record.map(str=> str.split(" "))
    
    
    // 닉네임 변경 기록을 통해 아이디별 최종 닉네임을 기록
    recordArr.forEach((arr)=>{
        if(arr[0]==='Enter'){
            db[arr[1]] = arr[2]
        }else if(arr[0]==="Change"){
            db[arr[1]] = arr[2]
        }
    })
    
    // 다시 기록을 돌면서 메세지를 순서대로 출력
    recordArr.forEach(arr=>{
        if(arr[0]==='Enter'){
            answer.push(`${db[arr[1]]}님이 들어왔습니다.`)  
        }else if(arr[0]==="Leave"){
            answer.push(`${db[arr[1]]}님이 나갔습니다.`)
        }
    })
    
    
    return answer
}

// obj말고 map을 활용하면 더 좋을 것 같다.(수정이 빈번하게 일어날 수 있음)
