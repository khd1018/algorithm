function solution(s, skip, index) {
    const alphabets = [...getAllAlphabets(skip)]
    const targetAlphabets = s.split("")
    
    const convertedS = targetAlphabets.map((targetAlphabet)=>{
        const targetIndex= alphabets.indexOf(targetAlphabet)
        const indexOfconverted = targetIndex + index
        
        return alphabets[ indexOfconverted % alphabets.length ]
    })
    
    return convertedS.join("")
}

const getAllAlphabets = (skip)=>{
    const alphabets = []
    
    for(let i=0;i<26;i++){
        const alphabet = String.fromCharCode(97+i)
        
        if(!skip.includes(alphabet)){
            alphabets.push(alphabet)
        }
    }
    
    return alphabets
}
