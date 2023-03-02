// 8:54 wed mar1 2023

// 2ND MAJOR ATTEMPT

nums = [ 'A', 'B', 'C' ]

console.log(permute(nums));

function permute(nums) {
  let output = [];
  let array = nums;
  let i = 0;
  while ( i < nums.length ) {
    let item = array[i];
    let j = i;
    // let j = 1;
    while ( j < nums.length) {
      let substitute = array[j];
      // return array;
      array[i] = substitute;
      array[j] = item;

      // return { substitute, item }

      // return array;
      output.push(array);
      // return output;
      j++;
    }
    // return output;
    return { array, output };
    i++;
  }
  // return output;
}



















// function permute(nums) {
//   let output = [];
//   let array = nums;
//   let i = 2;
//   while ( i < nums.length ) {
//     let item = array[i];
//     // let j = i;
//     let j = 1;
//     while ( j < nums.length) {
//       let substitute = array[j];
//       // return array;
//       array[i] = substitute;
//       array[j] = item;

//       // return { substitute, item }

//       // return array;
//       output.push(array);
//       return output;
//       j++;
//     }
//     i++;
//   }
//   // return output;
// }









// function permute(nums) {
//   let output = []
//   let permutation = []
//   permutation.push(nums[0]);
//   let i = 1;
//   while (i < nums.length) {
//     output.push(permutation);
//     permutation.push(nums[i]);
//     let j = permutation.length;
//     while (2 < j) {
//       // console.log(permutation);
//       let item = permutation[j-1];
//       let substitute = permutation[j-2];
//       permutation[j-1] = substitute;
//       permutation[j-2] = item;
//       j--;
//     }
//     console.log(output);
//     i++;
//   }
//   // return permutation;
// }