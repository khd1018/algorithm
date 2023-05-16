const INDICATORS = [["R","T"],["C","F"],["J","M"],["A","N"]]
const MIDPOINT = 4

function solution(survey, choices) {
    
    const scores = {}
    
    INDICATORS.forEach(indicator=>{
        indicator.forEach(type=> scores[type]=0)
    })
    
    return getTestResult(getScore(survey,choices,scores))
}


const getScore = (survey,choices,scores)=>{
    survey.forEach((surveyType,surveyOrder)=>{
        const choice = choices[surveyOrder]
        if(choice===MIDPOINT){
            return
        }
        
        scores[selectTypeBy(choice,surveyType)] += calculateScoreBy(choice)
    })
    
    return scores
}

const getTestResult = (scores)=>{
    const testResult = INDICATORS.map(([type1,type2])=>{
        return scores[type2] > scores[type1] ? type2 : type1
    })
    
    return testResult.join("")
}

const selectTypeBy = (choice,surveyType)=>{
    return choice > MIDPOINT ? surveyType[1] : surveyType[0]
}
    
const calculateScoreBy = (choice)=> {
    return Math.abs(choice - MIDPOINT)
}

