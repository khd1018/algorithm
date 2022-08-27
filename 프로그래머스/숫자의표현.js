function solution(n) {

    let answer = 0
    
    for(let i=1;i<Math.ceil(n/2);i++){
        const isN = checkSum(i,n)
        if(!isN){
            continue
        }else{
            answer ++
        }
    }
    
    return answer + 1
}

function checkSum(start,n){
    
    let sum = 0
    
    for(let i=start; i<n; i++ ){
        sum += i
        if(sum<n){
            continue
        }
        
        if(sum>n){
            return false
        }
        
        return true
    }
    
    
}
