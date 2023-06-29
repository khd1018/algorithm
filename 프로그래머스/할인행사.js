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
    
    discountItems.forEach(item =>{
        if(purchaseItems[item]){
            purchaseItems[item]--
        }
    })
    
    return Object.values(purchaseItems).every(value=> value === 0 )
}

const makePurchaseList = (want, number)=>{
    const purchaseList = {}
    
    want.forEach((item,index)=> purchaseList[item] = number[index] )
    
    return purchaseList
}
