import { CDN_URL } from "../utils/constants";
const Card = (props) => {

  const { infoObj } = props;
  const {name, areaName, cuisines, avgRating, cloudinaryImageId} = infoObj?.info;

  return (
    <div className="card-container">
      <div className="food-image-container">
        <img
          src={CDN_URL + cloudinaryImageId}
          alt="food-image"
          className="food-image"
        />
      </div>
      <div className="card-body">
        <h3>{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h5>{avgRating} Stars</h5>
        <h6>{areaName}</h6>
      </div>
    </div>
  );
};

export default Card;