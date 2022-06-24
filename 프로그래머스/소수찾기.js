function solution(numbers) {
    const numArr = numbers.split("")
    const permutationArr = [] // 가능한 모든 경우의 숫자를 저장하는 배열
    let primeCount = 0 // 소수의 개수를 저장하는 변수
    
    // 가능한 모든 숫자 구함
    for(let r=1;r<=numbers.length;r++){
        const allPermutation = permutation(numArr,r).map((arr)=>{
            return parseInt(arr.join(""))
        })
        
        permutationArr.push(...allPermutation)
    }
   
    // 중복된 숫자 제외한 나머지 숫자 중 소수의 개수 count
   Array.from([...new Set(permutationArr)]).forEach((num)=>{
        if(checkPrime(num)) primeCount ++
    })
    
    return primeCount
}

function permutation(arr, r) {
    const result = []
    
    if(r===1) return arr.map((num)=>[num])
    
    arr.forEach((fix,idx,org)=>{
        const rest = [...org.slice(0,idx),...org.slice(idx+1)]
        const permutations = permutation(rest,r-1) 
        const attached = permutations.map((arr)=>[fix,...arr])
        result.push(...attached)
    })
    
    return result
    
}

function checkPrime(num) {
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return num >= 2;
}
