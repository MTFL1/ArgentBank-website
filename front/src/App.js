import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home/Home";
import SignIn from "./pages/SignIn/SignIn";
import User from "./pages/User/User";

import Header from "./Header/Header";
import Footer from "./Footer/Footer";

import "./css/style.css";

function App() {
  return (
    <>
    <Header/>
    <div className="contenair">

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/User" element={<User />} />
      </Routes>

    </div>
    <Footer />

    </>
  );
}

export default App;