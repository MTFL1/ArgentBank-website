import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home/Home";
import SignIn from "./pages/SignIn/SignIn";
import User from "./pages/User/User";


import "./css/main.css";

function App() {
  return (
    <>
    <div className="contenair">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/User" element={<User />} />
      </Routes>
    </div>
    </>
  );
}

export default App;
