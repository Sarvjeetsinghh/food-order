import { useEffect, useState } from "react";
import RestaurentCard from "./RestaurentCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {

  const [listOfRestaurents,setListOfRestaurent] = useState([]);

  const [filteredRestaurent,setFilteredRestaurent] = useState([]);

  const [searchText,setSearchText] = useState([]);


  useEffect(() => {
    fetchData();
  },[]);

  const fetchData = async() => {
    const data =await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.5220971&lng=77.2101534&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json =await data.json();
    console.log(json);

    setListOfRestaurent(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredRestaurent(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  }


  //condition for Shimmer Showing(is also called conditional rendering)
  // if(listOfRestaurents.length == 0) {
  //   return (
  //     <Loader />
  //   )
  // }

  const onlineStatus = useOnlineStatus();

  if(onlineStatus == false)
    return (
      <h2>Looks like you are offline!! Plz check your internet connection</h2>
    )
 
    return listOfRestaurents.length == 0 ? (
      <Shimmer />
    ) : (
    <div className="body">
      
        <div className="filter">
          <input className="search-box"
          type="text"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value)
          }}>
          </input>

          <button onClick={() => {
            const filteredRestaurant = listOfRestaurents.filter((res) => 
              res.info.name.toLowerCase().includes(searchText)
           )
           setFilteredRestaurent(filteredRestaurant);
          }}>
            Search
          </button>
          <button onClick={() => {
            const filteredList = listOfRestaurents.filter(
              (res) => res.info.avgRating > 4
            );
            // setListOfRestaurent(filteredList);
            setFilteredRestaurent(filteredList);
          }} className="filter-btn">Top Rated Reastaurents</button>
        </div>

    

        <div className="res-container">
        {filteredRestaurent.map((restaurent) => (
          <Link
           key={restaurent.info.id} 
           to={"/restaurents/" + restaurent.info.id}
           >
            <RestaurentCard resData = {restaurent} />
            </Link>
        ))}

        </div>
    </div>
    );
};

export default Body;