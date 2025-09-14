import { useEffect, useState } from "react";
import { RESTAURANT_MENU } from "../utils/constants";
import { useParams } from "react-router-dom";


const RestaurantMenu = ()=>{
    const [resInfo, setResInfo] = useState(null);

    const params = useParams();
    const {resId} = params;
    
    

    useEffect(()=>{
        fetchMenu();
    },[]);

    const fetchMenu = async ()=>{
        const response = await fetch(RESTAURANT_MENU+resId);
        const data = await response.json();
        setResInfo(data);
    }
    if(resInfo===null) return <h1>Loading...</h1>
    const {name, slugs} = resInfo?.data?.cards[2].card.card.info
    const { itemCards } = resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
    return (
        <div>
            <h1>{name}</h1>
            <h2>{slugs.restaurant}</h2>
            <ul>
                {itemCards.map((item)=>{
                    return <li key={item.card.info.id}>{item.card.info.name}</li>
                })}
            </ul>
        </div> 
    );
}

export default RestaurantMenu;