function solution(fees, records) {
    
    const [dTime,dFee,uTime,uFee] = fees
    const record = {}
    
    // record 객체에 자동차별 출입시간 저장
    records.forEach((str)=>{
        const [time,car,action] =str.split(" ")
        const timeArr =time.split(":").map(v=> v * 1)
        const minutes = (timeArr[0] * 60) + timeArr[1]
        if(record[car]){
            record[car].push([minutes,action])
        }else{
            record[car]=[[minutes,action]]
        }
    })
    
    const sortedKeys = Object.keys(record).sort((a,b)=> Number(a)-Number(b))
    
    // 주차요금 계산
    return sortedKeys.map((key)=>{
        
        const times = record[key]
        
        if(times.length%2===0){
            
            let useTimes =times.reduce((total,arr)=>{
                if(arr[1]==="IN") total -= arr[0]
                if(arr[1]==="OUT") total += arr[0]

                return total
            },0)
            if(useTimes>dTime){
                return dFee + Math.ceil((useTimes-dTime)/uTime)*uFee
            } 
            else {
                return dFee
            }
            
        }else{
            let useTimes =times.reduce((total,arr)=>{
                if(arr[1]==="IN") total -= arr[0]
                if(arr[1]==="OUT") total += arr[0]
                return total
            },0)
            useTimes += ((23*60)+59)
            
            if(useTimes>dTime){
                return dFee + (Math.ceil((useTimes-dTime)/uTime)*uFee)
            } 
            else {
                return dFee
            }
            
        }
    })
    
}

// 주차요금 계산할 때 중복되는 코드가 많아서 코드가 길어진 것같다.
// 따로 이부분을 함수로 만들거나 혹은 처음에 시간을 저장할 때, 요금만 계산할 수 있게 시간을 바꿨다면 코드가 줄어들었을 것 같다..
