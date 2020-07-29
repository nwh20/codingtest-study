// hr Warmup Plus Minus
// Given a square matrix, calculate the absolute difference between the sums of its diagonals. Print the decimal value of each fraction on a new line with  places after the decimal.

// conditions
let arr = [-4, 3, -9, 0, 4, 1]  // Output: 0.500000, 0.333333, 0.166667 (positive, negative, zero)


// my answer
const plusMinus = arr => {
    const len = arr.length;
    let p = 0;
    let n = 0;
    let z = 0;

    for (let val of arr) {
        if (val > 0) p++;
        else if (val < 0) n++;
        else z++;
    }
  
    console.log(Number(p / len).toFixed(6));
    console.log(Number(n / len).toFixed(6));
    console.log(Number(z / len).toFixed(6));
}