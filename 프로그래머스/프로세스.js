function solution(priorities, location) {
    
    const processes = priorities.map((_,i)=>i)
    const answer = []
    
    while(processes.length){
        const priorityOfProcess = priorities.shift()
        const processName = processes.shift()
        
        if(priorityOfProcess<Math.max(...priorities)){
            processes.push(processName)
            priorities.push(priorityOfProcess)
        }else{
            answer.push(processName)
        }
    }
    
    return answer.indexOf(location) + 1
}
