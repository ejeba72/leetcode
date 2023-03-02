/**
 * @param {number[]} nums
 * @return {number}
 */

nums = [4,1,2,1,2]  // (Input)
// Output: 4

var singleNumber = function(nums) {
    let output = nums[0];
    let i = 1;
    while( i < nums.length ) {
        output = output ^ nums[i];
        i++;
    }
    return output;
};
