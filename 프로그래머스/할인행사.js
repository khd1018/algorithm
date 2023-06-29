function solution(want, number, discount) {
    const purchaseList = { ...makePurchaseList(want, number) }
    let result = 0

    for(let day=0; day < discount.length - 9 ; day++ ){
        const numberOfDiscountItems = { ...getNumberOfDiscountItems( discount.slice(day,day+10) ) }
        if( canBuyAllItems(want,purchaseList,numberOfDiscountItems) ){
            result++
        }
    }
    
    return result
}
    
const canBuyAllItems = (want,purchaseList,numberOfDiscountItems)=>{
    return want.every(item => purchaseList[item] === numberOfDiscountItems[item] )
}

const makePurchaseList = (want, number)=>{
    const purchaseList = {}
    
    want.forEach((item,index)=> purchaseList[item] = number[index] )
    
    return purchaseList
}

const getNumberOfDiscountItems = (discountItems)=>{
    const numberOfDiscountItems = {}
    
    discountItems.forEach( item =>{
        numberOfDiscountItems[item] = numberOfDiscountItems[item] + 1 || 1
    })
    
    return numberOfDiscountItems
    
}
