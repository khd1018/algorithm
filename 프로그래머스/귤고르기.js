function solution(k, tangerine) {
    const box = []
    const numberOfTangerines = {}
    
    tangerine.forEach(type=>{
        numberOfTangerines[type] = numberOfTangerines[type] + 1 || 1
    })
    
    const typeOfTangerine = Object.keys(numberOfTangerines).sort((a,b)=> numberOfTangerines[b] - numberOfTangerines[a])
    let sum = 0
    let count = 0
    
    for(let type of typeOfTangerine){
        sum += numberOfTangerines[type]
        count++
        
        if(sum>=k){
            return count 
        }
    }
    
    
    
}
