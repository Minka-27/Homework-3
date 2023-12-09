import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// Checking if logged in via useState
const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loggedIn, setLoggedIn] = useState(false)
    const navigate = useNavigate();

    // Hard coded username and password. If they don't match the user input, the user is redirected to badLogin page
    const handleLogin = (event) => {
        if (username === 'minka27' && password === '134340') {
            setLoggedIn(true);
            console.log(`Logged in: ${loggedIn}`)
            navigate('/home');
        } else {
            setLoggedIn(false);
            navigate('/bad-login')
            console.log(`Logged in: ${loggedIn}`)
        }
    };

    return <div className={"container"}>
        <div className={"title"}>
            <h1>Login</h1>
        </div>

        {/* Input fields for username and password */}
        <div className="input">
            <form onSubmit={handleLogin}>
                <label htmlFor='usernameInput'>Username:</label>
                <input className="inputBox" type="text"
                    onChange={(e) => setUsername(e.currentTarget.value)} />

                <label htmlFor='passwordInput'>Password:</label>
                <input className="inputBox" type="text"
                    onChange={(e) => setPassword(e.currentTarget.value)} />

                {/* Submit button */}
                <button type="submit" className={"inputButton"}>Log In</button>
            </form>
        </div>
    </div>

    // I decided to use a form and onSubmit event instead of a button and onClick event. Below is the old button/onclick

    // return <div className={"container"}>
    //     <div className={"title"}>
    //         <h1>Login</h1>
    //     </div>

    //     <div className={"input"}>
    //         <input
    //             value={username}
    //             placeholder="Enter your username here"
    //             className={"inputBox"}
    //             onChange={(e) => setUsername(e.currentTarget.value)} />
    //     </div>

    //     <div className={"input"}>
    //         <input
    //             value={password}
    //             placeholder="Enter your password here"
    //             className={"inputBox"}
    //             onChange={(e) => setPassword(e.currentTarget.value)} />
    //     </div>

    //     <div className={"input"}>
    //         <input
    //             type="button"
    //             onClick={handleLogin}
    //             value={"Log in"}
    //             className={"inputButton"} />
    //     </div>
    // </div>


}

export default Login