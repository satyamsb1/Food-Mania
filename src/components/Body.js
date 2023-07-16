import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import resList from "../utils/mockData";


const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState(resList);
    return (
        
        <div className="body">
            <div className="filter">
                <button className="filter-btn" 
                onClick= {()=>{
                    //Filter code here 
                    const fileredList = listOfRestaurants.filter((res)=>res.data.avgRating > 4
                    );
                    setListOfRestaurants(fileredList);
                    console.log(listOfRestaurants);
                }}>
                    Top Rated Restaurants
                </button>
            </div>
                <div className="res-container">
                   {listOfRestaurants.map(restaurant => <RestaurantCard key = {restaurant.data.id}  resData= {restaurant}/>)}
                </div>
        </div>
    );
};

export default Body;