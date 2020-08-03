// cd lesson 2 OddOccurrencesInArray
// A non-empty array A consisting of N integers is given. The array contains an odd number of elements, and each element of the array can be paired with another element that has the same value, except for one element that is left unpaired.

// conditions
let A = [9, 3, 9, 3, 9, 7, 9] // Output: 7


// my answer
const solution = A => {
    let count = (counter, num) => {
        counter[num] = counter[num] ? counter[num] + 1 : 1;
        return counter;
    }
    let total = A.reduce(count, {});
    
    for (key in total) {
        if (total[key] % 2 === 1) {
            return Number(key);
        }
    }
}


// solution 1
const solution = A => {
    const obj = {};
  
    for (let i = 0, arrLen = A.length; i < arrLen; i++) {
        const value = A[i];
    
        if (obj[value] === undefined) {
            obj[value] = value;
        } else {
            delete obj[value];
        }
    }
  
    const odd = Object.values(obj)[0];
  
    return odd;
}
