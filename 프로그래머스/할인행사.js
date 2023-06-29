function solution(want, number, discount) {
    const purchaseList = { ...makePurchaseList(want, number) }
    let result = 0

    for(let day=0; day < discount.length - 9 ; day++ ){
        const discountItems = discount.slice(day,day+10) 
        const purchaseItems = {...purchaseList}
        
        if( canBuyAllItems(purchaseItems,discountItems) ){
            result++
        }
    }
    
    return result
}
    
const canBuyAllItems = (purchaseItems,discountItems)=>{
    
    return discountItems.every(item =>{
        if(!purchaseItems[item]){
            return false
        }
        
        purchaseItems[item]--
        return true
    })
    
}

const makePurchaseList = (want, number)=>{
    const purchaseList = {}
    
    want.forEach((item,index)=> purchaseList[item] = number[index] )
    
    return purchaseList
}
