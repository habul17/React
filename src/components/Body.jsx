import RestaurantCard from "./RestaurantCard";
import Shimmer from "./shimmer.jsx"; // Import the Shimmer component
import { useState, useEffect } from "react";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  // We'll also keep a copy of the original list to make filtering work correctly
  const [originalListOfRestaurants, setOriginalListOfRestaurants] = useState(
    []
  );
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=11.0304324&lng=77.03909279999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();

    const restaurantGridCard = json?.data?.cards?.find(
      (card) => card?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );

    const restaurants =
      restaurantGridCard?.card?.card?.gridElements?.infoWithStyle?.restaurants;

    setListOfRestaurants(restaurants || []);
    setOriginalListOfRestaurants(restaurants || []); // Save the original list
  };

  // Conditional Rendering: If the list is empty, show the Shimmer UI.
  // This is the core logic for the loading state.
  if (listOfRestaurants.length === 0) {
    return <Shimmer />;
  }

  // If we have data, show the main UI.
  return (
    <div className="body">
      <div className="filter-container">
        <input
          type="text"
          className="search-box"
          placeholder="Search for restaurants..."
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
            // Filter as user types
            const filtered = originalListOfRestaurants.filter((res) =>
              res.info.name.toLowerCase().includes(e.target.value.toLowerCase())
            );
            setListOfRestaurants(filtered);
          }}
        />
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = originalListOfRestaurants.filter(
              (res) => res.info.avgRating > 4.5
            );
            setListOfRestaurants(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant.info} />
        ))}
      </div>
    </div>
  );
};

export default Body;
