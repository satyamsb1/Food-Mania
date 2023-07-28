import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import {Link} from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
// import useListOfRestaurants from "../utils/useListOfRestaurants";

const Body = () => {
    // const [searchText, setSearchText] = useState("");
    // const listOfRestaurants = useListOfRestaurants();
    // const [filteredRestaurant, setFilteredRestaurant] = useState(listOfRestaurants);

    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [searchText, setSearchText] = useState("");
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);

    useEffect(()=>{
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        setListOfRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setFilteredRestaurant(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    };
    console.log(listOfRestaurants);
    const onlineStatus = useOnlineStatus();

    if(!onlineStatus){
        return( 
        <h1>
            Looks like you are offline please try again!!!
        </h1>
    )};

    return listOfRestaurants.length === 0 ? <Shimmer/> : (
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input type="text" className="search-box" value={searchText} onChange={(e)=>{
                        setSearchText(e.target.value);
                    }}/>
                    <button onClick={()=>{
                        console.log(searchText);

                        const filteredRestaurant=listOfRestaurants.filter((res)=>
                            res?.info?.name.toLowerCase().includes(searchText.toLowerCase())
                        )
                        setFilteredRestaurant(filteredRestaurant);

                    }}>Search</button>
                </div>
                <button className="filter-btn" 
                onClick= {()=>{
                    //Filter code here 
                        const fileredList = listOfRestaurants.filter((res)=>res.info.avgRating > 4
                        );
                        setFilteredRestaurant(fileredList);
                    }}>
                    Top Rated Restaurants
                </button>
                {console.log("rendered")}
            </div>
                <div className="res-container">
                   {filteredRestaurant.map((restaurant) => 
                        <Link key = {restaurant.info.id} to = {"/restaurant/"+restaurant.info.id}>
                                <RestaurantCard  resData= {restaurant}/>
                        </Link>
                    )}
                </div>
        </div>
    );
};

export default Body;