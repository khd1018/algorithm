// 문제를 제대로 안읽어서 시간이 많이 듦.. 문제 좀 제대로 읽자!!!
// 정규표현식 좀 익숙하게 만들자!!

// /[a-zA-Z]/g와 /^[a-zA-Z]+$/ 의 차이 [a-zA-Z]/g는 왜 안되지?  > 알파벳만 있으면 true이므로 "a "나 "b+"같은 케이스를 true로 반환함!!  

function solution(str1, str2) {
    
    const [array1,array2] = [makeArray(str1),makeArray(str2)] 
    const [length1,length2] = [array1.length,array2.length]
    let interCount = 0
    
    // 두 집합이 공집합인 경우 65536 리턴
    if(length1 === 0 && length2===0) {
        return 65536
    }
    
    // 교집합 원소의 개수를 구한다.
    array1.forEach((el)=>{
        if(array2.includes(el)) {
            interCount ++
            array2.splice(array2.indexOf(el),1)               // 교집합 원소를 찾으면 배열에서 삭제해서, "BAAAA","AAA"와 같은 경우를 해결함.
        }
    })
    
    let unionCount = length1 + length2 - interCount
    
    return parseInt((interCount/unionCount)*65536)
}

const makeArray = (str)=>{
    
    const array = []
    const regax= /^[a-zA-Z]+$/
    
    for(let i=0;i<str.length-1;i++){
        const part =  str.slice(i,i+2)

        if(regax.test(part)){
            array.push(part.toLowerCase())
        }

    }
    return array   
}
