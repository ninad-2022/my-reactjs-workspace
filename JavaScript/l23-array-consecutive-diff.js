// l23-array-consecutive-diff.js
//find three consecutive number from array
// var arr = [1, 2, 3, 4, 3, 5, 6, 7, 9, 0, 9, 7, 8, 9];

function threeConsecutiveNumber(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let a = arr[i];
    let b = arr[i + 1];
    let c = arr[i + 2];

    if (a + 1 == b && b + 1 == c) console.log(a, b, c);

    // if (arr[i] + 1 == arr[i + 1] && arr[i] + 2 == arr[i + 2])
    //   console.log(arr[i], arr[i + 1], arr[i + 2]);
  }
}

let arr = [1, 2, 3, 4, 3, 5, 6, 7, 9, 0, 9, 7, 8, 9];

let a = threeConsecutiveNumber(arr);
console.log(a);
