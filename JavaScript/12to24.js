// 12to24.js
// ex= 4:30 pm == 16:30

const convert12To24 = (time12hr) => {
  let [time, format] = time12hr.split(" ");
  let [hr, min] = time12hr.split(":");

  if (hr == "12") hr = "00";
  if (format == "PM") hr = parseInt(hr) + 12;
  return `${hr}:${min}`;
};

console.log(convert12To24("04:33 PM"));
