function solution(capacityOfBox, tangerine) {
    const numberOfTangerineByType = Object.values( countTangerineByType(tangerine) ).sort((a,b)=> b-a)
    let box = 0
    let typeCount = 0

    for(let numberOfTangerine of numberOfTangerineByType){
        box += numberOfTangerine
        typeCount++

        if( box >= capacityOfBox ){
            return typeCount 
        }
    }
}

const countTangerineByType = (tangerine)=> {
    const numberOfTangerines = {}
    
    tangerine.forEach(type=>{
        numberOfTangerines[type] = numberOfTangerines[type] + 1 || 1
    })
    
    return numberOfTangerines
}
