function solution(s) {
    
    let count = 0
    let array = s.split("")
    
    for(let x=0;x<s.length;x++){
        if(isBraket(array)) count ++
        
        array.push(array.shift())
        
    }
    
    return count
}

const isBraket = (array)=>{
    
    let str = array[0]
    const brakets = ["()","[]","{}"]
    
    for(let i=1;i<array.length;i++){
        
        str += array[i]
        
        if(brakets.includes(str.slice(-2))){
            
            if(str.length>2) str= str.slice(0,-2)
            else str = ""
            
        }
        
    }
    
    return str.length===0? true : false
    
}

// shift와 unshift를 헷갈려서 헤멧다..
// 시간이 너무 오래 걸림.. slice가 문제라고 생각함..


// 다른방법이생각이안나서 다른 사람 솔루션을 참고함
// 괄호 배열이 아닌 괄호 객체를 활용해서 옳은 괄호인지 확인하더라.. 
// 다른사람이 올린 코드는 "((((" 반례를 통과하지 못해 stack.length가 0일 시 true를 리턴, 아닐시 false를 리턴하도록 하여 해결함.


function solution(s) {
    
    if(s.length%2!==0) return 0
    
    let count = 0
    
    for(let x=0;x<s.length;x++){
        
        const target = s.slice(x) + s.slice(0,x)
        
        if(isBraket(target)) count ++
        
        
    }
    
    return count
}

const isBraket = (target)=>{
    
    const stack = []
    const brakets = {
        ']':'[',
        '}':'{',
        ')':'(',        
    }
    
    for(let i=0;i<target.length;i++){
        
        if(target[i]==='('||target[i]==='{'||target[i]==='['){
            stack.push(target[i])
        }else{
            const last= stack.pop()
            if(last!==brakets[target[i]]){
                return false
            }
        }
        
    }
    
    return stack.length===0
    
}

// 이렇게도 할 수 있으나, 이런 방식으로 코드를 작성하면 반복문 중간에 빠져나올 수 없어 시간이 훨씬 오래 걸린다.

    let checkArr = [];
    const obj = {
        '[': ']',
        '(': ')',
        '{': '}'
    };

    for (let i = 0; i < arr.length; i++) {
        if (obj[checkArr[checkArr.length - 1]] === arr[i]) {
            checkArr.pop();
        } else {
            checkArr.push(arr[i]);
        }
    }

// 가장 빠른 코드
// slice보다 push, pop이 더 효율적인것 같다

function solution(s) {
        
    let count = 0
    let array = s.split("")
    for(let x=0;x<s.length;x++){
        
        if(isBraket(array)) count ++
        array.push(array.shift())
        
    }
    
    return count
}

const isBraket = (target)=>{
    
    const stack = []
    const brakets = {
        ']':'[',
        '}':'{',
        ')':'(',        
    }
    
    for(let i=0;i<target.length;i++){
        
        if(target[i]==='('||target[i]==='{'||target[i]==='['){
            stack.push(target[i])
        }else{
            const last= stack.pop()
            if(last!==brakets[target[i]]){
                return false
            }
        }
        
    }
    
    return stack.length===0
    
}
