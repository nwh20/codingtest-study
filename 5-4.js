// hr Warmup Diagonal Difference
// Given a square matrix, calculate the absolute difference between the sums of its diagonals.

// conditions
let ar = [
    [11, 2, 4], 
    [4, 5, 6], 
    [10, 8, -12]
]  // Output: 15 ( (11 + 5 + (-12)) - (4 + 5 + 10) )


// my answer
const diagonalDifference = arr => {
    let result1 = 0;
    let result2 = 0;

    for (let i = 0; i < arr.length; i++) {
        result1 += arr[i][i];
        result2 += arr[arr.length - 1 - i][i];
    }

    return Math.abs(result1 - result2);
}
