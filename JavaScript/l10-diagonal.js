// l10-diagonal.js
for (var i = 1; i <= 5; i++) {
  var str = "";
  for (var j = 1; j <= 5; j++) {
    if (i == j || j == 6 - i) {
      str = str + " M";
    } else if (i == 1 || i == 5 || j == 1 || j == 5) {
      str = str + " F";
    } else {
      str = str + " c";
    }
  }
  console.log(str);
}
