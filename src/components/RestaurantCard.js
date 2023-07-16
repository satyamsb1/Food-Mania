import { IMG_URL } from "../utils/constants";
const RestaurantCard = (props) =>{
    const {resData} = props;
    const  {cloudinaryImageId, name, cuisines, costForTwoString, avgRating, deliveryTime} = resData?.data;
    return(
        <div className="res-card">
            <img className="res-logo" src={
                IMG_URL + cloudinaryImageId
                } 
                alt="Not rendered" />
            <h3>{name}</h3>
            <h3>{cuisines.join(", ")}</h3>
            <h4>{costForTwoString}</h4>
            <h4>{avgRating}</h4>
            <h4>{deliveryTime} minutes</h4>
        </div>
    );
};

export default RestaurantCard;