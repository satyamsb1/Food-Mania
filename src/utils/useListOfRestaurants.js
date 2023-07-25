import { useEffect, useState } from "react";
const useListOfRestaurants = () => {

    const [listOfRestaurants, setListOfRestaurants] = useState([]);

    useEffect(() =>{
        fetchData(); 
    },[]);

    const fetchData = async () =>{
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        console.log(json.data);
        setListOfRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    };
    return listOfRestaurants;
};

export default useListOfRestaurants;