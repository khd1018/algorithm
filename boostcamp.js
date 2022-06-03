function overlap(arr){
    const answer = []
    const arrToSet = new Set(arr)
    console.log(arrToSet)
    for(let num of arrToSet){
        let count = 0
        for(let i=0;i<arr.length;i++){
            if(num===arr[i]){
                count++
            }
        }
        if(count===1) continue
        if(count>1){
            answer.push(count)
        }

    }
    return answer.length? answer : -1
}
