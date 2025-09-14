import { RESTAURANT_MENU } from "./constants";
import { useState, useEffect } from "react";

const useRestaurantMenu = (resId) => {
    const [resInfo, setResInfo] = useState(null);

    useEffect(()=>{
        fetchMenu();
    },[]);

    const fetchMenu = async ()=>{
        const response = await fetch(RESTAURANT_MENU+resId);
        const data = await response.json();
        setResInfo(data);
    }

    return resInfo;

}

export default useRestaurantMenu;