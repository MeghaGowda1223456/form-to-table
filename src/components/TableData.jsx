import React from "react";

function TableData(props) {
  const { data } = props;

  return (
    <div>
      <table
        cellSpacing="20px"
        cellPadding="20px"
        style={{
          border: "2px solid black",
          padding: "10px",
          borderCollapse: "collapse",
        }}
        className="table table-stripped"
      >
        <thead style={{ border: "2px solid black" }}>
          <tr style={{ border: "2px solid black",padding:"10px" }}>
            <th style={{ border: "2px solid black",padding:"10px",padding:"10px" }}>SR.NO</th>
            <th style={{ border: "2px solid black",padding:"10px" }}>Firstname</th>
            <th style={{ border: "2px solid black",padding:"10px" }}>Lastname</th>
            <th style={{ border: "2px solid black",padding:"10px" }}>mail</th>
            <th style={{ border: "2px solid black",padding:"10px" }}>gender</th>
          </tr>
        </thead>
        <tbody>
          {data.map((val, ind) => (
            <tr>
              <td style={{ border: "2px solid black",padding:"10px" }}> {ind + 1}</td>
              <td style={{ border: "2px solid black",padding:"10px" }}> {val.fname}</td>
              <td style={{ border: "2px solid black",padding:"10px" }}> {val.lname}</td>
              <td style={{ border: "2px solid black",padding:"10px" }}> {val.mail}</td>
              <td style={{ border: "2px solid black",padding:"10px" }}> {val.gender}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TableData;
