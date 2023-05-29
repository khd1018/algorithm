function solution(s) {
    let seperatedStringCount = 0;
    let x = "";
    let xCounter = 0;

    for(let i = 0; i < s.length; i++) {
        if(!xCounter) {
            seperatedStringCount++;
            xCounter = 1
            x = s[i]
            
        } else {
            x === s[i] ? xCounter++ : xCounter--
        }
    }

    return seperatedStringCount;
}
