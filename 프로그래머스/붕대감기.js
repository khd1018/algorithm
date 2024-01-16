/*

- 공격당했는지 확인
    - 공격x > 연속성공인지 확인해 > 연속 성공이면 추가회복량이랑 회복량 더해. > 30넘는지 확인 > 30넘으면 30으로 
                                연속 성공아니면 회복량만 더해
    - 공격0 > 점수 빼고 연속 점수 초기화.

- 공격당했는지 확인하는 기능
- 연속 성공인지 확인하는 기능
- 최대 체력인지 확인하는 기능
- 공격당했는지 확인하는 기능


파라미터 값 왠만해서 건들이지 말자!!! 
문제 잘 읽자!!

*/


function solution(bandage, health, attacks) {
    const totalAttackCount = attacks.length
    const [castTime,recoveryAmount,bonusRecovery] = bandage
    
    let currentHealth = health
    let time = 1
    let successTimeCount = 0
    let attackCount = 0
    
    while( currentHealth > 0 && attackCount < totalAttackCount ){
       
        const [attackTime,damage] = [ ...attacks[attackCount] ]
        
        if( !isAttacked( time,attackTime ) ){
            if( isCastingSucceed( ++successTimeCount,castTime ) ){
                currentHealth += bonusRecovery
                successTimeCount = 0
            }
            
            currentHealth += recoveryAmount
            
            if(isExceeded( health,currentHealth )){
                currentHealth = health
            }
            
        }else{
            currentHealth -= damage
            successTimeCount = 0
            attackCount++
        }
        
        time++
    }

    return currentHealth > 0 ? currentHealth : -1
}

const isExceeded = (health,currentHealth)=>{
    return currentHealth > health ? true : false
}

const isCastingSucceed = (successTimeCount,castTime)=>{
    return successTimeCount===castTime
}

const isAttacked = (time,attackTime)=>{
    return time === attackTime
}

