import React, { useContext, useState } from "react";
import styles from "../styles.module.css";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import { globalData } from "../App";


const date = new Date()

export default function Filter({newData, setNewData}) {
  console.log(newData)

  // const[createdData, setCreateData] = useState()

  // data.push(createData)

  const[search, setSearch] = useState(false)
  const[branch, setBranch] = useState('')
  const[type, setType] = useState('')
  const[status, setStatus] = useState('')


  function handleDelete(id){
    setNewData((items)=>items.filter((item)=>item.id!==id))
  }

  return (
    <div>
      <div className="filter-bar flex gap-4 m-3">
        <div className={styles.filterBox}>
          <label htmlFor="from">From</label>
          <input
            type="date"
            id="date"
            name="From_date"
            // onChange={handleFilter}
          />
        </div>

        <div className={styles.filterBox}>
          <label htmlFor="from">To</label>
          <input type="date" id="date" name="To_date"  />
        </div>

        <div className={`${styles.filterBox} ${styles.filterSort}`}>
          <label htmlFor="branch">Branch</label>
          <select name="branch" id="branch" onChange={(e)=>setBranch(e.target.value)}>
            <option value="all">All</option>
            <option value="Thane">Thane</option>
            <option value="navi mumbai">Navi Mumbai</option>
            <option value="kurla">Kurla</option>
            <option value="Vile Parle">Vile Parle</option>
            <option value="lower parel">Lower Parel</option>
            <option value="Andheri">Andheri</option>
            <option value="Byculla">Byculla</option>
          </select>
        </div>

        <div className={`${styles.filterBox} ${styles.filterSort}`}>
          <label htmlFor="type">Type</label>
          <select name="type" id="type" onChange={(e)=>setType(e.target.value)}>
            <option value="all">All</option>
            <option value="full">Full</option>
            <option value="short">Short</option>
          </select>
        </div>

        <div className={`${styles.filterBox} ${styles.filterSort}`}>
          <label htmlFor="status">Status</label>
          <select name="status" id="status" onChange={(e)=>setStatus(e.target.value)}>
            <option value="all">All</option>
            <option value="pending">Pending</option>
            <option value="approved">Approved</option>
            <option value="rejected">Rejected</option>
          </select>
        </div>

        <div className="search-btn">
          <button className={styles.btn} >
            Search ID
          </button>
        </div>
      </div>

      {/* <div>
        <Tables filterObject={true ? filterObject : undefined} />
      </div> */}

      <table className=" w-screen">
        <TableHead >
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

        { search ? newData.filter((item)=>{
          if(item.branch === branch && item.type === type && item.status === status){
            return item
          }
          if(branch==='all' && type==='all' && status==='all'){
            return item
          }
          
        }).map((item, index) => (
          <TableBody>
            <TableRow key={index}>
              <TableCell>{item.id}</TableCell>
              <TableCell>{date.toLocaleDateString()}</TableCell>
              <TableCell>{item.branch}</TableCell>
              <TableCell>{item.type}</TableCell>
              <TableCell>{item.amount}</TableCell>
              <TableCell>{item.bank}</TableCell>
              <TableCell>{item.requestBy}</TableCell>
              <TableCell>{item.status}</TableCell>
              <TableCell><button onClick={()=>handleDelete(item.id)}>×</button></TableCell>
            </TableRow>
          </TableBody>
        )) : setSearch(!search)}
      </table>
    </div>
  );
}

const data = [
  {
    id: 1,
    date: "12/12/2023",
    branch: "kurla",
    type: "Full",
    amount: 43000,
    bank: "BOI",
    requestBy: "sharad",
    status: "pending",
  },
  {
    id: 2,
    date: "12/12/2023",
    branch: "Thane",
    type: "Full",
    amount: 78000,
    bank: "BOI",
    requestBy: "sharad",
    status: "pending",
  },
  {
    id: 3,
    date: "12/12/2023",
    branch: "kurla",
    type: "short",
    amount: 45000,
    bank: "BOI",
    requestBy: "sharad",
    status: "pending",
  },
  {
    id: 4,
    date: "12/12/2023",
    branch: "Kurla",
    type: "short",
    amount: 45000,
    bank: "BOI",
    requestBy: "sharad",
    status: "approved",
  },
];
