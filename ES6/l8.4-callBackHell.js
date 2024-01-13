/*
Callback Hell:-
Callback hell is a problem in which source code becomes hard to understand
The reason for callback hell is nesting the callbacks

Example:
*/
// call back hell due to  nesting
getData("url", function (response, error) {
  if (error) {
    console.log("Could not fetched the data");
  } else {
    createPDF("report.pdf", (file, error) => {
      if (err) {
        console.log("Could not created the file");
      } else {
        file.write("sample content", (err) => {
          if (err) {
            console.log("could not written to the file");
          } else {
            sendemail("abc@gmail.com", (success, err) => {
              if (err) {
                console.log("Could not sent the email");
              } else {
                console.log("Email sent");
              }
            });
          }
        });
      }
    });
  }
});

//solution by anonymous function
const handleEmail = (success, err) => {
  if (err) {
    console.log("Could not sent the email");
  } else {
    console.log("Email sent");
  }
};

const handlePDFWrite = (err) => {
  if (err) {
    console.log("could not written to the file");
  } else {
    sendemail("abc@gmail.com", handleEmail);
  }
};

const handleCreatePdf = (file, error) => {
  if (err) {
    console.log("Could not created the file");
  } else {
    file.write("sample content", handlePDFWrite);
  }
};

getData("url", function (response, error) {
  if (error) {
    console.log("Could not fetched the data");
  } else {
    createPDF("report.pdf", handleCreatePdf);
  }
});
