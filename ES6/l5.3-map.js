/*l5.3-map.js
Map :-
-Map is used to store key value pairs
-Each key value pair is called an entry
-Each key is associated atmost one value
-The keys must be unique
-values can be duplicated
*/
// Create empty map

const map = new Map();
console.log(map);

// [
// [key, value],
// [key, value],
// [key, value],
// [key, value],
// [key, value],
// ]

// create a map of pincodes and cities

const pincodes = new Map([
  [411001, "Shivajinagar"],
  [411018, "Kothrud"],
  [411041, "Vadgaon"],
  [411041, "Narhe"],
  [411047, "Katraj"],
]);

console.log(pincodes);
// total entries
console.log("Total: ", pincodes.size);

//get an entry by the key
console.log("city for pincode 411001 is " + pincodes.get(411001));

// check whether a key is available
console.log(pincodes.has(411041)); //true
console.log(pincodes.has(411033)); //false

// add an entry
pincodes.set(411002, "Shukrawar peth");

// remove an entry
// pincodes.delete(411001);
// pincodes.clear();

// console.log(pincodes);

// iterate keys of the map
const keys = pincodes.keys();
for (const k of keys) console.log(k);

// iterate values of the map
const values = pincodes.values();
for (const v of values) console.log(v);

// iterate entries

const entries = pincodes.entries();
// console.log(entries);
for (const [k, v] of entries) {
  //   console.log(entry[0] + " " + entry[1]);

  //   const [k, v] = entry;
  console.log(k + " " + v);
}
