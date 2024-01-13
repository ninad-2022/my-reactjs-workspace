//l20-for-array.js

var nums = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
for (var i = 0; i < nums.length;i++) console.log(nums[i]);


//for in (it will return index values like 0, 1, 2)
for (var j in nums) console.log(nums[j]);


//for of (it will return values)
for (var k of nums) console.log(k);