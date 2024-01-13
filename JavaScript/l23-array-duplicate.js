// l23-array-duplicate.js
//count the iteration of each element
var arr = [1, 2, 3, 4, 5, 6, 3, 2, 5, 2, 8, 9, 2];
for (var i = 0; i < arr.length; i++) {
  var count = 1;
  for (var j = i + 1; j < arr.length; j++) {
    if (arr[i] == arr[j]) {
      count++;
      arr.splice(j--, 1);
    }
  }
  console.log(arr[i], "=>", count);
}
