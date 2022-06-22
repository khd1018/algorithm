function solution(id_list, report, k) {
    
    const excludedReport = [...new Set(report)].map(str=> str.split(" "))
    
    const reportCountById = {} // 각 유저별 신고당한 횟수를 저장하는 객체
    const responseCountById = {} // 각 유저별로 메일을 받는 횟수 저장하는 객체
    
    // 각 유저별 신고당한 횟수를 reportCountById에 저장
    excludedReport.forEach((reportIdList)=>{
        const reportedId = reportIdList[1]
        reportCountById[reportedId] = reportCountById[reportedId] + 1 || 1
    })
    
    // 각 유저가 신고한 유저들 중 정지당한 유저의 숫자를 responseCountById에 저장
    excludedReport.forEach((reportIdList)=>{
        const reportId = reportIdList[0]
        const reportedId = reportIdList[1]
        if( reportCountById[reportedId]>=k){
            responseCountById[reportId] = responseCountById[reportId] + 1 || 1
        }
    })
    
    // 유저별로 신고한 유저 중 정지당한 유저의 숫자를 반환, 없으면 0을 반환
    const answer = id_list.map((id)=>{
        return responseCountById[id] || 0
    })

    return answer

}


