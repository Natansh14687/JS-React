import Card from "./Card";
import { restaurants } from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  const [restaurantsList, setRestaurantsList] = useState(restaurants);

  return (
    <div className="body">
      <div className="search-container">
        <button onClick={()=>{
          const topRestaurants = restaurants.filter(rest=>rest.info.avgRating >= 4.3);
          setRestaurantsList(topRestaurants);
        }}>Top Rated Restaurants</button>
      </div>
      <div className="cards-container-body">
        {restaurantsList.map(restaurant =>
            <Card key={restaurant.info.id} infoObj = {restaurant} />
        )}
        
      </div>
    </div>
  );
};

export default Body;