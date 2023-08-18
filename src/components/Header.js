
import { LOGO_URL } from "../utils/constants";
import {useState, useEffect, useContext} from "react";
import {Link} from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import {useSelector} from "react-redux"

const Header = () =>{
    const [btnName, setBtnName] = useState("Login");
    const onlineStatus = useOnlineStatus();
    const {loggedInUser} = useContext(UserContext);

    //Subscribing to a store using a selector function
    const cartItems = useSelector((store)=>store.cart.items);
    console.log(cartItems);

    return(
        <div className="flex justify-between bg-pink-100 shadow-lg">
            <div className="logo-container">
                <img className="w-56" src={LOGO_URL} />
            </div>
            <div className="flex items-center">
                <ul className="flex p-4 m-4">
                    <li className="px-4">
                        Online Status : {onlineStatus ? "✅" : "🔴"}
                    </li>
                    <li className="px-4"> <Link to="/">Home</Link></li>
                    <li className="px-4">
                       <Link to="/about">About us</Link> 
                    </li>
                    <li className="px-4">
                       <Link to="/contact"> Contact Us</Link>
                    </li>
                    <li className="px-4">
                       <Link to="/grocery"> Grocery</Link>
                    </li>
                    <li className="px-4 font-bold text-xl">
                        <Link to="/cart"> Cart -{cartItems.length} </Link>   
                    </li>
                    
                    <button className="hover:cursor hover:text-pink-500 hover:text-lg" onClick={()=>{
                       btnName === "login" ? setBtnName("Logout") : setBtnName("login");
                    }}>{btnName}</button>
                    <li className="px-4 font-bold">{loggedInUser}</li>
                </ul>
            </div>
        </div>
    );      
};

export default Header;