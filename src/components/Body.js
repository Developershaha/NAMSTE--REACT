import RestaurantCard from "./RestaurantCard";
import resObj from "../utils/mokeData.js";

const Body = () => {
  const listOfRestaurant = [];
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            console.log("first");
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {resObj.map((restaurant) => (
          <RestaurantCard key={restaurant?.info?.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};
export default Body;
