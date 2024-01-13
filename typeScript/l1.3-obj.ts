/*
Object:-
	- The property should be all during assigning the object, it won't allow less or more
	- You can’t define optional, all fields are mandatory
*/
let person: { name: string; id: number; status: boolean; city: string };
person = { id: 12, name: "n.Developer", status: true, city: "Navi-Mumbai" };
console.log(person);
