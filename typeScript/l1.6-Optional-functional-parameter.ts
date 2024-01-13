/*
l1.6-Optional-functional-parameter.ts
- If you add? at the end of the function parameter name then it becomes optional parameters
-Note:- a parameter cannot be optional and default at the same time, either optional or default
*/
function add(a, b?, c?) {
  console.log(a, b, c);
}
add(10, 20, 30);
add(10, 20);
add(10);
