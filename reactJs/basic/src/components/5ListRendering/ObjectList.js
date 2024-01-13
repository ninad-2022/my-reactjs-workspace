// display each object from the list as div
import React from "react";
const ObjectList = () => {
  const products = [
    { title: "aaa", price: 1111 },
    { title: "bbb", price: 2222 },
    { title: "ccc", price: 3333 },
    { title: "ddd", price: 4444 },
    { title: "eee", price: 5555 },
    { title: "fff", price: 6666 },
    { title: "ggg", price: 7777 },
    { title: "hhh", price: 8888 },
    { title: "iii", price: 9999 },
  ];

  return (
    <>
      <h2>Object list</h2>
      {/* section for applying display flex property  */}
      <section
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
        }}
      >
        {/* condition for checking array only  */}
        {Array.isArray(products) &&
          products.map((prod, i) => (
            <div
              // key for unique identification
              key={prod.title + prod.price}
              style={{
                border: "1px solid #999",
                padding: 10,
                margin: 10,
                minWidth: 150,
              }}
            >
              {/* our content to display  */}
              <h3>{prod.title}</h3>
              <h3>{prod.price}</h3>
            </div>
          ))}
      </section>
    </>
  );
};

export default ObjectList;
