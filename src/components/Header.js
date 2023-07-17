import { LOGO_URL } from "../utils/constants";
import {useState} from "react";
const Header = () =>{
    

    const [btnName, setBtnName] = useState("Login");

    return(
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL} />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                    <button className="login" onClick={()=>{
                       btnName === "login" ? setBtnName("Logout") : setBtnName("login");
                    }}>{btnName}</button>
                </ul>
            </div>
        </div>
    );  
};

export default Header;