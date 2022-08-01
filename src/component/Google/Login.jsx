import { useEffect, useState } from "react";
import {GoogleLogin} from "react-google-login";

const clientId = "917213100430-9jbaipelpc3o6jniiadc07ek863fl5g4.apps.googleusercontent.com";

function Login() {

    const onSucces = (res) =>{
        localStorage.setItem('Username', res.profileObj.name);
        localStorage.setItem('Email', res.profileObj.email);
    }
    const onFailure = (res) =>{
        console.log("LOGIN Failed! res: ", res.profileObj);
    }

    return (
        <div id="signInButton">
            <GoogleLogin
                clientId={clientId}
                buttonText="Login"
                onSuccess={onSucces}
                onFailure={onFailure}
                cookiePolicy={'single_host_origin'}
                isSignedIn={true}
            />
        </div>
    )
}

export default Login;