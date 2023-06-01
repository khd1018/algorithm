/*
1. keyPushMap에 알파벳별 자판 최소 횟수를 저장


*/

function solution(keymap, targets) {
    const keyPushMap = {}
    
    keymap.forEach(key=>{
        for(let i=0; i<key.length; i++){
            if(!keyPushMap[key[i]]){
                keyPushMap[key[i]] = i+1
            }else{
                if(keyPushMap[key[i]] > i){
                    keyPushMap[key[i]] = i+1
                }
            }
        }
    })
    
    return targets.map(target=>{
        let pushSum = 0
        
        for(let i=0; i<target.length;i++){
            pushSum += keyPushMap[target[i]]
        }
        
        return pushSum ? pushSum : -1 
    })

}
