// l9-pyram.js
/*
         *
       * * *
     * * * * *
   * * * * * * *
 * * * * * * * * *
 
*/
var row = 5;
var cols = row * 2;
for (var i = 0; i < row; i++) {
  var str = "";
  for (var j = 1; j <= cols; j++) {
    if (j >= row - i && j <= row + i) {
      str = str + " *";
    } else {
      str = str + "  ";
    }
  }
  console.log(str);
}

//inverted pyramid
/*

* * * * * * * *     
  * * * * * *       
    * * * *       
      * * 
       * 
*/
var row = 4;
var cols = row * 2;

for (var i = row; i >= 0; i--) {
  var str = "";
  for (var j = 1; j <= cols; j++) {
    if (j >= row - i && j <= row + i) {
      str = str + " *";
    } else {
      str = str + "  ";
    }
  }
  console.log(str);
}
