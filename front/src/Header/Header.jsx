import { Link } from "react-router-dom";
import Logo from "../img/argentBankLogo.png"

function Header() {
    return (
        <nav className="main-nav">
     {/* <a className="main-nav-logo" href="./index.html">*/}  
        <Link to="/">
          <img
            className="main-nav-logo-image"
            src={Logo}
            alt="Argent Bank Logo"
          />
          </Link>
          <h1 className="sr-only">Argent Bank</h1>
        <div>
            <Link to="/SignIn">  
     {/*  <a className="main-nav-item" href="./sign-in.html"> */}

     <i className="fa-solid fa-circle-user main-nav-item"></i>
            Sign In

            </Link>
          
        </div>
      </nav>
    )
  }
  
 export default Header;