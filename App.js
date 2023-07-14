import React from "react";
import ReactDOM from "react-dom";

const Header = () =>{
    return(
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

const RestaurantCard = () =>{
    return(
        <div className="res-card">
            <h3>Meghana Foods</h3>
        </div>
    )
}

const Body = () => {
    return (
        <div className="body">
            <div className="search">Search</div>
                <div className="res-container">
                   <RestaurantCard/>
                </div>
        </div>
    )
}

const AppLayout= () =>{
    return (
        <div className="app">
            <Header/>
            <Body/>
        </div>
    )
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);
/*
Component can also be written like this;
1. const HeadingComponent = () => <h1>This is a react functional Component</h1>;  
2. const HeadingComponent = () => (
    <h1>This is a react functional Component</h1>;  
);
 */