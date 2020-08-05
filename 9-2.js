// cd lesson 3 PermMissingElem
// An array A consisting of N different integers is given. The array contains integers in the range [1..(N + 1)], which means that exactly one element is missing. Your goal is to find that missing element.

// conditions
let A = [2, 3, 1, 5] // Output: 4


// my answer
const solution = A => {
    const expected = (A.length + 1) * (A.length + 2) / 2;
    const real = A.reduce((a, b) => a + b, 0);
    
    return expected - real;
}


// solution 1
const solution = A => {
    A.sort((a,b) => a - b);
    
    if (A.length === 0 || A[0] !== 1) {
        return 1;
    }
    
    for (let i = 0 ; i < A.length; i++) {
        if (A[i + 1] - A[i] !== 1) {
            return A[i] + 1;
        }
    }
}