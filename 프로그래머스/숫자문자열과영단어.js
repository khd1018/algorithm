// 나의 풀이

function solution(s) {

    let numStr = ""
    let answer = ""
    
    const NUM_DIC = {"zero":"0", "one":"1", "two":"2", "three":"3", "four":"4", "five":"5", "six":"6", "seven":"7", "eight":"8", "nine":"9",}

    Array.from(s).forEach((chr)=>{
      
        // 문자가 숫자이면 answer 문자열에 그냥 추가, 숫자가 아니면 numStr에 추가함
        if(isNaN(chr)){
            numStr += chr
          
            // numStr로 숫자 문자열이 만들어지면 NUM_DIC에서 해당하는 숫자를 가져온 후 answer에 추가
            if(NUM_DIC[numStr]){
                answer += NUM_DIC[numStr]
                numStr = ""
            }
        }else{
                answer += chr
            }
    })
    return parseInt(answer)
}


// 다른 사람의 풀이 - 배열과 split,join 을 활용해 멋지게 풀었다..
// 문자열을 구분자로 이렇게 활용할 수도 있다는 것을 알게됨

function solution(s) {
    let numbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    var answer = s;

    for(let i=0; i< numbers.length; i++) {
        let arr = answer.split(numbers[i]);
        answer = arr.join(i);
    }

    return Number(answer);
}
