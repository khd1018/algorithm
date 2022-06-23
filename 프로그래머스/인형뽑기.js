function solution(board, moves) {
    
    // moves의 원소는 board의 열을 의미한다.
    // moves의 원소를 돌면서 해당하는 board의 열을 탐색, 열의 값이 0이 아닌경우 해당 값을 바구니 배열에 추가(push), 해당 board의 값을 0으로 변경
    // 해당 과정을 반복. 만약 바구니에 마지막값과 추가하려는 값이 같으면 pop, 다를 경우 push
    // pop하게되면 count ++
    let popCount = 0
    const basket = []
    
    moves.forEach((col)=>{
        
        for(let row=0;row<board.length;row++){
            
            const doll = board[row][col-1]
            board[row][col-1] = 0
            
            if(doll!==0){
                if(basket[basket.length-1]===doll){

                    basket.pop()
                    popCount ++
                    break
                }else{
                    basket.push(doll)
                    break
                }
                
            }
        }
    }) 
    return popCount * 2
}
