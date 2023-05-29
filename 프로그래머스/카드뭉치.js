/*
goal의 단어가 card1에 있는지 card2에 있는지 확인하고 인덱스를 저장. 
현재 비교할 인덱스가 저장한 card1,card2인덱스보다 작으면. no 리턴
인덱스 업데이트


반례) card1의 길이 + card2의 길이가 goal의 길이보다 길 수 있음!
즉, 순서대로 가야되는데, 내가 한 방식대로면 뛰어 넘고 갈 수 있음 (card2IndexOfWord < nowCard2Index)

*/


function solution(cards1, cards2, goal) {
    
    const cardPack1 = [...cards1]
    const cardPack2 = [...cards2]
    
    for(let word of goal){
        if(cardPack1[0]===word){
            cardPack1.shift()
            
        }else if(cardPack2[0]===word){
            cardPack2.shift()
            
        }else{
            return "No"
        }
    }
    
    return "Yes"
}
