import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";
const Header = () => {
    const [auth, setAuth] = useState("Login");
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
                    <li>Home</li>
                    <li>About</li>
                    <li>ContactUs</li>
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