async function getData() {
  const p = await new Promise((resolve, reject) => {
    setTimeout(resolve, 3000, "showing server data ");
  });
  console.log("received data", p);
  return p;
}

getData()
  .then((data) => console.log("1", data))
  .catch((err) => console.log(err));
