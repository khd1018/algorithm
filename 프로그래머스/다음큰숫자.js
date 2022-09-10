//비교하려고 하는 값이 문자인지 숫자인지 한번 더 확인하자!!

function solution(n) {
    
    const n1= countOne(n)
    
    while(true){
        
        n++
        const n2=countOne(n)
        
        if(n1===n2){
           return n
        }
        
        
    }
    
}

const countOne = (n)=>{
    
    const binary= n.toString(2)
    let count = 0
    
    for(let i=0;i<binary.length;i++){
        if(binary[i]==='1') count++
        }
    

    return count
}
