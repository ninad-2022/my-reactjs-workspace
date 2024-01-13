//inverted pyramid
//for any doubt chek sir's code in chatbox
var row = 8;
var cols = row * 2;

for (var i = row; i >= 0; i--) {
  var str = "";
  for (var j = 1; j <= cols; j++) {
    if (j >= row - i && j <= row + i) {
      str = str + " *";
    } else {
      str = str + "  ";
    }
  }
  console.log(str);
}
var row = 8;
var cols = row * 2;

for (var i = 0; i < row; i++) {
  var str = "";
  for (var j = 1; j <= cols; j++) {
    if (j >= row - i && j <= row + i) {
      str = str + " *";
    } else {
      str = str + "  ";
    }
  }
  console.log(str);
}
