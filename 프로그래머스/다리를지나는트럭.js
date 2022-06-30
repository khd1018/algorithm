function solution(bridge_length, weight, truck_weights) {
    let [tick, onBridge, weightOnBridge] = [0, [{weight:0, timeToOut: 0}], 0]
    
    while(onBridge.length > 0 || truck_weights.length > 0){
        
        if(onBridge[0].timeToOut === tick) weightOnBridge -= onBridge.shift().weight
      
        if(weightOnBridge + truck_weights[0] <= weight){
            weightOnBridge += truck_weights[0]
            onBridge.push({weight: truck_weights.shift(), timeToOut: tick + bridge_length})
        }else{
            if(onBridge[0]){
              tick = onBridge[0].timeToOut - 1 // 다리를 건너기 직전으로 시간 이동. (어차피 트럭이 건너기 전까지는 다른 트럭이 다리를 건너지 못하므로)
            }
        }
        tick++
    }
    return tick
}


// 다리를 건너는 트럭마다 나오는 시간이 다른 것을 어떻게 처리해야할 줄 몰랐는데 tick + bridge_length 이런 방법을 알게되었다.
// 객체를 활용하자..

