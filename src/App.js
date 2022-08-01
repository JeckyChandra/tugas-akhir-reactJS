import Home from './component/pages/Home';
import Input from './component/input-form/Input';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div>
      <Link to="/input">Input</Link>
      <Home/>
    </div>
  );
}

export default App;
