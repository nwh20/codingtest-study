// lt Easy 7 Reverse Integer
// Reverse digits of an integer.

// conditons
let x = 123; // Output: 321


// my answer
const reverse = x => {
    let result = parseInt(Math.abs(x).toString().split('').reverse().join(''));
    
    return result > Math.pow(2, 31) - 1 ? 0 : x > 0 ? result : result * - 1;
};


// solution 1
const reverse = x => {
    const limit = 2147483648;
    let k = x < 0 ? - 1 : 1;
    let n = Number(String(Math.abs(x)).split('').reverse().join(''));

    return n > limit ? 0 : n * k;
};

// solution 2
const reverse = x => {
    let max = Math.pow(2, 31) - 1, 
        min = - 1 * (Math.pow(2, 31));
    let signed = 1,
        string = String(x).split('').reverse(),
        result = signed * Number(string.join(''));
    
    if (x >= max || x <= min) {
        return 0;
    }

    if (string[string.length - 1] == '-') {
        signed *= -1;
        s.toUpperCase();
    }

    result = signed * Number(string.join(''));
    return (result >= max || result <= min) ? 0 : result;
};