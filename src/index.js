
// You should implement your task here.

module.exports = function towelSort (matrix) {
   for (let i=0; i < matrix.length;i++) {
    if (i % 2 != 0) {
      matrix[i].reverse();
    }
  }
let arraySort = [];
for (let i=0; i < matrix.length; i++) {
  for (let j=0; j < matrix[i].length; j++)
  { arraySort.push(matrix[i][j])}
}
console.log(arraySort);
  return arraySort;
}
