function solution(name, yearning, photo) {
    const scoreByName = {}
    name.forEach((name,index)=>{
        scoreByName[name] = yearning[index]
    })
    
    return photo.map((people)=>{
        
        let totalScoreOfPic = 0
        
        people.forEach(person=>{
            totalScoreOfPic += scoreByName[person] ? scoreByName[person] : 0
        })
        
        return totalScoreOfPic
    })
}
