// l3-9.1-asynchronous-callback.js 
/*
Q.1) datafetchCallback
- we have to take a data from server and print data after successfull fetching.

- Here we have to write a code as well as error handeling in the same function. it makes code congested. In order to avoid this congestion, we are using Promise concept.
*/

// -making a function to getServerData() and passing a parameter as function(it has its logic to print data)
function getServerData(pd) {
  setTimeout(() => {
    console.log("Data received");
    //calling that function after setTimeOut()
    // pd("Server Data");

    //making a error function
    pd(new Error("could not fetch the data"));
  }, 3000);
}

//making a function to print data
function printData(data) {
  if (data instanceof Error) console.log("Please try again");
  else console.log("Data", data);
}

// higherOrderFunction(callBack)
getServerData(printData);
