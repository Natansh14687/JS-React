
import ItemsList from "./ItemsList";
import { useState } from "react";

const RestaurantCategory = (props) => {
    // const [showItems, setShowItems] = useState(false);
    
    const handleClick = () => {
        props.setShowIndex();
    }

    return (
        <div className="mt-8">
            <div className="w-6/12 m-auto cursor-pointer bg-lime-100 p-4 hover:bg-lime-200 shadow-xl" onClick={handleClick}>
                <div className="flex justify-between">
                    <span className="ml-1 font-bold text-lg">{props.data.title} ({props.data.itemCards.length})</span>
                    <span className="text-2xl mr-1">🠻</span>
                </div>
                
            </div>
            <div className="w-6/12 m-auto bg-lime-100 px-4 shadow-xl">
                {props.showItems && <ItemsList items={props.data.itemCards}/>}
            </div>
        </div>
    )
}

export default RestaurantCategory;