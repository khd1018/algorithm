function solution(ingredient) {
    const regex = /(1231)/
    let ingredients = ingredient.join("")
    let result = 0
    
    while(regex.test(ingredients)){
        ingredients = ingredients.replace(regex,"")
        result++
    }
    
    return result
}
