import React, { useEffect, useState } from "react";
import ProductList from "./ProductList";
const FilterTask = () => {
  // 1.1- taking all the prouct in state. we never change initial data so keep it unfilterered
  const [products, setProducts] = useState([
    {
      id: 1,
      title: "mobile 1",
      category: "mobile",
      price: 1000,
    },
    {
      id: 2,
      title: "mobile 2",
      category: "mobile",
      price: 4000,
    },
    {
      id: 3,
      title: "mobile 3",
      category: "mobile",
      price: 6000,
    },
    {
      id: 4,
      title: "mobile 4",
      category: "mobile",
      price: 8000,
    },
    {
      id: 5,
      title: "mobile 5",
      category: "mobile",
      price: 10000,
    },
    {
      id: 6,
      title: "laptop 1",
      category: "laptop",
      price: 1000,
    },
    {
      id: 7,
      title: "laptop 2",
      category: "laptop",
      price: 2000,
    },
    {
      id: 8,
      title: "laptop 3",
      category: "laptop",
      price: 5000,
    },
    {
      id: 9,
      title: "laptop 4",
      category: "laptop",
      price: 15000,
    },
    {
      id: 10,
      title: "laptop 5",
      category: "laptop",
      price: 11000,
    },
    {
      id: 11,
      title: "car 1",
      category: "car",
      price: 1000,
    },
    {
      id: 12,
      title: "car 2",
      category: "car",
      price: 12000,
    },
    {
      id: 13,
      title: "car 3",
      category: "car",
      price: 25000,
    },
    {
      id: 14,
      title: "car 4",
      category: "car",
      price: 20000,
    },
    {
      id: 15,
      title: "car 5",
      category: "car",
      price: 19000,
    },
  ]);

  // 1.2- here we will put filtered product. create a componetn to display this product i.e Proudct.js @ 1.3
  const [filteredProds, setFilteredProds] = useState([products]);

  const [price, setPrice] = useState({ min: 0, max: 100000 });

  // 3.2- for accessing the value in setPrice
  const handlePriceChange = (e) => {
    const { name, value } = e.target;
    setPrice({ ...price, [name]: value });
  };

  // 4.1- we have to store category in the state, then nd then only we can access it in the filterByPrice
  const [category, setCategory] = useState("all");

  // 2.2- we will get current selected category value
  const handleCategory = (e) => {
    //4.2- removing below one
    setCategory(e.target.value);
    //4.3- making filter prodcuts here
    // filterProducts(); //5.1- its taking time bcus first filtering then displaying, so remove it nd use useEffect()
    // const { value: category } = e.target;
    // if (category == "all") {
    //   setFilteredProds([...products]);
    // } else {
    //   //2.3- setting the filter on category and storing it into the setFilteredProds
    //   const arr = products.filter((prod) => prod.category == category);
    //   setFilteredProds([...arr]);
    // }
  };

  // 3.3- price based on min max but the problem is it not working for category and price both at a time. So, 4.1
  const filterByPrice = () => {
    const arr = products.filter(
      (prod) => prod.price >= price.min && prod.price <= price.max
    );
    setFilteredProds([...arr]);
  };

  // 4.3- making a price and category
  const filterProducts = () => {
    const arr = products.filter(
      (prod) =>
        prod.price >= price.min &&
        prod.price <= price.max &&
        (category == "all" ? true : prod.category == category)
    );
    setFilteredProds([...arr]);
  };
  // 2.4- make use dependency (end)
  useEffect(() => {
    setFilteredProds([...products]);
  }, [products]);

  // 5.1-filterProducts() only on category
  useEffect(() => {
    filterProducts();
  }, [category]);

  return (
    <>
      <h2>Filter task</h2>

      {/*2.1- making a filter for the category  */}
      <h2>categories</h2>
      <select onChange={handleCategory}>
        <option value="all">All</option>
        <option value="mobile">Mobile</option>
        <option value="laptop">Laptop</option>
        <option value="car">Car</option>
      </select>

      {/* 3.1- for creating a price max min */}
      <input
        type="number"
        value={price.min}
        name="min"
        onChange={handlePriceChange}
        onClick={filterByPrice}
      />
      <input
        type="number"
        value={price.max}
        name="max"
        onChange={handlePriceChange}
        onClick={filterByPrice}
      />
      <button onClick={filterProducts}>Filter</button>

      {/* 1.5- passing filterProducts to the productList. end here */}
      <ProductList products={filteredProds} />
    </>
  );
};

export default FilterTask;
