/*
               h
             g h i
           f g h i j
         e f g h i j k
       d e f g h i j k l
     c d e f g h i j k l m
   b c d e f g h i j k l m n
 a b c d e f g h i j k l m n o
*/
var row = 8;
var cols = row * 2; //16

for (var i = 0; i < row; i++) {
    var str = "";
    for (var j = 1; j <= cols; j++) {
        if (j >= row - i && j <= row + i) {
            str = str + " " + String.fromCharCode(j + 96);
        }else {
            str = str + "  ";
        }
    }
    console.log(str);
}