// pg Level1 Hash 완주하지 못한 선수
// 완주하지 못한 선수의 이름을 return 하도록 solution 함수를 작성해주세요.

// conditions
let participant = ["leo", "kiki", "eden"];
let completion = ["kiki", "eden"];  // Output: "leo"


// my answer
const solution = (participant, completion) => {
    participant.sort();
    completion.sort();
    
    for (let i = 0; i < participant.length; i++) {
        if (participant[i] !== completion[i]) return answer = participant[i];
    }
    
    let answer = '';
    return answer;
}


// solution 1
const solution = (participant, completion) => {
    let answer = '';
    
    participant.sort();
    completion.sort();
    
    for(let i = 0; i < participant.length; i++) {
        if(i === participant.length - 1 || participant[i] !== completion[i]) 
            return answer = participant[i];
    }
    
    return answer;
}

// solution 2
const solution = (participant, completion) => {
    let completeMap = new Map();
      
    for (const person of completion) {
        const mapItem = completeMap.get(person);
        completeMap.set(person, mapItem ? mapItem + 1 : 1);
    }
      
    for (const person of participant) {
        const mapItem = completeMap.get(person);
        
        if (!mapItem) {
            return person;
        } else {
            completeMap.set(person, mapItem - 1);
        }
    }
}

