//l9.3-then-chaining.js

new Promise((resolve, reject) => {
  let data = [
    { name: "Topper Skills-1", city: "Pune" },
    { name: "Topper Skills-2", city: "Mumbai" },
    { name: "Topper Skills-3", city: "Pune" },
  ];
  setTimeout(() => {
    resolve(JSON.stringify(data));
  }, 2000);
})
  .then((data) => {
    return JSON.parse(data);
  })
  .then((data) => {
    return data.filter((user) => {
      return user.city == "Pune";
    });
  })
  .then((data) => {
    console.log("user", data);
  })
  .catch((err) => {
    console.log("catch");
  });
