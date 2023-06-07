function solution(priorities, location) {
    
    const completedProcess = []
    const processes = priorities.map((priority,processName)=>{
        return {processName,priority}
    })

    while(processes.length>0){
        const targetProcess =  processes.shift()
        const isBiggerPriorityLeft = processes.some(process=> process.priority > targetProcess.priority)
        
        if(isBiggerPriorityLeft){
            processes.push(targetProcess)
        }else{
            completedProcess.push(targetProcess.processName)
        }
    }
    
    return completedProcess.indexOf(location) + 1
}
