import axios from "axios";
import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import "./Airlines.css";
import Button from "@mui/material/Button";

const Airlines = () => {
  const [data, setData] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);

  useEffect(() => {
    axios
      .get(`https://api.instantwebtools.net/v1/airlines`)
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => {
        console.log("error:-", err);
      });
  }, []);

  const deleteButton = (index) => {
    var newArray = data;
    newArray.splice(index, 1);
    setData([...data]);
  };

  const userPerPage = 10;
  const pageVisited = pageNumber * userPerPage; //0*10=0, 1*10=10
  //if 40 - 50

  //0, 10
  const displayUsers = data
    .slice(pageVisited, pageVisited + userPerPage)
    .map(({ id, name, country, logo, slogan, website }, i) => {
      return (
        <div
          style={{ border: "2px solid #999", width: "15vw", margin: 10 }}
          key={i}
        >
          <img src={logo} style={{ width: "100%" }} />
          <h2>id-{id}</h2>
          <h2>name-{name}</h2>
          <h2>country-{country}</h2>
          <h2>slogan-{slogan}</h2>
          <h2>website-{website}</h2>
          <Button
            variant="contained"
            color="warning"
            onClick={() => deleteButton(i)}
          >
            Delete
          </Button>
        </div>
      );
    });

  // for showing data per page
  // divides whole the data by 10
  const pageCount = Math.ceil(data.length / userPerPage);

  // pageNumber should be equal to the next page
  // ReactPaginate have an object called selected, which internally knows on which page we are selecting. We only have to give him a pageNumber
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
  return (
    <>
      <section
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        {displayUsers}
        <ReactPaginate
          previousLabel={"Previous"}
          nextLabel={"Next"}
          pageCount={pageCount}
          onPageChange={changePage} //it call when we click the button
          containerClassName={"paginationBttns"}
          previousClassName={"previousBttn"}
          nextLinkClassName={"nextBttn"}
          disabledClassName={"paginationDisabled"}
          activeClassName={"paginationActive"}
        />
      </section>
    </>
  );
};

export default Airlines;
