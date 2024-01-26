import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  const { resId } = useParams();
  useEffect(() => {
    fetchMenu();
  }, []);
  const fetchMenu = async () => {
    const data = await fetch(MENU_API + resId);
    const json = await data?.json();
    setResInfo(json?.data);
  };
  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards?.[0]?.card?.card?.info || {};
  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card || {};
  return resInfo === null ? (
    <Shimmer />
  ) : (
    <div className="menu">
      <h1>{name}</h1>
      <p>
        {cuisines.join(", ")}-{costForTwoMessage}
      </p>
      <h2>Menu</h2>

      {itemCards?.length > 0 ? (
        <ul>
          {itemCards?.map((item, index) => (
            <li key={index}>
              {item?.card?.info?.name}- Rs.{item?.card?.info?.price}
            </li>
          ))}
        </ul>
      ) : (
        <h3>No menu available at the moment. Please check back later .</h3>
      )}
    </div>
  );
};

export default RestaurantMenu;
