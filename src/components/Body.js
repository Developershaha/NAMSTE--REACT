import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react"; // this is named import and
import React from "react"; // this is default import ok
import Shimmer from "./Shimmer";

const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [SearchText, setSearchText] = useState("");
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.4822335&lng=73.9470036&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    // use optional chaining
    const jsonData =
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
        setListOfRestaurant(jsonData);
    setFilterData(jsonData);
  };

  return listOfRestaurant?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <input
          type="text"
          className="search-box"
          name="SearchText"
          value={SearchText}
          onChange={(event) => {
            setSearchText(event?.target?.value);
          }}
        />
        <button
          onClick={() => {
            // If not empty, filter the restaurant cards and update the UI
            const filterList = filterData.filter((res) =>
              res?.info?.name
                ?.toLowerCase()
                ?.includes(SearchText?.toLowerCase())
            );
            setListOfRestaurant(filterList);
          }}
        >
          Search
        </button>

        <button
          className="filter-btn"
          onClick={() => {
            const newList = listOfRestaurant.filter((res) => {
              return res?.info?.avgRating > 4;
            });
            setListOfRestaurant(newList);
          }}
        >
          Top Rated Restaurant above 4 star
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurant?.map((restaurant) => (
          <RestaurantCard key={restaurant?.info?.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};
export default Body;
