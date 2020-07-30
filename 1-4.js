// lt Easy 13 Roman to Integer
// Given a roman numeral, convert it to an integer.

// conditons
let s = 'IV' // Output: 4


// my answer
const romanToInt = s => {
    const map = new Map([
        ['I', 1], 
        ['V', 5], 
        ['X', 10], 
        ['L', 50], 
        ['C', 100], 
        ['D', 500], 
        ['M', 1000]
    ]);
    
    let i = s.length - 1;
    let result = map.get(s[i]);
    
    while (i > 0) {
        const now = map.get(s[i]);
        const prv = map.get(s[i - 1]);

        if (prv >= now) {
            result += prv;
        } else {
            result -= prv;
        }
        i--;
    }

    return result;
}


// solution 1
const romanToInt = s => {
    const roman = {'I' : 1, 'V' : 5, 'X' : 10, 'L' : 50, 'C' : 100, 'D' : 500, 'M' : 1000}; 
    
    if (s.length === 1) { 
        return roman[s];
    } 
    
    let result = 0; 
    const special = {'IV' : 4, 'IX' : 9, 'XL' : 40, 'XC' : 90, 'CD' : 400, 'CM' : 900};
    
    for (let i = 0; i < s.length - 1; i++) { 
        if (special[s[i] + s[i + 1]]) { 
            result += special[s[i] + s[i + 1]]; 
            s = s.replace(s[i] + s[i + 1], ''); 
            i = - 1;
        } 
    }
    
    for (let j = 0; j < s.length; j++) {
        result += roman[s[j]];
    }
    
    return result;
}