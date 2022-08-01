import Home from './component/pages/Home';
import Input from './component/Form/Input';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div>
      <Link to="/add">Add To Do</Link>
      <Home/>
    </div>
  );
}

export default App;
