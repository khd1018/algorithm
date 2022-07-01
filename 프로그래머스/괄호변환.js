

function solution(p) {
    
    const correctStr = (str)=>{
        
        if(str.length===0){
            return str
        }
        
        let [u,v] = divideUV(str)

        if(!isRightStr(u)){
            
            let a = "(" + correctStr(v) + ")"
            a += reverseBracket(u.slice(1,u.length-1))
            return a
            
        }else{
            return u+correctStr(v)
        }
        
    }
    
    return correctStr(p)
}

const divideUV = (str)=>{
    
    let [u,v] = ["",""]
    let [openCount,closeCount] = [0,0]
        
    for(let i=0;i<str.length;i++){
        if(str[i]==="(" ) openCount ++
        if(str[i]===")") closeCount ++
        if(openCount===closeCount){
            u = str.slice(0,i+1)
            v = str.slice(i+1)
            break
        }
    }
    return [u,v]
}

const isRightStr = (u)=>{
    
    let string = ""
    for(let i=0;i<u.length;i++){
        if(u[i]===")"){
            string += u[i]
            if(string.slice(-2)==="()"){
                string = string.slice(0,-2)
            }else{
                return false
            }
        }else if(u[i]==="("){
            string += u[i]
        }
        
    }
    
    return true
    
}

const reverseBracket = (u)=>{
    
    let newStr = ""
    
    Array.from(u).forEach(chr=>{
        if(chr==="(") newStr += ")"
        if(chr===")") newStr += "("
    })
    
    return newStr
}


// 문제에서 주어진 알고리즘을 그대로 구현했다..
// 코드가 너무 길어진거같다..
