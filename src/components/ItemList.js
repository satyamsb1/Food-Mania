import { IMG_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";
import {useDispatch} from "react-redux";
const ItemList = ({items}) =>{
    const dispatch = useDispatch();
    const handleAddItem = (item) =>{
        dispatch(addItem(item));
    }

    return (
        <div>
            {items.map((item) =>(
                <div key={item?.card?.info?.id} className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between">
                         <div className="w-9/12">
                            <div className="py-2">
                                <span>{item?.card?.info?.name}</span>
                                <span> - ₹ {item?.card?.info?.price ? item?.card?.info?.price/100 : item?.card?.info?.defaultPrice/100}
                                </span>
                                </div>
                                <p className="text-xs">{item?.card?.info?.description}</p>
                            </div>
                        <div className="w-40 p-4">
                            <div>   
                                <button className="p2 bg-black shadow-lg absolute mx-11 rounded-lg text-white h-7 "
                                onClick={()=>handleAddItem(item)
                                }>
                                    Add +</button>
                            </div>
                            <img src={IMG_URL + item?.card?.info?.imageId} className="w-full rounded-lg" alt="" /> 
                        </div>
                        
                        
                </div>
            ))}
        </div>
    );
};

export default ItemList;