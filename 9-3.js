// cd lesson 3 TapeEquilibrium
// A non-empty array A consisting of N integers is given. Array A represents numbers on a tape. Any integer P, such that 0 < P < N, splits this tape into two non-empty parts: A[0], A[1], …, A[P − 1] and A[P], A[P + 1], …, A[N − 1]. The difference between the two parts is the value of:	(A[0] + A[1] + … + A[P − 1]) − (A[P] + A[P + 1] + … + A[N − 1]). In other words, it is the absolute difference between the sum of the first part and the sum of the second part.

// conditions
let A = [3, 1, 2, 4, 3] // Output: 1


// my answer
const solution = A => {
    const N = A.length;
    const totalSum = A.reduce((a, b) => a + b);
    let leftSum = A[0];
    let rightSum = totalSum - A[0];
    let minDiff = Number.MAX_SAFE_INTEGER;
    let diff;

    for (let P = 1; P < N; P++) {
        diff = Math.abs(leftSum - rightSum);
        
        if (diff < minDiff) {
            minDiff = diff;
        }
        
        leftSum += A[P];
        rightSum -= A[P];
    }

    return minDiff;
}


// solution 1
const solution = A => {
    if (A.length > 0) {
        let defArr = [];
        let arr = [];
        let all = A.reduce((a, b) => {
            arr.push(a);
            return a + b;
        })

        arr.forEach((item) => {
            defArr.push(Math.abs(all - (item + item)));
        })
        
        return Math.min(...defArr);
    }

    return 0;
}