import Card from "./Card";
import { shimmerRestaurants } from "../utils/mockData";
import { useEffect, useState } from "react";
import { SWIGGY_API } from "../utils/constants";
import {Link} from "react-router-dom";

const Body = () => {
  const [restaurantsList, setRestaurantsList] = useState(shimmerRestaurants);
  const [allRestaurants, setAllRestaurants] = useState(shimmerRestaurants);
  const [inputValue, setInputValue] = useState("");

  useEffect(()=>{
    fetchData();
  },[]);

  const fetchData = async ()=>{
    const response = await fetch(SWIGGY_API);
    const swiggyData = await response.json();
    // console.log(swiggyData);
    const {restaurants} = swiggyData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
    // console.log(restaurants);
    setRestaurantsList(restaurants);
    setAllRestaurants(restaurants);
    
  }

  return (
    <div className="body">
      <div className="search-container">
        <input type="text" placeholder="search restaurants" value={inputValue} onChange={(e)=>{setInputValue(e.target.value)}} />
        <button onClick={()=>{
          const filteredRestaurants = allRestaurants.filter(restaurant => restaurant.info.name.toLowerCase().includes(inputValue.toLowerCase()));
          setRestaurantsList(filteredRestaurants);
        }}>Search</button>
      </div>
      <div className="cards-container-body">
        {restaurantsList.map(restaurant =>
            <Link key={restaurant.info.id} to={"/restaurant/"+restaurant.info.id}><Card infoObj = {restaurant} /></Link>
        )}
        
      </div>
    </div>
  );
};

export default Body;