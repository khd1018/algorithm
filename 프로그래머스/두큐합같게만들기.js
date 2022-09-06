// shift와 push를 활용하여 풀려고 했으나 queue의 길이가 최대 30만이라서 다른 방법을 찾아봤다.
// 투포인터를 활용하면 된다는 힌트를 얻었으나 문제를 제대로 이해하지 못해 풀지 못하였고 다른 사람들의 풀이를 참고하여 풀 수 있었다.
// 하나의 큐의 합이 전체의 반이되게 만들면 되는 것을 깨닫지 못했다.. 

// queue1Sum-= combined[pointer1++] 이런 방식으로 코드를 깔끔하게 만들 수 있다. 잘 활용하자!
// 문제를 잘 읽자!!


function solution(queue1, queue2) {
    let queue1Sum = sum(queue1)
    const combined = [...queue1,...queue2]
    const targetSum = sum(combined)/2
    const maxCount = queue1.length * 3
    
    let pointer1 = 0,
        pointer2 = queue1.length
    
    if(!Number.isInteger(targetSum)){
        return -1
    }
    
    for(let count=0; count< maxCount; count++){
        if(queue1Sum===targetSum){
            return count
            
        }else if(queue1Sum>targetSum){
            queue1Sum-= combined[pointer1++]
            
        }else{
            queue1Sum += combined[pointer2++]
        }
    }
    
    
    
    return -1
    
}

const sum = (array)=>{
    return array.reduce((sum,v)=> sum + v)   
}
