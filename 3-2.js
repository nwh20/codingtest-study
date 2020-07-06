// lt Easy 27 Remove Element
// Remove all instances of that value in-place and return the new length.

// conditions
let nums = [0, 1, 2, 2, 3, 0, 4, 2];
let val = 2; // Output: [0, 1, 4, 0, 3]


// my answer
const removeElement = (nums, val) => {
    let i = 0, j = 0;
    
    while(j < nums.length) {
        if (nums[j] !== val) {
            nums[i] = nums[j];
            i++;
        }
        j++;
    }
    
    return i;
};


// solution 1
const removeElement = (nums, val) => {
    for(let i = 0; i < nums.length; i++){
        if(val == nums[i]){
            nums.splice(i, 1);
            i =- 1;
        }
    }
    
    return nums.length;
};