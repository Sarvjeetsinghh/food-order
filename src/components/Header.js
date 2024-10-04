import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import logo from "/public/ccs_khana__1_-removebg-preview.png"
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {

    let [btnNameReact,setBtnNameReact] = useState("Login");

    const onlineStatus = useOnlineStatus();

    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={logo} alt="Logo" ></img>
            </div>
            <div className="nav-items">
                <ul>
                    <li><Link to="/" className="nav-link">Online Status :{onlineStatus ? "✅" : "🔴" }</Link></li>
                    <li><Link to="/" className="nav-link">Home</Link></li>
                    <li><Link to="/about" className="nav-link">About</Link></li>
                    <li><Link to="/contact" className="nav-link">Contact</Link></li>
                    <li><Link to="/cart" className="nav-link">Cart</Link></li>
                    <button
                     className="login" 
                     onClick= {() => { 
                        btnNameReact == "Login"
                        ? setBtnNameReact("Logout")
                        : setBtnNameReact("Login");
                    }}
                    >
                    {btnNameReact}
                    </button>
                </ul>
            </div>
        </div>
    )
}

export default Header;