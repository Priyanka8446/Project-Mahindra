import React, { useState } from "react";
import styles from "../styles.module.css";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";

// const date = new Date();

export default function Filter({ newData, setNewData }) {
  console.log(newData);

  const [search, setSearch] = useState(false);
  const [branch, setBranch] = useState("");
  const [type, setType] = useState("");
  const [status, setStatus] = useState("");
  const [startDate, setStartDate] = useState("")
  const [endDate, setEndDate] = useState("")

  const[filteredData, setFilteredData] = useState([])

  const handleFilter = () => {
    setFilteredData(newData.filter(
      (item) =>
        item.branch.toLowerCase().includes(branch.toLowerCase()) &&
        item.type.toString().includes(type) &&
        item.status.toLowerCase().includes(status.toLowerCase()) &&
        item.date >= startDate &&
        item.date <= endDate
    )
    )
    console.log(filteredData)
    setSearch(true)
  };
  function handleDelete(id) {
    setNewData((items) => items.filter((item) => item.id !== id));
  }

  return (
    <div>
      <div className="filter-bar flex gap-4 m-3">
        <div className={styles.filterBox}>
          <label htmlFor="from">From</label>
          <input type="date" id="date" name="From_date" onChange={(e) => setStartDate(e.target.value)}/>
        </div>

        <div className={styles.filterBox}>
          <label htmlFor="from">To</label>
          <input type="date" id="date" name="To_date" onChange={(e) => setEndDate(e.target.value)}/>
        </div>

        <div className={`${styles.filterBox} ${styles.filterSort}`}>
          <label htmlFor="branch">Branch</label>
          <select
            name="branch"
            id="branch"
            onChange={(e) => setBranch(e.target.value)}
          >
            <option value="all">All</option>
            <option value="thane">Thane</option>
            <option value="navi mumbai">Navi Mumbai</option>
            <option value="mumbai">Mumbai</option>
            <option value="kurla">Kurla</option>
            <option value="vile Parle">Vile Parle</option>
            <option value="lower parel">Lower Parel</option>
            <option value="Andheri">Andheri</option>
            <option value="byculla">Byculla</option>
          </select>
        </div>

        <div className={`${styles.filterBox} ${styles.filterSort}`}>
          <label htmlFor="type">Type</label>
          <select
            name="type"
            id="type"
            onChange={(e) => setType(e.target.value)}
          >
            <option value="all">All</option>
            <option value="full">Full</option>
            <option value="short">Short</option>
          </select>
        </div>

        <div className={`${styles.filterBox} ${styles.filterSort}`}>
          <label htmlFor="status">Status</label>
          <select
            name="status"
            id="status"
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="all">All</option>
            <option value="pending">Pending</option>
            <option value="approved">Approved</option>
            <option value="rejected">Rejected</option>
          </select>
        </div>

        <div className="search-btn">
          <button className={styles.btn} onClick={handleFilter}>
            Search ID
          </button>
        </div>
      </div>

      <table className=" w-screen">
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
        </TableHead>

        {search
          ? filteredData.map((item, index) => (
              <TableBody>
                <TableRow key={index}>
                  <TableCell>{item.id}</TableCell>
                  <TableCell>{item.date}</TableCell>
                  <TableCell>{item.branch}</TableCell>
                  <TableCell>{item.type}</TableCell>
                  <TableCell>{item.amount}</TableCell>
                  <TableCell>{item.bank}</TableCell>
                  <TableCell>{item.requestBy}</TableCell>
                  <TableCell>{item.status}</TableCell>
                  <TableCell>
                    <button onClick={() => handleDelete(item.id)}>×</button>
                  </TableCell>
                </TableRow>
              </TableBody>
            ))
          : newData.map((item, index) => (
              <TableBody>
                <TableRow key={index}>
                  <TableCell>{item.id}</TableCell>
                  <TableCell>{item.date}</TableCell>
                  <TableCell>{item.branch}</TableCell>
                  <TableCell>{item.type}</TableCell>
                  <TableCell>{item.amount}</TableCell>
                  <TableCell>{item.bank}</TableCell>
                  <TableCell>{item.requestBy}</TableCell>
                  <TableCell>{item.status}</TableCell>
                  <TableCell>
                    <button onClick={() => handleDelete(item.id)}>×</button>
                  </TableCell>
                </TableRow>
              </TableBody>
            ))}
      </table>
    </div>
  );
}
