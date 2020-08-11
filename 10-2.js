// cd lesson 4 PermCheck
// A non-empty array A consisting of N integers is given. A permutation is a sequence containing each element from 1 to N once, and only once. Returns 1 if array A is a permutation and 0 if it is not.

// conditions
let A = [4, 1, 3, 2] // Output: 1


// my answer
const solution = A => {
    A.sort((l, r) => l - r);
    
    if (A[0] !== 1) {
        return 0;
    }
    
    for (let i = 0; i < A.length - 1; i++) {
        if (A[i + 1] - A[i] !== 1) {
            return 0;
        }
    }
    
    return 1;
}


// solution 1
const solution = A => {
    const N = A.length;
    let count = new Array(N + 1).fill(0);
    
    for (let i in A) {
        if (A[i] > N) {
            return 0;
        }

        if (count[A[i]] > 0) {
            return 0;
        }

        count[A[i]]++;
    }
    
    for (let i = 1; i > N + 1; i++) {
        if (count[i] != 1) {
            return 0;
        }
    }
    
    return 1;
}