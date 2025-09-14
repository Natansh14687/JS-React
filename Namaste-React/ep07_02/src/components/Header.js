import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import {Link} from "react-router-dom"
const Header = () => {
  const [button, setButton] = useState("Login");
  return (
    <div className="header">
      <div className="logo-container">
        <img
          src={LOGO_URL}
          alt="app-logo"
          className="logo"
        />
      </div>
      <div className="nav-container">
        <ul className="nav-list">
          <Link to="/"><li>Home</li></Link>
          <a href="/about"><li>About</li></a>
          <Link to="/contact"><li>Contact Us</li></Link>
          <li><button onClick={()=>{
            button=="Login" ? setButton("Logout") : setButton("Login");
          }}>{button}</button></li>
        </ul>
      </div>
    </div>
  );
};

export default Header;