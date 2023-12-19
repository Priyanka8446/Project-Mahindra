import React from "react";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

export default function Tables() {

    // console.log(filterObject)
  return (
    <table>
    <TableHead>
      <TableRow>
        <TableCell>ID</TableCell>
        <TableCell>DATE⇅</TableCell>
        <TableCell>BRANCH</TableCell>
        <TableCell>TYPE</TableCell>
        <TableCell>AMOUNT(IN RUPEES)</TableCell>
        <TableCell>BANK</TableCell>
        <TableCell>REQUESTED BY(EMPLOYEE CODE)</TableCell>
        <TableCell>STATUS</TableCell>
      </TableRow>

      {data.map((item, index) => (
        
        <TableRow key={index}>
          <TableCell>{item.id}</TableCell>
          <TableCell>{item.date}</TableCell>
          <TableCell>{item.branch}</TableCell>
          <TableCell>{item.type}</TableCell>
          <TableCell>{item.amount}</TableCell>
          <TableCell>{item.bank}</TableCell>
          <TableCell>{item.requestBy}</TableCell>
          <TableCell>{item.status}</TableCell>
        </TableRow>
      ))}
    </TableHead>
    </table>
  );
}

const data = [
  {
    id: 1,
    date: "12/12/2023",
    branch: "Thane",
    type: "Full",
    amount: 45000,
    bank: "BOI",
    requestBy: "sharad",
    status: "pending",
  },
  {
    id: 2,
    date: "12/12/2023",
    branch: "Thane",
    type: "Full",
    amount: 45000,
    bank: "BOI",
    requestBy: "sharad",
    status: "pending",
  },
  {
    id: 3,
    date: "12/12/2023",
    branch: "Thane",
    type: "Full",
    amount: 45000,
    bank: "BOI",
    requestBy: "sharad",
    status: "pending",
  },
  {
    id: 4,
    date: "12/12/2023",
    branch: "Thane",
    type: "Full",
    amount: 45000,
    bank: "BOI",
    requestBy: "sharad",
    status: "pending",
  },
];
