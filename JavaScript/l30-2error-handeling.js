//l30-2error-handeling.js

console.log("first");
try {
  console.log("try start here");
  console.log(abc);
  console.log("try ends here");
} catch (err) {
  console.log(err.message);
} finally {
  console.log("finally");
}
console.log("last");
/*
//not using catch. (not catching the error)
console.log("first");
try {
  console.log("try starts here");
  console.log(abc);
  console.log("try ends");
} finally { //finally execuate even on error the print the error
  console.log("execuating finally");
}
console.log("retrun to globe");
*/
