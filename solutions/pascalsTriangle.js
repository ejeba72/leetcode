function generate(numRows) {
  // numRows is the number of child arrays in the parent array.
  // the number of elements in each successive child array increases by 1
  // the value of the first element in each successive child array is 1. 
  // the value of every other element, Z, after the first element of each successive child array, is the sum of two elements in the previous child array, X and Y. The index of Y, is the same as Z. While the index of X is lower than the index of Y by 1.
  // the parent array is actually pascals triangle. While the child arrays are the successive rows in pascal's triangle. While the variable numRows is actually the numbers of rows for each case.
  // Therefore, let parent array be triangle, and child array be row.

  let triangle = [];
  for (i = 0; i < numRows; i++) {
    triangle.push([]);
    for (j = 0; j <= i; j++) {
      if (j === 0 || j === i) {
        triangle[i][j] = 1;
      } else {
        triangle[i][j] = triangle[i - 1][j - 1] + triangle[i - 1][j];
      }
    }
  }
  return triangle;
}

console.log(generate(5));
