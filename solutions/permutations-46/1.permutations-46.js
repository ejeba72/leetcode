// 10:38 tue feb28 2023

/* 

THREE MEDIUM LEETCODE QUESTIONS:
1. permutation,
2. combination,
3. sudoku

*/

/* 
Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order.
*/

nums = [1, 2, 3]

// console.log(nums[0]);

// console.log(permute(nums));
permute(nums);

function permute(nums) {
  let output = []
  let permutation = []
  permutation.push(nums[0]);
  let i = 1;
  while (i < nums.length) {
    output.push(permutation);
    permutation.push(nums[i]);
    let j = permutation.length;
    while (2 < j) {
      // console.log(permutation);
      let item = permutation[j-1];
      let substitute = permutation[j-2];
      permutation[j-1] = substitute;
      permutation[j-2] = item;
      j--;
    }
    console.log(output);
    i++;
  }
  // return permutation;
}

/* 

[]  --->  []
a   --->   [], [a]

emptyArray: [],
a: [ [], [a] ],
b: []

*/

// // ROUGHWORK
// let permutation = [ 1, 2, 3]
// let j = permutation.length;
// let item = permutation[j-1];
// let substitute = permutation[j-2];
// permutation[j-1] = substitute;
// permutation[j-2] = item;
// // console.log(item, substitute);
// console.log(permutation);