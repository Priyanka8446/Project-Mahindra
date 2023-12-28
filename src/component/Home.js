import React from "react";
import styles from "../styles.module.css";
import Filter from "./Filter";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { TextField } from "@mui/material";
import { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  height: 600,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function Home() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [branch, setBranch] = useState("");
  const [type, setType] = useState("");
  const [amount, setAmount] = useState("");
  const [bank, setBank] = useState("");
  const [requestBy, setRequest] = useState("");
  const [status, setStatus] = useState("");

  const[newData, setNewData] = useState([])

  
  const createData = {
    branch,
    amount,
    bank,
    requestBy,
    status,
    type,
    id: Date.now(),
  };
  function handleSubmit(e) {
    e.preventDefault();
    
    if(createData.branch==='' && createData.type==='' && createData.amount==='' && createData.bank==='' && createData.status==='' && createData.requestBy==='') return

    else{
    
    console.log(createData);

    if(createData){
    setNewData((prev)=>[...prev, createData])
    console.log(newData)
    }
  }
  setBranch('')
  setType('')
  setStatus('')
}
  return (
    <div className="m-3">
      <div>

        <div to="/create" className="create-btn">
          <button className={`${styles.btn} float-right`} onClick={handleOpen}>
            Create <span className=" font-extrabold">+</span>{" "}
          </button>
        </div>

        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className=" flex flex-col justify-center">
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Enter Details 
              </Typography>
              <InputLabel id="branch" autoComplete='off'>Branch</InputLabel>
              <Select
                labelId="branch"
                id="branch"
                value={branch}
                onChange={(e) => setBranch(e.target.value)}
              >
                <MenuItem value="All">
                  <em>All</em>
                </MenuItem>
                <MenuItem value="thane">Thane</MenuItem>
                <MenuItem value="navi mumbai">Navi Mumbai</MenuItem>
                <MenuItem value="mumbai">Mumbai</MenuItem>
                <MenuItem value="kurla">Kurla</MenuItem>
                <MenuItem value="vile parle">Vile Parle</MenuItem>
                <MenuItem value="lower parle">Lower Parel</MenuItem>
                <MenuItem value="andheri">Andheri</MenuItem>
                <MenuItem value="byculla">Byculla</MenuItem>
              </Select>
              <InputLabel id="type">Type</InputLabel>
              <Select
                labelId="type"
                id="type"
                value={type}
                onChange={(e) => setType(e.target.value)}
              >
                <MenuItem value="All">
                  All
                </MenuItem>
                <MenuItem value="full">Full</MenuItem>
                <MenuItem value="short">Short</MenuItem>
              </Select>
              <TextField
                id="amount"
                label="Amount"
                variant="outlined"
                onChange={(e) => setAmount(e.target.value)}
              />
              <TextField
                id="bank"
                label="Bank"
                variant="outlined"
                onChange={(e) => setBank(e.target.value)}
              />
              <TextField
                id="requestBy"
                label="Requested By"
                variant="outlined"
                onChange={(e) => setRequest(e.target.value)}
              />
              <InputLabel id="status">Status</InputLabel>
              <Select
                labelId="status"
                id="status"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
              >
                <MenuItem value="All">
                  All
                </MenuItem>
                <MenuItem value="pending">Pending</MenuItem>
                <MenuItem value="Rejected">Rejected</MenuItem>
                <MenuItem value="approved">Approved</MenuItem>
              </Select>
              <br /> <br />
              <Button onClick={handleSubmit} variant="outlined">
                Submit 
              </Button>
              <Button onClick={handleClose} variant="outlined">
                Close 
              </Button>
            </div>
          </Box>
        </Modal>

        {/* total  */}
        <div className="total-entry">
          <p className=" text-xl m-3">Total({newData.length})</p>
        </div>
      <Filter newData={newData} setNewData={setNewData}/>
      </div>

    </div>
  );
}
