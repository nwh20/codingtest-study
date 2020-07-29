// hr Warmup Staircase
// Observe that its base and height are both equal to n, and the image is drawn using # symbols and spaces. The last line is not preceded by any spaces. Write a program that prints a staircase of size .

// conditions
let n = 6  // possible to change direction modifying the space of ' '
    // Output: 
    //      #
    //     ##
    //    ###
    //   ####
    //  #####
    // ######


// my answer
const staircase = n => {
    let line = Array(n + 1).fill(' ');

    for (let i = n - 1; i >= 0; i--) {
        line[i] = '#';
        console.log(line.join(''));
    }
}


// solution 1
const staircase = n => {
    if (n > 0 && n <= 100 && typeof n === "number" && n === parseInt(n, 0)) {
       for (let r = 1; r <= n; r++) {
            let blanks = [ ...[], ...Array(n - r) ].map(i => ' ');
            let hashes = [ ...[], ...Array(n - (n - r))].map(i => '#');
            console.log([
                 ...blanks,
                 ...hashes
            ].join(''));
       } 
    }
}

// solution 2
const staircase = n => {
    let i = 0;
    let stair = '';

    for (i = 1; i <= n; i++){
        if (i < n) {
            stair += ' '.repeat(n - i) + '#'.repeat(i) + '\n';   
        } else {
            stair += '#'.repeat(i);   
        } 
    }

    console.log(stair);
}
