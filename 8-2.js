// cd lesson 2 CyclicRotation
// An array A consisting of N integers is given. Rotation of the array means that each element is shifted right by one index, and the last element of the array is moved to the first place. 

// conditions
let A = [3, 8, 9, 7, 6], K = 3 // Output: [9, 7, 6, 3, 8] 


// my answer
const solution = (A, K) => {
    const Num = (K > A.length) ? (K % A.length) : K;

    return Num === 0 ? A : [].concat(A.slice(-Num), A.slice(0, A.length - Num));
}


// solution 1
const solution = (A, K) => {
    let arr = [];
    
    for (i in A) {
        let idx = (Number(i) + K) % A.length;
        arr[idx] = A[i];        
    }
    
    return arr;
}
