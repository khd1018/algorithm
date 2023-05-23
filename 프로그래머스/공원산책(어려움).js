/*
시작위치의 좌표를 확인하는 기능
이동가능한지 확인하는 기능
    공원을 벗어나는지 확인하는 기능
    장애물을 만나는지 확인하는 기능
이동한 위치로 좌표를 수정하는 기능
*/


function solution(park, routes) {
    
    let [row,column] = [...findStartLocation(park)]
    const direction = {
        W :  [0,-1],
        E : [0,1],
        N : [-1,0],
        S : [1,0]
    }
    
    routes.forEach(route=>{
        const [op,n] = [...route.split(" ")]
        const [dy,dx] = [...direction[op]]
        
        for(let i=1;i<=n;i++){
            const tempRow = (dy * i) + row
            const tempColumn = (dx * i) + column 
            
            if(!canMove(tempRow,tempColumn,park)){     
                return
            }
        }
        row = (dy * n) + row
        column = (dx * n) + column 
    })
    
    return [row,column]
}

const canMove = (tempRow,tempColumn,park)=>{
    
    if(!park[tempRow]){
        return false
    }

    if(!park[tempRow][tempColumn]){
        return false
    }

    if(park[tempRow][tempColumn] === "X"){
        return false
    }
    
    return true
}

const findStartLocation = (park)=>{
    for(let rowIndex=0; rowIndex<park.length; rowIndex++){
        const row = park[rowIndex]
        const columnIndex = row.indexOf("S")
        
        if(columnIndex!==-1){
            return [rowIndex,columnIndex]
        }
    }
}
