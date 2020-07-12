// pg Level1 연습문제 가운데 글자 가져오기
// 단어 s의 가운데 글자를 반환하는 함수, solution을 만들어 보세요. 단어의 길이가 짝수라면 가운데 두글자를 반환하면 됩니다.

// conditions
let s = "abcde"; // Output: "c"
let s = "qwer"; // Output: "we"


// my answer
const solution = s => {
    let answer = '';
    
    if (s.length % 2 === 0) {
        answer = answer.concat(s[s.length / 2 - 1]);
        answer = answer.concat(s[s.length / 2]);
    } else {
        answer = answer.concat(s[Math.floor(s.length / 2)]);
    }
    
    return answer;
};


// solution 1
const solution = s => {
    return s.substr(Math.ceil(s.length / 2) - 1, s.length % 2 === 0 ? 2 : 1);
};

// solution 2
const solution = s => {
    let answer = '';
    let calc = Number(s.length % 2);       
    let div = Number(s.length / 2);
    
    if (calc === 0) {
       answer = s[div - 1] + s[div];    
    } else if (calc === 1) {
       let data = Math.floor(div);
       answer = s[data];
    }

    return answer;
};