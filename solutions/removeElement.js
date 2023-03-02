// 14:09 wed feb15 2023

// REMOVE ELEMENT


// nums = [0,1,2,2,3,0,4,2]; 
nums = [3,2,2,3];

val = 3;

// function removeElement(nums, val) {
//   let i = 0;
//   for (let j = 0; j < nums.length; j++) {
//       // Swap numbers if current number is not equal to val
//       if (nums[j] !== val) {
//           nums[i] = nums[j];
//           // Index where numbers that are equal to val begin in the array
//           i++;
//       }
//   }
//   return nums;

// }

// /**
//  * @param {number[]} nums
//  * @param {number} val
//  * @return {number}
//  */
// var removeElement = function(nums, val) {
//   let i = 0;
//   let j = 0;
//   while(j < nums.length) {
//       j++
//       if (nums[j] !== val) {
//           nums[i] = nums[j];
//           i++;
//       }
//   }
//   return nums;
// };





/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
  let i = 0;
  for(let j = 0; j < nums.length; j++) {
      if(nums[j] !== val) {
          nums[i] = nums[j];
          i++;
      }
  }
  return nums;
};

console.log(removeElement(nums, val));

module.exports = { removeElement }


// let i = 0;
// for (let j = 0; j < nums.length; j++) {
//   if (nums[j] !== val) {
//     nums[i] = nums[j];
//     i++;
//   }
// }
// return nums;