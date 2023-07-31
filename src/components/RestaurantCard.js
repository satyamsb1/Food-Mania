import { IMG_URL } from "../utils/constants";


const RestaurantCard = (props) =>{
    const {resData} = props;
    const  {cloudinaryImageId, name, cuisines, costForTwo, avgRating} = resData?.info;
    const {deliveryTime} = resData.info.sla;
    return(
        <div className="m-4 p-4 w-[250px] bg-[#f0f0f0] rounded-lg hover:shadow-xl hover:bg-gray-200 transition-transform duration-150 transform hover:scale-95">
            <img className="rounded-lg " src={
                IMG_URL + cloudinaryImageId
                } 
                alt="Not rendered" />
            <h3 className="font-bold py-3 text-lg" >{name}</h3>
            <h3>{cuisines.join(", ")}</h3>
            <h4>{costForTwo}</h4>
            <h4>{avgRating} stars</h4>
            <h4>{deliveryTime} minutes</h4>
        </div>
    );
};

export const withPromotedLabel = (RestaurantCard)=>{
    return(props)=>{
        return(
           <div>
            <label className="absolute bg-black text-white mx2 p2 rounded-lg z-10" >Fast Delivery</label>
            <RestaurantCard {...props}/>
           </div> 
        )
    }
}

export default RestaurantCard;