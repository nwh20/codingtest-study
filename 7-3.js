// hr Warmup Time Conversion
// Given a time in -hour AM/PM format, convert it to military (24-hour) time.

// conditions
let s = '07:05:45PM' // Output: '19:05:45'


// my answer
const timeConversion = s => {
    const arr = s.slice(0, 8).split(':');
    
    arr[0] = (s.indexOf('PM') > -1) ? (arr[0] == 12 ? '12' : Number(arr[0]) + 12) : (arr[0] == 12 ? '00' : arr[0]);

    return arr.join(':');
}


// solution 1
const birthdayCakeCandles = ar => {
    let maxNum = Math.max(...ar);
    let filtered = ar.filter(function(value, index, arr) {
        return value === maxNum;
    });

    return filtered.length;
}