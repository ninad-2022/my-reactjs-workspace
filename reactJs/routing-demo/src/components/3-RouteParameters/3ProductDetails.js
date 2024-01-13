// 4.1- creating <ProductList/> for switiching into the list

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductList from "./ProductList";
//4.7- importing the file that has all the data
import porductList from "./Products.json";

//4.6- receving route parameters in productDetails.js
const ProductDetails = () => {
  // destrucruting
  const { category, id } = useParams();

  //4.8- accessing single product based on category and id
  const [product, setProduct] = useState({});

  //4.9-whenever there is a change and id we will access product
  useEffect(() => {
    // 4.10 - getting an category array
    const prodArr = porductList[category];
    console.log("Category: ", category);
    console.log("ProductList: ", ProductList);

    // 4.11- taking single product on the basis of the id
    const prod = prodArr && prodArr.find((prod) => prod.id == id);
    if (prod) setProduct(prod);

    //Note:- here we have fetched the product and saved the product on the basis of state and id
  }, [category, id]);

  //   4.13- destructing the props
  const { id: pid, title, brand, price, desc, image } = product;
  return (
    <>
      <h2>Product Details</h2>

      {/*4.12- displaying the fetched product here  */}
      <img src={`/${image}`} />
      <h4>
        {title} - {pid}
      </h4>
      <h4>Brand: {brand}</h4>
      <h4>Price: {price}</h4>
      <p>{desc}</p>
    </>
  );
};

export default ProductDetails;
