
import "./App.css";
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";
import Create from "./component/Create";
import Home from "./component/Home";

function App() {

  return (
    <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/create" element={<Create />}></Route>
          </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;
