import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
    const [auth, setAuth] = useState("Login");
    const online = useOnlineStatus();
    useEffect(()=>{
        console.log("Calling useEffect");
        
    })
    console.log("Header Component");
    return (
        <div className="header-container">
            <div className="logo-container">
                <img src={LOGO_URL} alt="logo-image" className="logo"/>
            </div>
            <div className="nav-container">
                <ul className="nav-list">
                    <Link to="/grocery"><li>Grocery</li></Link>
                    {online ? <li>Online 🟢</li> : <li>Offline 🔴</li>}
                    <Link to="/"><li>Home</li></Link>
                    <a href="/about"><li>About</li></a>
                    <Link to="/contact"><li>ContactUs</li></Link>
                    <li>
                        <button onClick={()=>{
                            auth == "Login" ? setAuth("Logout") : setAuth("Login");
                        }}>{auth}</button>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Header;