function solution(n, wires) {
    const result = []
    
    wires.forEach((brokenWire,brokenWireIndex)=>{
        const removedWires = wires.filter((_,i)=> i!==brokenWireIndex)
        const parents = [...unionParent(n,removedWires)]
        const [powerGridA,powerGridB] = [...countChildNodes(parents)]
        
        result.push( Math.abs( powerGridA - powerGridB ) )
    })
    
    return Math.min(...result)
}

const countChildNodes = (parents)=>{
    
    const childCountOfParents = {}
    
    for(let i=1; i<parents.length; i++){
        const parent = getParent(i,parents)
        childCountOfParents[parent] =  childCountOfParents[parent] + 1 || 1
    }
    
    return Object.values(childCountOfParents)
}

const unionParent = (n,removedWires)=>{
    const parents = [...makeParent(n+1)]
        
    removedWires.forEach(([v1,v2])=>{
        const v1Parent = getParent(v1,parents)
        const v2Parent= getParent(v2,parents)
            
        if(v1Parent<v2Parent){
            parents[v2Parent] = v1Parent
        }else{
            parents[v1Parent] = v2Parent
        }
    })
    
    return parents
}

const getParent = (v,parents)=> {
    if(parents[v]===v){
        return v
    }    

    return getParent(parents[v],parents)
}

const makeParent = (n)=>{
    const parents = new Array(n).fill(0)
    
    for(let i=1; i<n; i++){
        parents[i] = i
    }
    
    return parents
}
