//l2.5-arrow-function-argument.js

const func = function () {
  console.log(arguments);
};
func();
func(10, 20);

//arrow function does not have own arguements
const funcArrow = () => {
  console.log(arguments);
};
//it gives error
funcArrow(10, 20, 40);


