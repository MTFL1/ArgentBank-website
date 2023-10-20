import { Link } from "react-router-dom";

import Logo from "../img/argentBankLogo.png"
import NameAccount from "../components/NameAccount/NameAccount";

function Header() {

    return (
        <nav className="main-nav">
        <Link to="/">
          <img
            className="main-nav-logo-image"
            src={Logo}
            alt="Argent Bank Logo"
          />
          </Link>
          <NameAccount />

      </nav>
    )
  }
  
 export default Header;