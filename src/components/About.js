import { useEffect, useState } from "react";
import User from "./User";
import UserClass from "./UserClass";
import Shimer from "./Shimer";

const About = () => {

    const [userData, setUserData] = useState(null)
     useEffect(()=> {
        fetchGitHubUserApi();
    })

     const fetchGitHubUserApi = async () => {
        const data = await fetch(
            "https://api.github.com/users/Mayankkumarmk"
        )
        const json = await data.json();
        setUserData(json);
        
    }
    

    return userData == null
    ? <h1>Loading...</h1> 
    : (
        <div>

            <h1>About Us page</h1>
            {/* <User /> */}
            <User data = {userData} />
        </div>

    )
}

export default About;