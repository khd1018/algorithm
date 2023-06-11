function solution(bridge_length, weight, truck_weights) {

    const trucks = truck_weights.map((weight)=>{
      return {weight: weight,outTime : 0}  
    } )
    
    const totalTrucks = trucks.length
    const passingTrucks = []
    
    let time = 1
    let passingTrucksWeight = 0
    let passedTruckCount = 0
    
    while(true){
        if(passingTrucks.length){
            if(passingTrucks[0].outTime === time){
                const passedTruck = passingTrucks.shift()
                passedTruckCount++
                passingTrucksWeight -= passedTruck.weight
            }
        }
        
        if(passedTruckCount === totalTrucks){
            return time
        }
        
        if(trucks.length){            
            if(!isBridgeFull(bridge_length,passingTrucks.length) && !isOverWeight(passingTrucksWeight,weight,trucks[0].weight)){
                const target = {...trucks.shift()}
                target.outTime = time + bridge_length
                passingTrucks.push( target)
                passingTrucksWeight += target.weight
            }
        }
        
        time++
    }
}
    
const isBridgeFull= (bridge_length,passingTruckCount)=>{
    return bridge_length === passingTruckCount 
}

const isOverWeight = (passingTrucksWeight,weight,truckWeight)=>{
    return truckWeight+passingTrucksWeight > weight
}
