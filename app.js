import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://scontent.fjdh1-1.fna.fbcdn.net/v/t39.30808-6/352527258_109020135551716_6573810303001160039_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=sQ24krrn_SIQ7kNvgEBKu3Q&_nc_ht=scontent.fjdh1-1.fna&oh=00_AYDSLTQekrSnHW2lqckhPKUN0vCSTw-Zk6GUe1Och81CvQ&oe=668639BA"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const cards = [
  {
    id: 1,
    imageUrl:
      "https://b.zmtcdn.com/webFrontend/e5b8785c257af2a7f354f1addaf37e4e1647364814.jpeg?output-format=webp&fit=around|402:360&crop=402:360;*,*",
    resName: "Burger King",
    cuisines: "American, Fast Food",
    avgRating: 4.2,
    costForTwo: "₹350",
    deliveryTime: 25,
  },
  {
    id: 2,
    imageUrl:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e0839ff574213e6f35b3899ebf1fc597",
    resName: "Pizza Hut",
    cuisines: "Italian, Pizza",
    avgRating: 4.0,
    costForTwo: "₹450",
    deliveryTime: 30,
  },
  {
    id: 3,
    imageUrl:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/6/4/d2c2136d-2a69-4f0d-82b7-67427d105af1_47395.JPG",
    resName: "Taco Bell",
    cuisines: "Mexican, Fast Food",
    avgRating: 3.8,
    costForTwo: "₹300",
    deliveryTime: 20,
  },
  {
    id: 4,
    imageUrl:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/d2ae7deef8fe5a14d8091621b6cf4fd8",
    resName: "Subway",
    cuisines: "Healthy, Sandwiches",
    avgRating: 4.1,
    costForTwo: "₹250",
    deliveryTime: 15,
  },
  {
    id: 5,
    imageUrl:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/9668a5819fcba35364dcff30d5f5cfbb",
    resName: "Domino's Pizza",
    cuisines: "Italian, Pizza",
    avgRating: 4.3,
    costForTwo: "₹400",
    deliveryTime: 35,
  },
];

const RestaurentCard = ({
  resName,
  cuisines,
  avgRating,
  costForTwo,
  deliveryTime,
  imageUrl,
}) => {
  return (
    <div className="res-card">
      <img alt="res-logo" src={imageUrl} />
      <h3>{resName}</h3>
      <h4>{cuisines}</h4>
      <h4>{avgRating} Stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{deliveryTime} Minutes</h4>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {cards.map((card) => (
          <RestaurentCard {...card} key={card.id} />
        ))}
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
