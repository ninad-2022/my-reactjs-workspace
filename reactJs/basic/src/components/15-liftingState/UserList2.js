import React, { useEffect } from "react";

// install dataGrid by using npm i  @mui/x-data-grid
import { DataGrid } from "@mui/x-data-grid";

const UserList2 = ({ users }) => {
  const columns = [
    //   1.2 making a column
    { field: "name", headerName: "Name", width: 150 },
    { field: "mobile", headerName: "Mobile", width: 150 },
    { field: "email", headerName: "Email", width: 150 },
    { field: "city", headerName: "City", width: 150 },
  ];

  return (
    <>
      <div style={{ height: "80vh" }}>
        <DataGrid
          columns={columns}
          rows={users}
          getRowId={(row) => row.name + row.city}
        />
      </div>
    </>
  );
};

export default UserList2;
