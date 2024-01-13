// l25-funct-space-string.js
//var input = "abc defg 2"
//var output = "ab cd ef g"

function processing(str) {
  str = str.replace(/[\s0-9]/g, "");
  var arr = str.split("");
  str = arr
    .map(function (ele, i) {
      if (i % 2 != 0) return ele + " ";
      else return ele;
    })
    .join("");
  console.log(str);
}
processing("abcdefghijklmnopqrsruvwxyzABCDEFGHIJKLMNOPQRSTUV");
