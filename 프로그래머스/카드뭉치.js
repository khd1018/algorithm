/*
goal의 단어가 card1에 있는지 card2에 있는지 확인하고 인덱스를 저장. 
현재 비교할 인덱스가 저장한 card1,card2인덱스보다 작으면. no 리턴
인덱스 업데이트


반례) card1의 길이 + card2의 길이가 goal의 길이보다 길 수 있음!
즉, 순서대로 가야되는데, 내가 한 방식대로면 뛰어 넘고 갈 수 있음 (card2IndexOfWord < nowCard2Index)

*/


function solution(cards1, cards2, goal) {
    
    let nowCard1Index = -1
    let nowCard2Index = -1
    
    const result = goal.every((word)=>{
        const card1IndexOfWord= cards1.indexOf(word)
        const card2IndexOfWord= cards2.indexOf(word)
        
        if(card1IndexOfWord === -1){
            if(card2IndexOfWord - nowCard2Index !== 1){
                return false
            }
            
            nowCard2Index = card2IndexOfWord
        }else{
            if(card1IndexOfWord - nowCard1Index !==1){
                return false
            }
            
            nowCard1Index = card1IndexOfWord
        }
        
        return true
    })
    
    return result ? "Yes" : "No"
}
