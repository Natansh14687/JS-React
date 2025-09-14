import { CARD_IMG_URL } from "../utils/constants";

const Card = (props) => {
    const {name, cloudinaryImageId, locality, cuisines, avgRatingString, costForTwo} = props?.restObj?.info;
    return (
        <div className="card-container">
            <div className="card-header">
                <img src={CARD_IMG_URL + cloudinaryImageId} alt="restaurant-food" className="card-image"/>
            </div>
            <div className="card-body">
                <h1>{name}</h1>
                <h2>{cuisines.join(", ")}</h2>
            </div>
            <div className="card-footer">
                <h3>{locality}</h3>
                <h4>{avgRatingString}</h4>
                <h5>{costForTwo}</h5>
            </div>
        </div>
    );
}

export default Card;