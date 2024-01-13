// l25-funct-substring-from-string.js
//Define a function that will accepts string, startindex and endindex and return the substring from start index to end index.

function subStr(str, si, ei) {
  //when si > end index, use swaping
  if (si > ei) {
    var temp = si;
    si = ei;
    ei = temp;
  }
  //when si & ei are not given, make it default
  if (!si) si = 0;
  if (!ei) ei = str.length;
  //code for substr
  var sstr = "";
  for (var i = si; i < ei; i++) sstr += str[i];
  return sstr;
}
console.log(subStr("ninadBhoir", 0, 5));
