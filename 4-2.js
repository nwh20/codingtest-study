// pg Level1 연습문제 2016년
// 2016년 1월 1일은 금요일입니다. 2016년 a월 b일은 무슨 요일일까요?

// conditions
let a = 5;
let b = 24; // Output: "TUE"


// my answer
const solution = (a, b) => {
    let days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
    let date = new Date(`${a}, ${b}, 2016`).getDay();
    let answer = days[date];
    
    return answer;
}


// solution 1
const solution = (a, b) => {
    return ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'][new Date(2016, a - 1, b).getDay()];
}

// solution 2
const solution = (a, b) => {
    let date = new Date(2016, (a - 1), b); 
    return date.toString().slice(0, 3).toUpperCase();
}