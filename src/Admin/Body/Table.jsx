import React from 'react'

 const Table = ({data}) => {
  return (
    <table class="table">
      <thead class="thead-dark">
        <tr>
          <th scope="col">id</th>
          <th scope="col">Name</th>
          <th scope="col">Email</th>
          <th scope="col">Password</th>
        </tr>
      </thead>
      <tbody>
        {data?.map((val, index) => {
          return (
            <tr>
              <th scope="row">{val.id}</th>
              <td>{val.name}</td>
              <td>{val.email}</td>
              <td>{val.password}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
