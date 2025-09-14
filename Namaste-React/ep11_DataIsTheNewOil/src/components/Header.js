import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useContext } from "react";
import UserContext from "../utils/UserContext";

const Header = () => {
    const data = useContext(UserContext);
    const [auth, setAuth] = useState("Login");
    const online = useOnlineStatus();
    useEffect(()=>{
        
    })

    return (
        <div className="flex justify-between items-center border-1 m-1"> 
            <div className="logo-container">
                <img src={LOGO_URL} alt="logo-image" className="h-30 w-30 ml-7"/>
            </div>
            <div className="">
                <ul className="flex gap-4 mr-4">
                    <Link to="/grocery" className="font-bold hover:underline hover:text-gray-500"><li>Grocery</li></Link>
                    {online ? <li>Online 🟢</li> : <li>Offline 🔴</li>}
                    <Link className="font-bold hover:underline hover:text-gray-500" to="/"><li>Home</li></Link>
                    <a className="font-bold hover:underline hover:text-gray-500" href="/about"><li>About</li></a>
                    <Link className="font-bold hover:underline hover:text-gray-500" to="/contact"><li>ContactUs</li></Link>
                    <li>{data.loggedInUser}</li>
                    <li className="mt-[-7]">
                        <button className="border-1 px-3 py-1 rounded-md text-white bg-black font-bold text-lg" onClick={()=>{
                            auth == "Login" ? setAuth("Logout") : setAuth("Login");
                        }}>{auth}</button>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Header;