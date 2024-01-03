import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimer from "./Shimer";
import {Link} from "react-router-dom";
import useOnlineStatus  from "./utils/useOnlineStatus";


const Body = () => {

    const [ListOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);

    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        fetchData();
    },[])

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

    const onlineStatus = useOnlineStatus();
    if(onlineStatus == false) return <h1>You are offline</h1>
    

    return ListOfRestaurants.length == 0
        ? <Shimer />
        : (
            <div className="body">
                <div className="filter">
                    <div className="p-5 bg-purple-50 my-5">
                        <input
                            placeholder="Search"
                            type="text"
                            className="focus:bg-cyan-50 p-2"
                            value={searchText}
                            onChange={(e) => {
                                setSearchText(e.target.value);
                            }}
                        />
                        <button
                            className="bg-cyan-600 hover:bg-purple-500 m-2 rounded-md p-1 text-white"
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
                <div className="flex flex-wrap">
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