// pg Level1 연습문제 나누어 떨어지는 숫자 배열
// array의 각 element 중 divisor로 나누어 떨어지는 값을 오름차순으로 정렬한 배열을 반환하는 함수, solution을 작성해주세요.

// conditions
let arr = [5, 9, 7, 10], divisor = 5; // Output: [5, 10]
let arr = [3, 2, 6], divisor = 10; // Output: [-1]


// my answer
const solution = (arr, divisor) => {
    let answer = [];
    
    for (let i=0;i<arr.length;i++) {
        if (arr[i] % divisor === 0) answer.push(arr[i]);
    }
    
    answer.sort(function(a,b){return a-b});
    if (answer.length === 0) answer.push(-1);
    
    return answer;
};


// solution 1
const solution = (arr, divisor) => {
    const answer = arr.filter(el => el % divisor === 0);
    return answer.length ? answer.sort((p, c) => p - c) : [-1];
};

// solution 2
const solution = (arr, divisor) => {
    let answer = [];
    answer = arr.filter((arrList) => arrList%divisor === 0);
    
    if (answer.length === 0) {
        return [-1];
    } else {
        return answer.sort((a, b) => a - b);
    }
};