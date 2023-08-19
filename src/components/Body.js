import RestaurantCard, {withPromotedLabel} from "./RestaurantCard";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import {Link} from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [searchText, setSearchText] = useState("");
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);

    const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);
    // const {loggedInUser, setUserName} = useContext(UserContext);
    useEffect(()=>{
        fetchData();
    }, []);

    const fetchData = async () => { 
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        setListOfRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setFilteredRestaurant(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    };
    // console.log(listOfRestaurants);
    const onlineStatus = useOnlineStatus();

    if(!onlineStatus){
        return( 
        <h1>
            Looks like you are offline please try again!!!
        </h1>
    )};

    return listOfRestaurants?.length === 0 ? <Shimmer/> : (
        <div className="body">
            <div className="flex">
                <div className="m-4 p-4">
                    <input type="text" className="border border-solid border-black" value={searchText} onChange={(e)=>{
                        setSearchText(e.target.value);
                    }}/>
                    <button className="px-4 py-2 bg-green-100 m-4 rounded-lg hover:shadow-xl transition-transform duration-150 transform hover:scale-110" onClick={()=>{
                        const filteredRestaurant=listOfRestaurants.filter((res)=>
                            res?.info?.name.toLowerCase().includes(searchText.toLowerCase())
                        )
                        setFilteredRestaurant(filteredRestaurant);

                    }}>Search</button>
                </div>
                <div className="m-4 p-4 flex items-center">
                <button className="px-4 py-2 bg-gray-200 rounded-lg hover:shadow-xl transition-transform duration-150 transform hover:scale-110" 
                    onClick= {()=>{
                        //Filter code here 
                            const fileredList = listOfRestaurants.filter((res)=>res.info.avgRating > 4
                            );
                            setFilteredRestaurant(fileredList);
                        }}>
                        Top Rated Restaurants
                </button>


                {/* <label>UserName : </label>
                <input className="border border-black p-2" 
                value={loggedInUser}
                onChange={(e)=>setUserName(e.target.value)}
                />*/}
                </div> 
                
            </div>
                <div className="flex flex-wrap">
                   {filteredRestaurant?.map((restaurant) => 
                        <Link key = {restaurant?.info?.id} to = {"/restaurant/"+restaurant?.info?.id}>
                            {restaurant?.info?.sla?.deliveryTime <=20 ? <RestaurantCardPromoted resData= {restaurant}/> : 
                                <RestaurantCard  resData= {restaurant}/>}
                        </Link>
                    )}
                </div>
        </div>
    );
};

export default Body;