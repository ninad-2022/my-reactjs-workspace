//l29-Date-format.js

function format(d, separator) {
  // if (!separator) separator = "-";
  // return (
  //   d.getDate() + separator + (d.getMonth() + 1) + separator + d.getFullYear()
  // );
  if (!separator) separator = "-";
  return d.getMonth() + separator + d.getDate() + separator + d.getFullYear();
}
console.log(format(new Date(), "-"));
console.log(format(new Date(), "/"));
console.log(format(new Date(), "_"));
console.log(format(new Date(), "-"));
console.log(format(new Date(), "."));
