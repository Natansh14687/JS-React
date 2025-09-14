import { CARD_IMG_URL } from "../utils/constants";

const Card = (props) => {
    const {name, cloudinaryImageId, locality, cuisines, avgRatingString, costForTwo} = props?.restObj?.info;
    return (
        <div className="mx-3 my-2 w-80 text-center hover:border-1 p-2">
            <div className="card-header">
                <img src={CARD_IMG_URL + cloudinaryImageId} alt="restaurant-food" className="h-74 w-full"/>
            </div>
            <div className="card-body my-2">
                <h1 className="font-extrabold text-2xl">{name}</h1>
                <h2 className="font-bold text-xl">{cuisines.join(", ")}</h2>
            </div>
            <div className="card-footer">
                <h3 className="text-xl">{locality}</h3>
                <h4 className="font-bold my-2">{avgRatingString}</h4>
                <h5 className="font-light text-sm">{costForTwo}</h5>
            </div>
        </div>
    );
}

export default Card;