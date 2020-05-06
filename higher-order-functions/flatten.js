const flatten = (matrix) => {
  let arr = matrix.reduce((prev, curr) => {
    return prev.concat(curr);
  });
  return arr;
};

//test passes
console.log(
  flatten([
    [1, 2, 3],
    [4, 5, 6],
  ])
);
