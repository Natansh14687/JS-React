
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { useParams } from "react-router-dom";


const RestaurantMenu = ()=>{
    

    const params = useParams();
    const {resId} = params;
    
    const resInfo = useRestaurantMenu(resId);    

    
    if(resInfo===null) return <h1>Loading...</h1>
    const {name, slugs} = resInfo?.data?.cards[2].card.card.info
    const regularCards = resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;

    const recommendedCards = regularCards.find((c)=>c.card.card.itemCards);
    const itemCards = recommendedCards.card.card.itemCards;
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