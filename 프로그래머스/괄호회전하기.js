function solution(s) {
    
    let count = 0
    let array = s.split("")
    
    for(let x=0;x<s.length;x++){
        if(isBraket(array)) count ++
        
        array.push(array.shift())
        
    }
    
    return count
}

const isBraket = (array)=>{
    
    let str = array[0]
    const brakets = ["()","[]","{}"]
    
    for(let i=1;i<array.length;i++){
        
        str += array[i]
        
        if(brakets.includes(str.slice(-2))){
            
            if(str.length>2) str= str.slice(0,-2)
            else str = ""
            
        }
        
    }
    
    return str.length===0? true : false
    
}

// shift와 unshift를 헷갈려서 헤멧다..
// 시간이 너무 오래 걸림.. slice가 문제라고 생각함..
