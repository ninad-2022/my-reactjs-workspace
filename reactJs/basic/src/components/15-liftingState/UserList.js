// we are creating a table
import React from "react";
// 2.4- install a dataTable
// npm i mui-datatables
import MUIDatatable from "mui-datatables";
const UserList = ({ users }) => {
  // 2.6- making a each column. array [] for column, {} for each one.
  const columns = [
    {
      label: "Name",
      //2.7- display this property
      name: "name",
      options: {
        filter: false,
        sort: true,
      },
    },
    {
      label: "Mobile",
      name: "mobile",
      options: {
        filter: false,
        sort: true,
      },
    },
    {
      label: "Email",
      name: "email",
      options: {
        filter: false,
        sort: true,
      },
    },
    {
      label: "City",
      name: "city",
      options: {
        filter: true,
        sort: true,
      },
    },
  ];

  return (
    <>
      {/* 2.3- creating a table but we are not gonna use this table */}
      {/* <table>
      <tr>
        <th>Sr. No</th>
        <th>Name</th>
        <th>Mobile</th>
        <th>Email</th>
        <th>City</th>
      </tr>

      {Array.isArray(users) &&
        users.map((user, i) => (
          <tr key={user.name + i}>
            <td>{i + 1}</td>
            <td>{user.name}</td>
            <td>{user.mobile}</td>
            <td>{user.email}</td>
            <td>{user.city}</td>
          </tr>
        ))}
    </table> */}

      {/* 2.5- use that here  */}
      {/* 2.8- we have to pass that column here  */}
      <MUIDatatable title="User List" columns={columns} data={users} />
    </>
  );
};

export default UserList;
