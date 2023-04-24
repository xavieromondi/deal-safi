import React, { useEffect, useState } from "react";
import "./App.css";

import Ebay from "./Ebay";

function App() {
  const [query, setQuery] = useState("hisensetv");
  const [ebay, setEbay] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        `https://ebay-web-scrapper.onrender.com/ebay?q=${query}`
      );
      const data = await response.json();
      setEbay(data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSearch = () => {
    fetchData();
    setQuery("");
  };

  return (
    <div>
      <div className="search-container">
        <input
          className="search-input"
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className="search-btn" onClick={handleSearch}>
          Search
        </button>
      </div>
      {isLoading ? (
        <div className="loading-spinner">Loading...</div>
      ) : (
        ebay.map((items) => (
          <Ebay
            key={items.imageUrl}
            name={items.name}
            price={items.price}
            img={items.imageUrl}
            link={items.link}
          />
        ))
      )}
    </div>
  );
}

export default App;
