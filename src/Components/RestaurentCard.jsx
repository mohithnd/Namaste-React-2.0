import { CLOUDINARY_BASE_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const RestaurentCard = ({
  id,
  cloudinaryPath,
  resName,
  cuisines,
  avgRating,
  costForTwo,
  deliveryTime,
}) => {
  return (
    <div className="res-card">
      <Link to={`/restaurent/${id}`}>
        <img alt="res-logo" src={CLOUDINARY_BASE_URL + cloudinaryPath} />
        <h3>{resName}</h3>
        <h4>{cuisines}</h4>
        <h4>{avgRating} Stars</h4>
        <h4>{costForTwo}</h4>
        <h4>{deliveryTime} Minutes</h4>
      </Link>
    </div>
  );
};

export default RestaurentCard;
