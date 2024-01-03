import { useEffect, useState } from "react";
import Shimer from "./Shimer";
import { MENU_API } from "./utils/constants";
import {useParams} from "react-router-dom";
import useRestaurantMenu from "./utils/useRestaurantMenu";


const RestaurantMenu = () => {

    const {resId} = useParams(); //it gives an object  named as resId
    const resInfo = useRestaurantMenu(resId);
    

    if (resInfo == 0) {
        return <Shimer />
    }

    const { name, cuisines, costForTwoMessage } = resInfo?.cards[2]?.card?.card?.info
    const { itemCards } = resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card


    return (
        <div className="menu">
            <h1>
                {name}
            </h1>
            <p>{cuisines.join(", ")} - {costForTwoMessage}</p>
            <h2>Menu</h2>
            <ul>
                {itemCards.map((item) => (
                    <li key={item.card.info.id} >{item.card.info.name} - {"Rs." + item.card.info.price / 100}</li>
                ))}

            </ul>
        </div>
    )
}

export default RestaurantMenu;