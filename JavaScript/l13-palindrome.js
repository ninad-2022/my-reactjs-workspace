// l13-palindrome.js

// var str = "aba";
// var arr = str.split("").reverse().join("");
// if (str == arr) console.log("Palindrome");
// else console.log("NO");

//by using  for loop
function isPal(str) {
  let palStr = "";
  for (i = str.length - 1; i >= 0; i--) {
    palStr += str[i];
  }
  if (palStr == str) {
    console.log("palindrome");
  } else {
    console.log("Not palindrome");
  }
}

isPal("madam");
