// lt Easy 26 Remove Duplicates from Sorted Array
// Remove the duplicates in-place such that each element appear only once and return the new length.

// conditions
let nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]; // Output: [0, 1, 2, 3, 4]


// my answer
const removeDuplicates = nums => {
    nums.splice(0, nums.length, ...(new Set(nums)));
}


// solution 1
const removeDuplicates = nums => {
    const size = nums.length;
    let slowP = 0;
    
    for (let fastP = 0; fastP < size; fastP++) {
        if (nums[fastP] !== nums[slowP]) {
            slowP++;
            nums[slowP] = nums[fastP];
        }   
    }

   return slowP + 1;
}

// solution 2
const removeDuplicates = nums => {
    let i = 0;
    
    while (i < nums.length) {
        if (nums[i] === nums[i + 1]) {
            nums.splice(i + 1, 1);
        } else {
            i += 1;
        }
    }
}