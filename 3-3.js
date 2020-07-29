// lt Easy 28 Implement strStr()
// Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

// conditions
let haystack = "hello", needle = "ll"; // Output: "2"
let haystack = "aaaaa", needle = "bba"; // Output: "-1"


// my answer
const strStr = (haystack, needle) => {
    if (needle === "") return 0;
    
    return haystack.indexOf(needle);
}


// solution 1
const strStr = (haystack, needle) => {
    return haystack.indexOf(needle);
}