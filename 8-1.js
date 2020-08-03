// cd lesson 1 BinaryGap 
// A binary gap within a positive integer N is any maximal sequence of consecutive zeros that is surrounded by ones at both ends in the binary representation of N.

// conditions
let N = 529 // Output: 4 (binary word of 529 is 1000010001, the longest length of 0 is 4)


// my answer
const solution = N => {
    let bin = N.toString(2);
    let gaps = bin.slice(bin.indexOf('1') + 1, bin.lastIndexOf('1'));
    let zeroCounted = gaps.split('1').map(zeros => zeros.length);
    
    return zeroCounted.length ? Math.max(...zeroCounted) : 0;
}


// solution 1
const solution = N => {
    let arr = N.toString(2).split(/(?!1)(0+)(?=1)/);
    let arrSizes, max;
    let filteredArr = arr.filter(zeroes => zeroes.indexOf('1') === -1) || []; 
    
    if (filteredArr.length > 0) { 
         arrSizes = filteredArr.map(binString => binString.length); 
         max = arrSizes.reduce((a, b) => a >= b ? a : b);
    } else { 
        max = 0; 
    } 
    
    return max;
}