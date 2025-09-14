
import { useEffect, useState } from "react";
import { restaurantsDummy } from "../utils/mockData";
import { SWIGGY_API } from "../utils/constants";
import Card from "./Card";
import { Link } from "react-router-dom";


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
            <div className="my-5">
                <input type="text" placeholder="Search Restaurants" className="border-y-1 border-l-1 ml-10 rounded-l-xl p-1" value={inputValue} onChange={(e)=>{setInputValue(e.target.value)}}/>
                <button  className="p-1 border-y-1 border-r-1 cursor-pointer focus:outline-none focus:ring-0 rounded-r" onClick={()=>{
                    const particularRestaurant = allRestaurants.filter(rest=>rest.info.name.toLowerCase().includes(inputValue.toLowerCase()));
                    setRestaurantsList(particularRestaurant);
                }}>Search</button>
            </div>
            <div className="flex justify-center flex-wrap">
                    {restaurantsList.map(restaurant=>(
                        <Link key={restaurant.info.id} to={"/restaurant/" + restaurant.info.id}><Card restObj={restaurant}/></Link>
                    ))}
            </div>
        </div>
        
    );
}

export default Body;