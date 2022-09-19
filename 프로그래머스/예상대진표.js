// 게임을 그대로 구현했음
// 참가자를 담은 배열을 만들고, 각 경기마다 이긴 참가자 배열을 다음 게임에 참가시킴. 참가자 배열을 다음 게임으로 넘겨야하므로 이를 재귀함수로 구현.
// 대상인 a와 b는 무조건 통과시키고, a와 b가 아닌 경우 아무 참가자를 추가.
// a와 b가 만날 시 1을 리턴하고 재귀함수 종료

function solution(n,a,b)
{
    const participants = []
    let [max, min] = [Math.max(a,b),Math.min(a,b)]
    
    // 참가자를 배열에 담음
    for(let i=0;i<n;i++) participants[i] = i+1
    
    const play = (members)=>{
        
        const winners = []
        
        for(let i=0;i<members.length-1;i+=2){
            if(members[i]===min && members[i+1]===max) return 1
            else if(members[i]===min || members[i]===max) winners.push(members[i])
            else if(members[i+1]===min || members[i+1]===max) winners.push(members[i+1])
            else winners.push(members[i])
        }
        
        return play(winners) + 1
    }
    
    return play(participants)

}

// 통과는 했으나 27번 케이스부터 시간효율성이 많이 떨어짐. 그럴거 같았음..
// 분명 다른 간단한 방법이 있을 것이라 생각함

// 다른 방법으로 해결!!
// 참가자의 숫자가 짝수로 주어지는 것에서 착안해 a,b를 나누고 올림하면 다음 라운드  a,b의 순서라는 것을 알게됨.

function solution(n,a,b)
{
    let matchCount = 1
    let [max, min] = [Math.max(a,b),Math.min(a,b)]
    
    while(true){
        
        if(min%2!==0 &&min+1===max) break
        
        min = Math.ceil(min/2)
        max =  Math.ceil(max/2)
        matchCount ++
        
    }
    
    return matchCount
    
}
