import RestaurentCard from "./RestaurentCard";
import cards from "../utils/cards";
import { useState } from "react";

const Body = () => {
  const [resCards, setResCards] = useState(cards);
  const [filtered, setFiltered] = useState(false);

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            if (filtered) {
              setResCards(cards);
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
          <RestaurentCard {...card} key={card.id} />
        ))}
      </div>
    </div>
  );
};

export default Body;
