// reduce를 활용해 코드를 더 간결하게 바꿨다. 

function solution(A,B){
    
    A.sort((a,b)=>a-b)
    B.sort((a,b)=>b-a)
    
    return A.reduce((sum,num,i)=>sum+(num*B[i]),0)

}
