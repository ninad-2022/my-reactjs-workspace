//l28-date-setters.js
var d = new Date(2000, 5, 1, 12, 30);
console.log(d);

// setters
//d.setFullYear(year, month, date);
d.setFullYear(2020, 2, 16);

//d.setMonth(month, Date);
d.setMonth(5, 12);

// d.setDate(date);
d.setDate(28);

// d.setHours(hr, min, sec);
d.setHours(12, 13, 14);
console.log(d.toLocaleString());
