function solution(id_list, report, k) {
    
    // 각 유저별로 처리 결과 메일을 받은 횟수를 배열에 담아 return
    
    const reportInfoById = {} // 각 유저별 신고한 유저를 담는 객체
    const reportCountById = {} // 각 유저별 신고당한 횟수를 담는 객체
    
    // 객체들을 각각 빈배열과 0으로 초기화
    id_list.forEach(id=>{
        reportInfoById[id] = [] 
        reportCountById[id] = 0
    })
    
    // 문자열로 구성된 report을 순회하며 신고한 아이디와 신고당한 아이디 분리하여 각 객체에 값을 할당
    report.forEach((str)=>{
        const reportId = str.split(" ")[0]
        const reportedId = str.split(" ")[1]
        
        // 한 유저가 같은 유저를 중복 신고한 경우 제외
        if(!reportInfoById[reportId].includes(reportedId)){
            reportInfoById[reportId].push(reportedId)
            reportCountById[reportedId] += 1
        }
    })
    // 신고당한 회수가 k이상인 유저(정지당한 유저)를 배열로 저장
    const bannedIdList= Object.keys(reportCountById).filter((id)=>{
        return reportCountById[id] < k ? false : true 
    })
    
    // 각 유저가 신고한 유저 중 정지당한 유저의 숫자를 배열로 반환
    const answer = id_list.map((user)=>{
        let count = 0
        const idListReportedByUser= reportInfoById[user]
        bannedIdList.forEach((bannedId)=>{
            if(idListReportedByUser.includes(bannedId)) count++
        })
        
        return count
        
    })
    
    
    return answer

}
