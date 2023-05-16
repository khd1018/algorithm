const INDICATORS = [["R","T"],["C","F"],["J","M"],["A","N"]]

function solution(survey, choices) {
    
    const scores = {
        indicator1 : {
            R :0,
            T: 0,
        },
        
        indicator2 : {
            C :0,
            F: 0,
        },
        
        indicator3 : {
            J :0,
            M: 0,
        },
        
        indicator4 : {
            A :0,
            N: 0,
        },
        
    }
    
    survey.forEach((question,questionOrder)=>{
        const choice =choices[questionOrder]
        const selectedType = selectTypeByChoice(choice,question)
        if(!selectedType){
            return
        }
        const indicator = "indicator"+checkIndicator(selectedType)
        scores[indicator][selectedType] += giveScoreByChoice(choice) 
    })
    
    return getResultBy(scores)
 
}

const getResultBy = (scores)=>{
    
    const personalityTestResults = Object.values(scores).map((type)=>{
         const scoresByType= Object.values(type)
         const types = Object.keys(type)
         if(scoresByType[0]===scoresByType[1]) return types[0]
        
         return scoresByType[0]>scoresByType[1] ? types[0] : types[1]
    })
    
    return personalityTestResults.join("")
}

const checkIndicator = (selectedType) =>{
    
    for(let i=0; i<INDICATORS.length; i++){
        if(INDICATORS[i].includes(selectedType)){
            return i+1
        }
    }
}

const selectTypeByChoice = (choice,qeustion)=>{
    if(choice === 4 ) return 0
    return choice > 4 ? qeustion[1] : qeustion[0]
}

const giveScoreByChoice = (choice)=>{
    return Math.abs(choice - 4)
}
