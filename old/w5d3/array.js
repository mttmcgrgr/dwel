function myUniq(arr) {
  let uniqArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (uniqArr.includes(arr[i])) {
      continue;
    } else {
      uniqArr.push(arr[i]);
    }
  }
  return uniqArr;
}

myUniq([1, 2, 1, 3, 3]);

function twoSum(arr) {
  let pairs = [];
  for (let i = 0; i < (arr.length - 1); i++) {
    for (let j = i + 1; j < arr.length; j++ ) {
      if (arr[i] + arr[j] === 0) {
        pairs.push([i, j])
      }
    }
  }
  return pairs
}
twoSum([-1, 0, 2, -2, 1])

function myTranspose(matrix) {
  const transposed = [];
  let sub = [];

  for (let i = 0; i < matrix.length; i++) {
    sub = [];
    for (let j = 0; j < matrix[0].length; j++) {
      sub.push(matrix[j][i]);
    }
    transposed.push(sub);
  }
  return transposed;
}

myTranspose([
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8]
  ])
