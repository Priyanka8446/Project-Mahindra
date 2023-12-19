import React from 'react'
import styles from '../styles.module.css'
import Filter from './Filter'
import { NavLink } from 'react-router-dom'

export default function Home() {
  return (
    <div className="m-3">
      <div>
        {/* //create btn - right side */}
      
        
        <NavLink to='/create' className="create-btn">
          <button className={`${styles.btn} float-right`}>
            Create <span className=" font-extrabold">+</span>{" "}
          </button>
        </NavLink>
        
        
        

        {/* total  */}
        <div className="total-entry">
          <p className=" text-xl m-3">Total(14)</p>
        </div>

        <Filter/>
        
      </div>

    </div>
  )
}
