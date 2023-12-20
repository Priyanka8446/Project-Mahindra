import "./App.css";
import Home from "./component/Home";
import { useState } from "react";
import Filter from "./component/Filter";

// export const globalData = createContext();

function App() {
  // const [newData, setNewData] = useState(null)
  // const [createData, setCreateData] = useState([]);

  // const globalData = createContext()

  // const[newData, setNewData] = useState([])

  // const setCreateData=(item)=>{
  //   setNewData((prev)=>[...prev, item])
  // }

  return (
    <>
      <Home/>
      {/* <Filter setNewData={setNewData} newData={newData}/> */}
    </>
  );
}

export default App;
