//l6.2-customize-iterator.js
//creating own iterator object

const str = new String("Topper Skills");

str[Symbol.iterator] = function () {
  const obj = this;
  let i = 0;
  return {
    next: function () {
      return {
        value: obj.trim()[i++]?.toUpperCase(),
        done: i <= obj.trim().length ? false : true,
      };
    },
  };
};
console.log(str);
console.log(...str);

for (const ch of str) console.log(ch);
