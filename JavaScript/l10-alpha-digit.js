// l10-alpha-digit.js
for (var i = 1; i <= 5; i++) {
  var str = "";
  for (var j = 1; j <= 5; j++) {
    if (i % 2 == 0) {
      str = str + " " + String.fromCharCode(j + 96);
    } else {
      str = str + " " + j;
    }
  }
  console.log(str);
}
