// hr Warmup Staircase
// Observe that its base and height are both equal to n, and the image is drawn using # symbols and spaces. The last line is not preceded by any spaces. Write a program that prints a staircase of size .

// conditions
let n = 6  
    // Output: 
        // #
        // ##
        // ###
        // ####
        // #####
        // ######

        
// my answer
const staircase = n => {
    let line = Array(n + 1).fill('');

    line[n] = '';

    for (let i = n - 1; i >= 0; i--) {
        line[i] = '#';
        console.log(line.join(''));
    }
}