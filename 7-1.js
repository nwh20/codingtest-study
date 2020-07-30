// hr Warmup Mini-Max Sum
// Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then print the respective minimum and maximum values as a single line of two space-separated long integers.

// conditions
let arr = [1, 3, 5, 7, 9] // Output: 16, 24 (1+3+5+7, 3+5+7+9)


// my answer
const miniMaxSum = arr => {
    let min = arr[0];
    let max = arr[0];
    let sum = arr[0];
    
    for (let i = 1; i < arr.length; i++) {
        let v = arr[i];
        sum += v;

        if (v > max) max = v;
        if (v < min) min = v;
    }

    console.log(sum - max, sum - min);
}


// solution 1
const miniMaxSum = arr => {
    const maxArr = [...arr].sort((a, b) => a - b);
    const minArr = [...arr].sort((a, b) => b - a);
    const max = maxArr.slice(arr.length - 4).reduce((acc, no) => acc += no, 0);
    const min = minArr.slice(arr.length - 4).reduce((acc, no) => acc += no, 0);

    console.log(min + ' ' + max);
}