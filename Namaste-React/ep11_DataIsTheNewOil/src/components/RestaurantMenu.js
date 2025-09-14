
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { useParams } from "react-router-dom";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";


const RestaurantMenu = ()=>{
    
    const [showIndex, setShowIndex] = useState(null);
    const params = useParams();
    const {resId} = params;
    
    const resInfo = useRestaurantMenu(resId);    

    
    if(resInfo===null) return <h1>Loading...</h1>
    const {name, slugs} = resInfo?.data?.cards[2].card.card.info
    // const regularCards = resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;

     const categories = resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c) => c?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
     console.log(categories);
     

    // const recommendedCards = regularCards.find((c)=>c.card.card.itemCards);
    // const itemCards = recommendedCards.card.card.itemCards;
    return (
        <div>
            <div className="text-center mt-4">
                <h1 className="text-3xl font-extrabold">{name}</h1>
                <h2 className="text-2xl font-bold mt-2">{slugs.restaurant}</h2>
            </div> 

            
            <div className="mt-10">
                {categories.map((category, index) => <RestaurantCategory key={category?.card?.card?.categoryId} data={category?.card?.card} showItems={index === showIndex ? true : false} setShowIndex={() => setShowIndex(index === showIndex ? null : index)} />)}
            </div>
        </div>
    );
}

export default RestaurantMenu;