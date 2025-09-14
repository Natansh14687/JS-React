
import { useEffect, useState } from "react";
import { restaurantsDummy } from "../utils/mockData";
import { SWIGGY_API } from "../utils/constants";
import Card from "./Card";


const Body = () => {
    const [restaurantsList, setRestaurantsList] = useState(restaurantsDummy);
    const [allRestaurants, setAllRestaurants] = useState([]);
    const [inputValue, setInputValue] = useState("");
    useEffect(()=>{
        fetchData();
    },[]);
    
    const fetchData = async () => {
        const response = await fetch(SWIGGY_API);
        const json = await response.json();
        const restaurants = json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        setRestaurantsList(restaurants);
        setAllRestaurants(restaurants);
    }

    return (
        <div className="body-container">
            <div className="search-container">
                <input type="text" placeholder="Search Restaurants" value={inputValue} onChange={(e)=>{setInputValue(e.target.value)}}/>
                <button onClick={()=>{
                    const particularRestaurant = allRestaurants.filter(rest=>rest.info.name.toLowerCase().includes(inputValue.toLowerCase()));
                    setRestaurantsList(particularRestaurant);
                }}>Search</button>
            </div>
            <div className="cards-container">
                {restaurantsList.map(restaurant=>(
                    <Card key={restaurant.info.id} restObj={restaurant}/>
                ))}
            </div>
        </div>
        
    );
}

export default Body;