import Home from "./component/pages/Home";
import { Link } from "react-router-dom";
import Login from "./component/Google/Login";
import Logout from "./component/Google/Logout";
import { useEffect } from "react";
import { gapi } from "gapi-script";
import "./component/Styles/Styles.css";

const clientId =
  "917213100430-9jbaipelpc3o6jniiadc07ek863fl5g4.apps.googleusercontent.com";

function App() {
  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: clientId,
        scope: "",
      });
    }
    gapi.load("client:auth2", start);
  }, []);

  return (
    <div>
      <div className="leftMenu">
        <div className="addButton">
          <Link to="/add" className="Link">
            + Add To Do
          </Link>
        </div>
        <div className="warp">
          <div className="dunno">
          <div className="loginOutWarp">
            <Login />
          </div>
          <div>
            <Logout />
          </div>
          </div>
        </div>
      </div>
      <Home />
    </div>
  );
}

export default App;
