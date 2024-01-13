//l30-30error-throw.js
//using 'throw' to throw the error
function encrypt(plaintext) {
  if (!plaintext) throw new Error("plaintext cannot be empty");
  return plaintext + "string here to concatinate";
}
//encrypt(); cannot handle the error so we have to create 'try' and 'catch' i.e. exception handler
try {
  encrypt();
} catch (err) {
  console.log(err.message);
}
