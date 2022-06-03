function overlap(arr){
    const answer = []
    
    //obj : 숫자n의 개수를 저장하는 객체. 숫자 n을 key, n의 개수를 value
    
    const result= arr.reduce((obj,num)=>{
        obj[num] = (obj[num]||0) + 1
        return obj
    },{})
    
    for(let num in result ){
        if(result[num]>1){
            answer.push(result[num])
        }
    }
    return answer.length ? answer : -1
}


// reduce와 객체를 사용하니 코드가 훨씬 깔끔해졌다.
// 반복횟수도 줄어들었다. 
