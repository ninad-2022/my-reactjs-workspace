// l4.6-staticKeyword.js
class Encryption {
  //use static keyword for static method which are not bind with object
  static encrypt(text) {
    return text + "fjkfdsjkjkdfkj";
  }
}
console.log(Encryption.encrypt());
