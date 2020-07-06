// lt Easy 9 Palindrome Number
// Determine whether an integer is a palindrome.

// conditions
let x = 121 // Output: true
let x = -121; // Output: false
let x = 10; // Output: false


// my answer
const isPalindrome = x => {
    return x.toString().split('').reverse().join('') === x.toString();
};


// solution 1
const isPalindrome = x => {
    return x === Number(x.toString().split("").reverse().join(""));
};
