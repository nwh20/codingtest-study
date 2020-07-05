// lt Easy 28 Implement strStr()
// Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

// my answer
const strStr = (haystack, needle) => {
    if (needle === "") return 0;
    
    return haystack.indexOf(needle);
};


// solution 1
const strStr = (haystack, needle) => {
    return haystack.indexOf(needle);
};