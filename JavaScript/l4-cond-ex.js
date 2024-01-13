/*
l4-cond-ex.js
Programme to find out how many notes are needed for perticular ruppes
*/

// var amount = 5555;
// // variale declared without var keyword are globally accessible

// notes = Math.floor(amount / 2000); //2
// amount = amount % 2000; //1555
// notes > 0 && console.log("2000: -" + notes);

// notes = Math.floor(amount / 500);
// amount = amount % 500;
// notes > 0 && console.log("500: -" + notes);

// notes = Math.floor(amount / 100);
// amount = amount % 100;
// notes > 0 && console.log("100: -" + notes);

// notes = Math.floor(amount / 50);
// amount = amount % 50;
// notes > 0 && console.log("50: -" + notes);

// notes = Math.floor(amount / 5);
// amount = amount % 5;
// notes > 0 && console.log("5: -" + notes);

//by using for loop

const noteChecker = (amount) => {
  const notes = [2000, 500, 200, 100, 50, 10, 5];
  for (i of notes) {
    let noteCount = Math.floor(amount / i);
    amount = amount % i;
    amount > 0 && console.log(i + "-" + noteCount);
  }
};

noteChecker(5555);
