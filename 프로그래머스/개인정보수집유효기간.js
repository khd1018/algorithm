function solution(today, terms, privacies) { 
    const categoryTerm = {...makeTermObject(terms)}
    const result = []
    const [todayYY,todayMM,todayDD] = today.split(".").map(el=>+el)
    
    privacies.forEach((dataCase,caseOrder)=>{
        const [date,category] = dataCase.split(" ")
        const [registYear,registMonth,registDay] = date.split(".").map(el=>+el)
        const [endYear,endMonth] = [...getEndDate(registYear,registMonth,categoryTerm[category])]
        
        if(endYear < todayYY){
            result.push(caseOrder+1)
            return
        }
        
        if(endYear === todayYY){
            if(endMonth < todayMM ){
                result.push(caseOrder+1)
                return
            }
            
            if(endMonth === todayMM){
                if(registDay <= todayDD ){
                    result.push(caseOrder+1)
                }
            }
        }
    })
    
    return result
}

const makeTermObject = (terms)=>{
    
    const categoryTerm = {}
    
    terms.forEach(term=>{
        const [category,period] = term.split(" ")
        categoryTerm[category] = Number(period)
    })
    
    return categoryTerm
}

const getEndDate = (year,month,period)=>{
    
    year += parseInt(period/12)
    month += period%12
        
    if(month>12){
        year++
        month = month % 12
    }
    
    return [year,month]
}

