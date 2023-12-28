import resList from "./utils/mockData";
import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimer from "./Shimer";
import {Link} from "react-router-dom";


const Body = () => {

    const [ListOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);

    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        const data = await fetch(
            // https://corsproxy.io/
            "https://www.swiggy.com/mapi/homepage/getCards?lat=30.9002695&lng=75.8581159"
        )
        const json = await data.json();
        console.log(json);
        setListOfRestaurants(json?.data?.success?.cards[4]?.gridWidget?.gridElements?.infoWithStyle?.restaurants)
        setFilteredRestaurants(json?.data?.success?.cards[4]?.gridWidget?.gridElements?.infoWithStyle?.restaurants)
    }



    return ListOfRestaurants.length == 0
        ? <Shimer />
        : (
            <div className="body">
                <div className="filter">
                    <div className="search">
                        <input
                            type="text"
                            className="search-box"
                            value={searchText}
                            onChange={(e) => {
                                setSearchText(e.target.value);
                            }}
                        />
                        <button
                            onClick={() => {
                                const filteredRestaurants = ListOfRestaurants.filter(
                                    (res) => res.info.name.toLowerCase().includes(searchText.toLowerCase())
                                );
                                setFilteredRestaurants(filteredRestaurants);
                            }}
                        >
                            Search
                        </button>
                    </div>
                    <button
                        className="filter-btn"
                        onClick={() => {
                            const filteredList = ListOfRestaurants.filter(
                                (res) => res.info.avgRating > 4

                            );
                            setListOfRestaurants(filteredList);
                        }}
                    >
                        Top Rated Restaurants
                    </button>
                </div>
                <div className="res-container">
                    {
                        filteredRestaurants.map((restaurant) => (
                            <Link
                                key={restaurant.info.id}
                                to={"/restaurants/" + restaurant.info.id}
                            >
                                <RestaurantCard resData={restaurant} />
                            </Link>

                        ))
                    }
                </div>
            </div>
        )
}
export default Body;