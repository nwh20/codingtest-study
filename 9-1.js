// cd lesson 3 FrogJmp
// A small frog wants to get to the other side of the road. The frog is currently located at position X and wants to get to a position greater than or equal to Y. The small frog always jumps a fixed distance, D. Count the minimal number of jumps that the small frog must perform to reach its target.

// conditions
let X = 10, Y = 85, D = 30 // Output: 3 (10(X) + 30(D)+ 30(D) + 30(D) > Y)


// my answer
const solution = (X, Y, D) => {
    const min = Y - X;
    
    return min % D ? (Math.floor(min / D) + 1) :  (Math.floor(min / D));
}


// solution 1
const solution = (X, Y, D) => {
    return Math.ceil((Y - X) / D);
}
