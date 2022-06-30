function solution(s) {
    
    const answer = []
    const arr = s.slice(2,-2).split("},{")
        .map((str)=> str.split(",")
        .map((chr)=> chr * 1))
    
    arr.sort((arr1,arr2)=> arr1.length - arr2.length)
    
    arr.forEach((set)=>{
        set.forEach(num=>{
            if(!answer.includes(num)){
                answer.push(num)
            }
        })
    })
    return answer
}
