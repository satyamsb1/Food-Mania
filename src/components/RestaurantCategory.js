import ItemList from "./ItemList"; 
import {useState} from "react"
const RestaurantCategory = (data) => {
    // console.log(data.itemCards);
    const [showItems, setShowItems] = useState(false);
    const handleClick =  () =>{
        setShowItems(!showItems);
    }
    return (
        <div>
            <div className="mx-auto my-4 w-6/12 bg-gray-50 shadow-lg p-4">
                {/*Header */}
                <div className=" flex justify-between cursor-pointer" onClick={handleClick}>
                <span className="font-bold text-lg">{data?.title}({data?.itemCards.length})</span>
                <span>{showItems ?"🔼" : "🔽"}</span> 
                </div>

                
                {/*Accordian body */}
               {showItems && <ItemList items={data?.itemCards}/>}
            </div>
        </div>

    );
};

export default RestaurantCategory;