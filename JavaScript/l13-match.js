var str = "abcbhghrghABCchfuhrabc";
var match = str.match(new RegExp("abc", "gi"));
var match2 = str.match(/abc/gi);
console.log(match);
console.log(match2);
console.log(match2.length);
