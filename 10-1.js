// cd lesson 4 FrogRiverOne
// A small frog wants to get to the other side of a river. The frog is initially located on one bank of the river (position 0) and wants to get to the opposite bank (position X+1). Leaves fall from a tree onto the surface of the river.

// conditions
let A = [1, 3, 1, 4, 2, 3, 5, 4], X = 5 // Output: 6


// my answer
const solution = (X, A) => {
    let val = -1;
    let arr = {};
    let jump = 0;
    
    for(let i = 0; i < A.length; i++) {
        if (!arr[A[i]]) {
            arr[A[i]] = A[i];
            jump++;
        } 
        
        if (jump == X) {
            val = i;
            break;
        }
    }
    
    return val;
}


// solution 1
const solution = (X, A) => {
    const s = new Set();
    
    for (let i = 0, leng = A.length; i < leng; i++) {
        const value = A[i];
        s.add(value);
            
        if (s.size === X) {
            return i;
        }
    }
    
    return -1;
}