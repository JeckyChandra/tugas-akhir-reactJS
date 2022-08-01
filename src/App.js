import Home from './component/pages/Home';
import { Link } from 'react-router-dom';
import Login from './component/Google/Login';
import Logout from './component/Google/Logout';
import { useEffect } from 'react';
import { gapi } from 'gapi-script';

const clientId = "917213100430-9jbaipelpc3o6jniiadc07ek863fl5g4.apps.googleusercontent.com";

function App() {

  useEffect(()=>{
    function start(){
      gapi.client.init({
        clientId:clientId,
        scope:""
      })
    };
    gapi.load('client:auth2', start);
  }, []);

  return (
    <div>
      <Link to="/add">Add To Do</Link>
      <div style={{float:"right"}}><Login/>
      <Logout/></div>
      <Home/>
    </div>
  );
}

export default App;
