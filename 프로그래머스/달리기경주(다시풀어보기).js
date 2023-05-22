function solution(players, callings) {
    
    const rankOfPlayers = {}
    
    players.forEach((player,rank)=>{
        rankOfPlayers[player] = rank
    })
    
    callings.forEach(calledName=>{
        const originRankOfCalled =  rankOfPlayers[calledName]
        const overtakenPlayer = players[originRankOfCalled-1]
        players[originRankOfCalled] = overtakenPlayer
        players[originRankOfCalled-1] = calledName
        rankOfPlayers[calledName] --
        rankOfPlayers[overtakenPlayer] ++
        
    })
    return players
}
