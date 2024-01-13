import Button from "@mui/material/Button";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Pagination from "react-paginate";
import "./Airlines.css";
const Passangers = () => {
  const [data, setData] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  useEffect(() => {
    axios
      .get(`https://api.instantwebtools.net/v1/passenger`)
      .then((response) => {
        setData(response.data.data);
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const deleteButton = (index) => {
    var newArray = data;
    newArray.splice(index, 1);
    setData([...data]);
  };
  const userPerPage = 10;
  const pageVisited = pageNumber * userPerPage;

  const userDisplay = data
    .slice(pageVisited, pageVisited + userPerPage)
    .map(({ _id, name, trips, airline }, i) => (
      <div
        style={{ border: "2px solid #999", width: "15vw", margin: 10 }}
        key={i}
      >
        <h3>NaME:- {name}</h3>
        <h3>ID:- {_id}</h3>
        <h3>Total trips- {trips}</h3>
        <h3>Airlines:- {airline.name}</h3>
        {/* why above is not coming  */}
        <Button
          variant="contained"
          color="warning"
          onClick={() => deleteButton(i)}
        >
          Delete
        </Button>
      </div>
    ));

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
  const pageCount = Math.ceil(data.length / userPerPage);
  return (
    <>
      <section
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {userDisplay}
        <Pagination
          previousLabel={"Previous"}
          nextLabel={"Next"}
          pageCount={pageCount}
          onPageChange={changePage}
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

export default Passangers;
