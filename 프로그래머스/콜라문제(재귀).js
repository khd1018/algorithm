function solution(a, b, n) {
    
    if(n<a){
        return 0
    }
    
    const receivedCoke = parseInt(n/a) * b
    const remainder = n%a
    
    return receivedCoke + solution(a,b,receivedCoke+remainder)
}
