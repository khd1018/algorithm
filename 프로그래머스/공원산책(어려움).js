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
        W :  -1,
        E : 1,
        N : -1,
        S : 1
    }
    
    const routeArr = routes.map((route)=> route.split(" "))
    
    routeArr.forEach(([op,n],index)=>{
        let [tempRow,tempColumn]= [row,column]
        
        if(op === "W" || op === "E"){
            tempColumn += (direction[op] * n)
            if(!isColumnMovable(row,column,tempColumn,park)){
                return
            }
            
            column = tempColumn
            
        }else{
            tempRow += (direction[op] * n)
            if(!isRowMovable(row,column,tempRow,park)){
                return
            }
            row = tempRow
        }
       
    })
    
    return [row,column]
}

const isRowMovable = (row,column,tempRow,park)=>{
    
    let y = row
    const isBigger = row < tempRow
    
    while(isBigger? y<=tempRow : y>=tempRow){
        
        if(!park[y]){
            return false
        }
        
        if(park[y][column]==="X"){
            return false
        }
        
        isBigger ? y++ : y--
        
    }
    
    return true
}

const isColumnMovable = (row,column,tempColumn,park)=>{
    let x = column
    const isBigger = column < tempColumn
    while(isBigger? x <= tempColumn : x >= tempColumn){
        
        if(!park[row][x]){
            return false
        }
        
        if(park[row][x]==="X"){
            return false
        }
        
        isBigger ? x++ : x--
        
    }
    
    return true

}

const findStartLocation = (park)=>{
    
    let [x,y] = [0,0]
    
    loop:
    for(let rowIndex=0; rowIndex<park.length; rowIndex++){
        const row = park[rowIndex]

        for(let columnIndex=0; columnIndex<row.length; columnIndex++){
            if(row[columnIndex]==="S"){
                x = columnIndex
                y =  rowIndex
                break loop
            }
        }
    }
    
    return [y,x]
}
