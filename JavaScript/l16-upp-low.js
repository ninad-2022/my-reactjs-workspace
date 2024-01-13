//make uppercase to lowercase vice versa
// l16-upp-low
var str = "gisHU eIH bkHH fbuiIHI";
let newStr = "";
for (i of str) {
  if (/[a-z]/.test(i)) newStr += i.toUpperCase();
  if (/[A-Z]/.test(i)) newStr += i.toLowerCase();
}
console.log(newStr);
