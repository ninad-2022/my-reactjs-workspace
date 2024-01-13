var str = "abcv1ydudvd78";
var count = 0;
var sum = 0;
for (var i = 0; i < str.length; i++) {
  var ch = str.charCodeAt(i);
  if (ch >= 48 && ch <= 57) {
    count++;
    sum += ch - 48;
  }
}
console.log("Count ", count);
console.log("sum ", sum);

// l12-str-codeAt.js
