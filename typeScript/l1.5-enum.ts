/*
l1.5-enum.ts
  -enum takes some set of table that can store a content on index basis
  -you can define your own index values in enum
  -you can access values as well as indexes in the enum
  - accessing index gives value on that index whereas accesing value gives index on that indexedDB
*/

enum Days {
  Sun,
  Mon,
  Tue,
  Wed,
  Thursday,
  Fri,
  Sat,
}
console.log("aa",Days.Mon);
console.log(Days[0]);

console.log(Days);

const d = new Date();
console.log(Days[d.getDay()]);
