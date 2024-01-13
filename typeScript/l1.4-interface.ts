/*
interface
  - The interface can be used to define the model of an object
  - the interface can be used for abstraction
*/
interface User {
  name: string;
  id: number;
  //by using ?, property become optional
  status?: boolean;
  city: string;
}

let employee: User = { name: "Shweta", id: 1221, city: "koperkhairane" };
console.log(employee);

//model
interface College {
  tier1: string;
  tier2: string;
  tier3: string;
  // making optional
  tier4?: string;
  tier5: string;
}
// object of interface college
let pune: College = {
  tier1: "IIT",
  tier2: "NIT",
  tier3: "NNNIT",
  tier5: "Small",
};
// printing that obj
console.log(pune);
