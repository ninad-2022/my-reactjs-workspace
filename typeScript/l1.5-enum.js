/*
l1.5-enum.ts
  -enum takes some set of table that can store a content on index basis
  -you can define your own index values in enum
  -you can access values as well as indexes in the enum
  - accessing index gives value on that index whereas accesing value gives index on that indexedDB
*/
var Days;
(function (Days) {
    Days[Days["Sun"] = 0] = "Sun";
    Days[Days["Mon"] = 1] = "Mon";
    Days[Days["Tue"] = 2] = "Tue";
    Days[Days["Wed"] = 3] = "Wed";
    Days[Days["Thursday"] = 4] = "Thursday";
    Days[Days["Fri"] = 5] = "Fri";
    Days[Days["Sat"] = 6] = "Sat";
})(Days || (Days = {}));
console.log("aa", Days.Mon);
console.log(Days[0]);
console.log(Days);
var d = new Date();
console.log(Days[d.getDay()]);
