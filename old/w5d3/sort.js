

function bubbleSort(arr) {
  let unsorted = true;
  while ( unsorted === true ) {
    unsorted = false;
    for ( let i = 0; i < (arr.length - 1); i++) {
      if (arr[i] > arr[i+1]) {
        let hold = arr[i];
        arr[i] = arr[i+1];
        arr[i+1] = hold;
        unsorted = true;
      }
    }
  }
  return arr;
}
