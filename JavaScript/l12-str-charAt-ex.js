// l12-str-charAt-ex.js
var str = "1aaiug1hhug";
var count = 0;
for (var i = 0; i <= str.length; i++) {
  var ch = str.charAt(i);
  if (i == "1") count++;
}
console.log("count: ", count);
