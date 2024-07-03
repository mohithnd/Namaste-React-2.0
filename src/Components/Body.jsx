import RestaurentCard from "./RestaurentCard";
import { useState, useEffect } from "react";
import { CARDS_DATA_URL } from "../utils/constants";
import Shimmer from "./Shimmer";

const Body = () => {
  const [resCards, setResCards] = useState([]);
  const [filtered, setFiltered] = useState(false);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(CARDS_DATA_URL);
    const data = await response.json();
    setResCards(data);
  };

  return resCards.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value.trim());
            }}
          />
          <button
            className="search-btn"
            onClick={async () => {
              if (searchText.length === 0) {
                return;
              }
              if (filtered) {
                await fetchData();
                setFiltered((prevFiltered) => !prevFiltered);
              }
              const filteredCards = resCards.filter(
                (card) =>
                  card.resName
                    .toLowerCase()
                    .includes(searchText.toLowerCase()) ||
                  card.cuisines.toLowerCase().includes(searchText.toLowerCase())
              );
              if (filteredCards.length > 0) {
                setResCards(filteredCards);
                setFiltered((prevFiltered) => !prevFiltered);
              }
              setSearchText("");
            }}
          >
            Search
          </button>
        </div>
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
