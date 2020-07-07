// pg Level1 연습문제 같은숫자는 싫어
// 배열 arr에서 연속적으로 나타나는 숫자는 제거하고 남은 수들을 return 하는 solution 함수를 완성해 주세요.

// conditions
let arr = [1, 1, 3, 3, 0, 1, 1]; // Output: [1, 3, 0, 1]


// my answer
const solution = arr => {
    let answer = [];
    
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== arr[i + 1]) {
           answer.push(arr[i]);
        };
    }
    
    return answer;
};

// solution 1
const solution = arr => {
    return arr.filter((v, i) => v !== arr[i + 1]);
};

// solution 2
const solution = arr => {
    let answer = [];
    let now = arr[0];
    
    answer.push(now);
    
    for (let i = 1;i < arr.length; i++) {
        if (now !== arr[i]) {
            now = arr[i];
            answer.push(now);
        }
    }
    
    return answer;
};