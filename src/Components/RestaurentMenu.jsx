import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { CARDS_DATA_URL, CLOUDINARY_BASE_URL } from "../utils/constants";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const { id } = useParams();
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(CARDS_DATA_URL);
    const data = await response.json();
    let res = data.find((res) => res.id === id);
    if (res) {
      setResInfo(res);
    }
  };

  return resInfo === null ? (
    <Shimmer />
  ) : (
    <div className="restaurant-menu">
      <div className="restaurant-summary">
        <img
          className="restaurant-img"
          src={CLOUDINARY_BASE_URL + resInfo.cloudinaryPath}
          alt={resInfo.resName}
        />
        <div className="restaurant-summary-details">
          <h2 className="restaurant-title">{resInfo.resName}</h2>
          <p className="restaurant-cuisines">{resInfo.cuisines}</p>
          <div className="restaurant-details">
            <div className="restaurant-rating">
              <i className="fa-solid fa-star"></i>
              <span>{resInfo.avgRating}</span>
            </div>
            <div className="restaurant-rating-slash">|</div>
            <div>{resInfo.deliveryTime} mins</div>
            <div className="restaurant-rating-slash">|</div>
            <div>{resInfo.costForTwo} for two</div>
          </div>
        </div>
      </div>

      <div className="restaurant-menu-content">
        <h3 className="menu-title">Menu</h3>
        <div className="menu-items-list">
          {resInfo.menu.map((item, index) => (
            <div className="menu-item" key={index}>
              <div className="menu-item-details">
                <h4 className="item-title">{item.name}</h4>
                <p className="item-cost">{item.price}</p>
              </div>
              <div className="menu-img-wrapper">
                <button className="add-btn">ADD +</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;
