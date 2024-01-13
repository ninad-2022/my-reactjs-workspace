import React, { useEffect, useState } from "react";
import axios from "axios";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import Box from "@mui/material/Box";

const ProductList = () => {
  const [product, setProduct] = useState([]);

  const getData = () => {
    axios
      .get("https://reqres.in/api/users?page=2")
      .then((resolve) => {
        console.log(resolve);
        setProduct(resolve.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  // splicing for deleteing the array elements on index, call it function in button
  const deleteUser = (index) => {
    var newArray = product;
    newArray.splice(index, 1);
    setProduct([...product]);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        backgroundColor: "#CCCCFF",
        borderRadius: 2,
        boxShadow: "10px 10px 15px",
      }}
    >
      {Array.isArray(product) &&
        product.map(({ id, email, first_name, last_name, avatar }, i) => {
          return (
            <Box
              key={id}
              sx={{
                border: "1px solid black",
                borderRadius: 10,
                margin: 3,
                padding: 3,
                width: "18%",
                backgroundColor: "#673147",
                boxShadow: "10px 10px 15px",
                color: "white",
              }}
            >
              <img src={avatar} style={{ width: "100%" }} />
              <h2>
                {first_name}
                {last_name}
              </h2>
              <Button
                variant="contained"
                color="error"
                startIcon={<DeleteIcon />}
                onClick={() => {
                  deleteUser(i);
                }}
              >
                Delete
              </Button>
            </Box>
          );
        })}
    </Box>
  );
};

export default ProductList;
