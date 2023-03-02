// 17:52 sun feb12 2023

// REMOVE DUPLICATES FROM SORTED ARRAYS

// const nums = [ 1, 1, 2 ] 

const nums = [ 0, 0, 1, 1, 1, 2, 2, 3, 3, 4 ]

function removeDuplicates(nums) {
  let i = 0 // let i be initialized to zero, or let i be assigned the value of zero
  for( j=1; j<nums.length; j++ ) {
   if( nums[j] !== nums[i] ) {
     i++;
     nums[i] = nums[j];
   } 
  }
  // return i + 1;
  return nums;
}

console.log(nums.length);
console.log(nums);
console.log(nums[3])

// console.log(removeDuplicates(nums));
