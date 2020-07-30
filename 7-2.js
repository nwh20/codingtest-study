// hr Warmup Birthday Cake Candles
// You are in charge of the cake for your niece's birthday and have decided the cake will have one candle for each year of her total age. When she blows out the candles, she’ll only be able to blow out the tallest ones. Your task is to find out how many candles she can successfully blow out.

// conditions
let arr = [3, 2, 1, 3] // Output: 2


// my answer
const birthdayCakeCandles = ar => {
    let len = ar.length;
    let max = ar.sort((a,b) => { return a - b })[len - 1];
    
    return(len - ar.indexOf(max));
}


// solution 1
const birthdayCakeCandles = ar => {
    let maxNum = Math.max(...ar);
    let filtered = ar.filter(function(value, index, arr) {
        return value === maxNum;
    });

    return filtered.length;
}