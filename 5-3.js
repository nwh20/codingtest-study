// hr Warmup 3 A Very Big Sum
// Calculate and print the sum of the elements in an array, keeping in mind that some of those integers may be quite large.

// conditions
let ar = [1000000001, 1000000002, 1000000003, 1000000004, 1000000005]  // Output: 5000000015


// my answer
const aVeryBigSum = ar => {
    let result = 0;
    
    for (let i = 0; i < ar.length; i++) {
        result += ar[i];
    }

    return result;
}