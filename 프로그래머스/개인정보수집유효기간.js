function solution(today, terms, privacies) { 
    const categoryTerm = {}
    const result = []
    const [todayYY,todayMM,todayDD] = today.split(".").map(el=>+el)
    
    terms.forEach(term=>{
        const [category,period] = term.split(" ")
        categoryTerm[category] = Number(period)
    })
    
    privacies.forEach((dataCase,caseOrder)=>{
        const [date,category] = dataCase.split(" ")
        let [year,month,day] = date.split(".").map(el=>+el)
        const period = categoryTerm[category]
        
        year += parseInt(period/12)
        month += period%12
        
        if(month>12){
            year++
            month = month % 12
        }
        
        if(year < todayYY){
            result.push(caseOrder+1)
            return
        }
        
        if(year === todayYY){
            if(month < todayMM ){
                result.push(caseOrder+1)
                return
            }
            
            if(month === todayMM){
                if(day <= todayDD ){
                    result.push(caseOrder+1)
                }
            }
        }
    })
    
    return result
}
