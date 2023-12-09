import React from "react"
import { useNavigate } from "react-router-dom";

const BadLogin = () => {
    const navigate = useNavigate();
    const onButtonClick = () => {
        navigate("/")
    }
    // Unsuccessful login message and button to return to  login page
    return <div className="container">
        <div className={"title"}>
            <div>Login Unsuccessful!</div>
        </div>
        <div className={"buttonContainer"}>
            <input
                className={"inputButton"}
                type="button"
                onClick={onButtonClick}
                value="Back to Login" />
        </div>


    </div>
}

export default BadLogin