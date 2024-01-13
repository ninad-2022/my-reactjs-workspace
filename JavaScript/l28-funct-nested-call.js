// l28-funct-nested-call
//use it in multiple operation, when we have to repeat specific operations.
function greetTo(msg1) {
  return function (msg2) {
    return function (msg3) {
      console.log(msg1 + " " + msg2 + " " + msg3);
    };
  };
}

greetTo("Good")("morning")("Ninad");

var Greetings = greetTo("good");
Greetings("morning")("ninad");

var Greetingtoall = greetTo("good")("morning");
Greetingtoall("Shweta");
Greetingtoall("Atharva");
Greetingtoall("Utkarsh");

// function nin(a) {
//   return function (c) {
//     return function (d) {
//       console.log(a + " " + b + " " + c);
//     };
//   };
// }

// nin("AA")("HH")("CC");
// var dev = nin("nin")("bhoir");
// dev("how are you");
// dev("Hows it going");

//function combine
/* //output
addss(10, 20);
addss(10)(20);
*/

function addFun(a, b) {
  //!b means if b is not given, return a function
  if (!b)
    return function (c) {
      console.log(a + c);
    };
  console.log(a + b);
}
addFun(10, 20); //30
addFun(10)(20); //30

//currey and curried function
function printLog(date) {
  return function (severity) {
    return function (message) {
      console.log(date, severity, message);
    };
  };
}

printLog(new Date())("high")("File not found");

var printHighRiskMsg = printLog(new Date())("High");
printHighRiskMsg("File not found");
printHighRiskMsg("No internet connection");
printHighRiskMsg("Server error 101");
