// lt Easy 14 Longest Common Prefix
// Write a function to find the longest common prefix string amongst an array of strings.

// conditions
let strs = ['flower', 'flow', 'flight'] // Output: 'fl'
let strs = ['dog', 'racecar', 'car']  // Output: ''


// my answer
const longestCommonPrefix = strs => {
    const len = strs.length;
    let prefix = strs[0];

    if (len === 0) return "";
    
    for (let i = 1; i < len; i++) {
        while (strs[i].indexOf(prefix) !== 0) {
            prefix = prefix.substring(0, prefix.length - 1);

            if (prefix === '') return '';
        }
    }

    return prefix;
}


// solution 1
const longestCommonPrefix = strs => {
    let res = '';
    
    if (strs.length === 0) return '';
    else if (strs.length === 1) return strs[0];
    
    for (let i = 0; i < strs[0].length; i++) {
        for (let j = 0; j < strs.length - 1;) {
            if (strs[j][i] === strs[j + 1][i]) {
                j++;

                if (j === strs.length - 1) res += strs[j][i];
            } else return res;
        }
    }

    return res;
}