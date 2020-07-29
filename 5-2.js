// hr Warmup Simple array Sum
// Given an array of integers, find the sum of its elements.

// conditions
let ar = [2, 3, 6]  // Output: 12


// my answer
const simpleArraySum = ar => {
    let result = 0;
    for (let i = 0; i < ar.length; i++) {
        result += ar[i];
    }

    return result;
};