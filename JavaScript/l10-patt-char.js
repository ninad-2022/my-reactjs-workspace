for (i = 1; i <= 3; i++) {
    var str = "";
    for (j = 1; j <= 4; ++j) str = str + " " + String.fromCharCode(j + 96)
    console.log(str);
}

/*
 a a a a a
 b b b b b
 c c c c c
 d d d d d
*/
for (i = 1; i <= 4; i++) {
    var str = "";
    for (j = 1; j <= 5; ++j) str = str + " " + String.fromCharCode(i + 96)
    console.log(str);
}