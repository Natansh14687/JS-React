import { useEffect, useState } from "react";
import { RESTAURANT_API } from "../utils/constants";
import {useParams} from "react-router-dom";

const Restaurant = () => {
    const [dishes, setDishes] = useState(null);
    const param = useParams();
    // console.log(param);

    useEffect(()=>{
        fetchDishes();
    },[])

    const fetchDishes = async () => {
        const response = await fetch(RESTAURANT_API+param.restaurantId);
        const dishesData = await response.json();
        // console.log(dishesData);
        setDishes(dishesData);
        
    }
    if(dishes===null) return <h1>Loading data.......</h1>
    const {name, slugs} = dishes?.data?.cards[2]?.card?.card.info
    const {itemCards} = dishes?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card

    return (
        <div>
            <h1>{name}</h1>
            <h2>{slugs.restaurant}</h2>
            <ul>
                {itemCards.map((item)=>{
                    return (
                        <li key={item.card.info.id}>{item.card.info.name}- {item.card.info.price/100}</li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Restaurant;