function solution(n, wires) {
    const result = []
    
    wires.sort((a,b)=> a[0]-b[0])
    wires.sort((a,b)=>a[1]-b[1])
    
    if(n===2){
        return 0
    }
    
    wires.forEach((brokenWire,brokenWireIndex)=>{
        const removedWires=[...wires.filter((_,index)=> index!==brokenWireIndex)]
        const nodes1 = new Set([...removedWires[0]])
        const nodes2 = new Set()
        
        for(let row=1; row < removedWires.length; row++){
            const [v1,v2] = removedWires[row]
            
            if(nodes1.has(v1)|| nodes1.has(v2)){
                nodes1.add(v1).add(v2)
            }else{
                nodes2.add(v1).add(v2)
            }
        }
        
        if( nodes1.has(brokenWire[0])){
            nodes1.add(brokenWire[0])
            nodes2.add(brokenWire[1])
        }else{
            nodes1.add(brokenWire[1])
            nodes2.add(brokenWire[0])
        }

        result.push( Math.abs( nodes1.size - nodes2.size ) )
        
    })
    
    return Math.min(...result)
    
}
