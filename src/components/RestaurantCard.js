import {CDN_URL} from "./utils/constants"

const RestaurantCard = (props) => {
    const { resData } = props;
    const {name, cuisines, avgRating, sla, costForTwo, cloudinaryImageId} = resData.info
    return (
        <div className="w-56 p-2 m-2 shadow-lg bg-pink-50">
            <img
                className="res-logo h-40 w-52"
                alt="res-logo"
                src={
                    CDN_URL + 
                    cloudinaryImageId
                }
            />
            <h3 className="text-xl font-bold">{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating} stars</h4>
            <h4>{sla.deliveryTime} minutes</h4>
            <h4>{costForTwo} </h4>

        </div>
    );
};

export default RestaurantCard;