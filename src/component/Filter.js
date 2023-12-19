import React, { useState } from "react";
import styles from "../styles.module.css";
import Tables from "./Table";

export default function Filter() {
  const [filterObject, setFilterObject] = useState({});

  const[search, setSearch] = useState(false)

  const handleFilter = (e) => {
    setFilterObject({ ...filterObject, [e.target.name]: e.target.value });
  };
//   console.log(filterObject);

  return (
    <div>
      <div className="filter-bar flex gap-4 m-3">
        <div className={styles.filterBox}>
          <label htmlFor="from">From</label>
          <input
            type="date"
            id="date"
            name="From_date"
            onChange={handleFilter}
          />
        </div>

        <div className={styles.filterBox}>
          <label htmlFor="from">To</label>
          <input type="date" id="date" name="To_date" onChange={handleFilter} />
        </div>

        <div className={`${styles.filterBox} ${styles.filterSort}`}>
          <label htmlFor="branch">Branch</label>
          <select name="branch" id="branch" onChange={handleFilter}>
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
          <select name="type" id="type" onChange={handleFilter}>
            <option value="all">All</option>
            <option value="full">Full</option>
            <option value="short">Short</option>
          </select>
        </div>

        <div className={`${styles.filterBox} ${styles.filterSort}`}>
          <label htmlFor="status">Status</label>
          <select name="status" id="status" onChange={handleFilter}>
            <option value="all">All</option>
            <option value="pending">Pending</option>
            <option value="approved">Approved</option>
            <option value="rejected">Rejected</option>
          </select>
        </div>

        <div className="search-btn">
          <button className={styles.btn} onClick={()=>setSearch(!search)}>Search ID</button>
        </div>
      </div>

      <div>
        <Tables filterObject={search ? filterObject : undefined}/>
      </div>
    </div>
  );
}
