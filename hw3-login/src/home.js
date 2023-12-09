import React from "react"
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();

    const onButtonClick = () => {
        navigate("/")
    }
// Successful Login Message
    return <div className="container">
        <div className={"title"}>
            <h1>Welcome!</h1>
            <h5>You have successfully logged in</h5>
        </div>
        {/* Log Out Button */}
        <input
            className={"inputButton"}
            type="button"
            onClick={onButtonClick}
            value="Log Out" />

    </div>
}

export default Home