// lru 알고리즘을 제대로 이해하지 못해 문제를 풀지 못함
// 다른 사람 코드를 보고 이해했고 코드를 작성함

// 핵심은 처음 등장하거나 두번 이상 등장한(자주 등장한) 도시는 배열의 맨 앞으로 보내는 것이다.
// 그리고 캐시사이즈를 넘어섰을 시 pop을 해주는 것!
// 이렇게 하면 자주 사용되는 도시를 캐시의 앞쪽에 있을 것이고 자주 사용되지 않는 도시는 뒤에 있게 됨!

function solution(cacheSize, cities) {
    
    if(cacheSize===0) return cities.length * 5
    
    const cache = []
    let time = 0
    
    for(let i=0;i<cities.length;i++){
        
        const city = cities[i].toLowerCase()
        
        if(cache.includes(city)){
            
            cache.splice(cache.indexOf(city),1)
            cache.unshift(city)
            time += 1
            
        }else{
            
            if(cache.length >= cacheSize){
                cache.pop()
            }
            
            cache.unshift(city)
            time += 5
        }
        
    }
    
    return time
}

// includes 메서드 대신 indexOf를 활용해서 코드를 수정함.
// 어차피 indexOf를 사용하기 때문에 굳이 includes를 할 필요 없다고 생각함.

function solution(cacheSize, cities) {
    
    if(cacheSize===0) return cities.length * 5
    
    const cache = []
    let time = 0
    
    for(let i=0;i<cities.length;i++){
        
        const city = cities[i].toLowerCase()
        const index = cache.indexOf(city)
        
        if(index!==-1){
       
            cache.splice(index,1)
            cache.unshift(city)
            time += 1
            
        }else{
            
            if(cache.length >= cacheSize){
                cache.pop()
            }
            
            cache.unshift(city)
            time += 5
        }
        
    }
    
    return time
}
