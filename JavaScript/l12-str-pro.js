//l12-str-pro.js
var str = "abcdefrabcaajkabcldsadkasdabci";
//  0123456789
var sstr = "abc";
// var starIndex = 0;
// var count = 0;
// while (true) {
//   starIndex = str.indexOf(sstr, starIndex + 1);
//   console.log(starIndex);
//   if (starIndex != -1) {
//     count++;
//   } else {
//     break;
//   }
//   console.log(starIndex);
//   break;
// }
// console.log("count: ", count);

function isSubstring(string, substring) {
  for (let i = 0; i < string.length; i++) {
    const sliced = string.slice(i, i + substring.length);
    if (sliced === substring) {
      return true;
    }
  }
  return false;
}
console.log(isSubstring("foobhdsahfaABCfaafABCshasdABCar", "ABC"));
console.log(isSubstring("foobar", "baz"));
