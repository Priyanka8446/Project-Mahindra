import React, { useContext, useState } from 'react'
import { NavLink } from 'react-router-dom'

export default function Create() {
    const[branch, setBranch] = useState('')
    const[type, setType] = useState('')
    const[amount, setAmount] = useState('')
    const[bank, setBank] = useState('')
    const[request, setRequest] = useState('')
    const[status, setStatus] = useState('')

    
    const inputData = {branch, type, amount, bank, request, status, id:Date.now()}
    function handleSubmit(e){
        e.preventDefault();
       
        console.log(inputData)

    }
  return (
    <NavLink to="/create">
        <div className=' w-96 m-auto h-screen flex justify-center items-center'>
    <div>
        <form >
            
            <label htmlFor="branch">Branch</label>
            <select name="branch" id="branch" value={branch} onChange={(e)=>setBranch(e.target.value)}>
            <option value="all">All</option>
            <option value="Thane">Thane</option>
            <option value="navi mumbai">Navi Mumbai</option>
            <option value="kurla">Kurla</option>
            <option value="Vile Parle">Vile Parle</option>
            <option value="lower parel">Lower Parel</option>
            <option value="Andheri">Andheri</option>
            <option value="Byculla">Byculla</option>
          </select><br />

          <label htmlFor="type">Type</label>
          <select name="type" id="type" value={type} onChange={(e)=>setType(e.target.value)}>
            <option value="all">All</option>
            <option value="full">Full</option>
            <option value="short">Short</option>
          </select><br />

          <label htmlFor="amount">Amount</label>
          <input type="text" id='amount' name='amount' value={amount} onChange={(e)=>setAmount(e.target.value)} /> <br />


          <label htmlFor="bank">Bank</label>
          <input type="text" id='bank' name='bank' value={bank} onChange={(e)=>setBank(e.target.value)}/> <br />

          <label htmlFor="request">Requested By</label>
          <input type="text" id='request' name='request' value={request} onChange={(e)=>setRequest(e.target.value)}/> <br />

          <label htmlFor="status">Status</label>
          <select name="status" id="status" value={status} onChange={(e)=>setStatus(e.target.value)}>
            <option value="all">All</option>
            <option value="pending">Pending</option>
            <option value="approved">Approved</option>
            <option value="rejected">Rejected</option>
          </select>

          <button onClick={handleSubmit} type='submit'>Submit</button>

        </form>
    </div>
    </div>
    </NavLink>
  )
}
