import RestaurentCard from "./RestaurentCard";
import { useState, useEffect } from "react";
import { CARDS_DATA_URL } from "../utils/constants";

const Body = () => {
  const [resCards, setResCards] = useState([]);
  const [filtered, setFiltered] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(CARDS_DATA_URL);
    const data = await response.json();
    setResCards(data);
  };

  if (resCards.length === 0) {
    return (
      <div className="loading">
        <div className="loading-dot"></div>
        <div className="loading-dot"></div>
        <div className="loading-dot"></div>
        <div className="loading-dot"></div>
      </div>
    );
  }

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            if (filtered) {
              fetchData();
            } else {
              setResCards((prevCards) =>
                prevCards.filter((card) => card.avgRating > 4.3)
              );
            }
            setFiltered((prevFiltered) => !prevFiltered);
          }}
        >
          Top Rated Restaurents
        </button>
      </div>
      <div className="res-container">
        {resCards.map((card) => (
          <RestaurentCard {...card} key={card.cloudinaryPath} />
        ))}
      </div>
    </div>
  );
};

export default Body;
