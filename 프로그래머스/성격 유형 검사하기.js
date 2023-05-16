/*
검사한 성격유형이 몇번 지표인지 확인
점수가 4이면 패스, 4미만이면 왼쪽유형, 4초과이면 오른쪽유형 선택.
몇점인지 점수 계산
점수가 높은 유형을 최종 성격 유형으로 결정

*/

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
        if(choice===4) {
            return
        }
        
        scores["indicator"+checkIndicator(question[0])][selectTypeByChoice(choice,question)] += giveScoreByChoice(choice) 
        
    })
    
    return Object.values(scores).map((type,indicatorOrder)=>{
         const scoresByType= Object.values(type)
         const types = Object.keys(type)
         if(scoresByType[0]===scoresByType[1]) return types[0]
        
         return scoresByType[0]>scoresByType[1] ? types[0] : types[1]
    }).join("")
 
}

const checkIndicator = (type) =>{
    const INDICATORS = [["R","T"],["C","F"],["J","M"],["A","N"]]
    for(let i=0; i<INDICATORS.length;i++){
        if(INDICATORS[i].includes(type)){
            return i+1
        }
    }
}

const selectTypeByChoice = (choice,qeustion)=>{
    return choice > 4 ? qeustion[1] : qeustion[0]
}

const giveScoreByChoice = (choice)=>{
    return Math.abs(choice - 4)
}
