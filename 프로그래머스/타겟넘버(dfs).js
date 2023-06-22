function solution(numbers, target) {

    const dfs = (sum,index)=>{
        
        if(index===numbers.length){
            return target===sum ? 1 : 0
        }
        
        return dfs(sum+numbers[index],index+1) + dfs(sum-numbers[index],index+1)
    }

    return dfs(0,0)
}
