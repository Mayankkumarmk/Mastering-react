import LOGO_URL from "./utils/constants"
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "./utils/useOnlineStatus";


const Header = () => {

    const [btnName, setBtnName] = useState("login");
    const onlineStatus = useOnlineStatus();
    return (
        <div className="flex justify-between  shadow-lg md:bg-pink-50 lg:bg-purple-50 ">

            <div className="logo-container">
                <img
                    className="h-28 p-2"
                    src={LOGO_URL}
                />
            </div>
            <div className="nav-items">
                <ul className="flex py-10">
                    <li className="px-2">
                        online status: {onlineStatus ? '✅' : "🔴"}
                    </li>
                    <li className="px-2" >
                        <Link to="/">Home</Link>

                    </li>
                    <li className="px-2" >
                        <Link to="/about">About Us</Link>

                    </li>
                    <li className="px-2">
                        <Link to="/contact">Contact Us</Link>
                    </li>
                    <li className="px-2">
                        <Link to="/grocery">Grocery</Link>
                    </li>
                    <li className="px-2">Cart</li>

                </ul>

            </div>
            <div className="flex py-10">
                <button
                    className="px-2"
                    onClick={() => {
                        btnName == "login"
                            ? setBtnName("logout")
                            : setBtnName("login");
                    }}
                >
                    {btnName}
                </button>
            </div>
        </div>

    )
}

export default Header;