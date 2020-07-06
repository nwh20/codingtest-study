// lt Easy 20 Valid Parentheses
// Determine if the input string is valid.

// conditions
let s = "()[]{}" // Output: true
let s = "(]" // Output: false


// my answer
const isValid = s => {
    if (s === null || s.length <= 0) return true;
    
    let cArr = s.split('');
    let stack = [];
    
    for (c of cArr) {
        if (c === '[') stack.push(']');
        else if (c === '{') stack.push('}');
        else if (c === '(') stack.push(')');
        else if (stack.length === 0 || c !== stack.pop()) return false;
    }
    
    if (stack.length === 0) return true;
    
    return false;
};


// solution 1
const isValid = function(s) {
    let closeMap = {
        ')' : '(',
        '}' : '{',
        ']' : '['
    };
    let charStack = [];
    
    if (s===null || s===undefined) return false;
    
    for (var i = 0; i < s.length; i++) {
        let curChar = s.charAt(i);
        let topElement;
        if (closeMap[curChar] !== undefined) {
            topElement = (charStack.length === 0) ? '#' : charStack.pop();

            if (topElement !== closeMap[curChar]) return false;
        } else {
            charStack.push(curChar);
        }
    }
    return charStack.length === 0;
};

// solution 2
const isValid = s => {
    const a = [];
    const b = {
        ')' : '(',
        ']' : '[',
        '}' : '{'
    };

    for (let i = 0; i < s.length; i++) {
        if (b[s[i]] == undefined) {
            a.push(s[i]);
        } else {
            const last = a.pop();
            if (b[s[i]] !== last) return false;
        }
    }

    return (a.length === 0);
};

