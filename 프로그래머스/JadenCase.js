function solution(s) {
    // 공백문자열을 인덱스로 직접 접근했을 때 undefined를 반환함!
    // 이를 해결하기 위해, word[0]이 undefined인지 아닌지 확인한 후 첫글자를 대문자로 변경하도록 수정함
    
  
    const words=s.split(" ")
    return words.map((word)=>{
        if(isNaN(word[0])&&word[0]){
            return word[0].toUpperCase() + word.slice(1).toLowerCase()    // undefined를 대문자로 변환하려고 해서 오류 발생
           }
        return word.toLowerCase()
    }).join(" ")
}


// charAt()을 활용할 수도 있음

function solution(s) {

    const words=s.split(" ")
    return words.map((word)=>{
           return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    }).join(" ")
}
