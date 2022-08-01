import {GoogleLogout} from "react-google-login";

const clientId = "917213100430-9jbaipelpc3o6jniiadc07ek863fl5g4.apps.googleusercontent.com";

function Logout() {

    const onSucces = () =>{
        alert("Log out successfull!")
        localStorage.setItem('Username', "");
        localStorage.setItem('Email', "");
    }

    return (
        <div id="signInButton">
            <GoogleLogout
                clientId={clientId}
                buttonText="Log Out"
                onLogoutSuccess={onSucces}
            />
        </div>
    )
}

export default Logout;