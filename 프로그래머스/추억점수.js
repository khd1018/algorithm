function solution(name, yearning, photo) {
    const scoreByName = {}
    
    name.forEach((name,index)=>{
        scoreByName[name] = yearning[index]
    })
    
    return photo.map((people)=>{
        
        const totalScoreOfPic = people.reduce((scoreSum,person)=>{
            scoreSum += scoreByName[person] ? scoreByName[person] : 0
            return scoreSum
        },0)
        
        return totalScoreOfPic
    })
}
