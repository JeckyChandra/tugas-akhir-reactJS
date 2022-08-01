import {
	BrowserRouter as Router,
	Routes,
	Route,
	Link
} from 'react-router-dom';
//File import sendiri
import App from '../../App';
import View from '../input-form/View';
import Input from '../input-form/Input';


const RouterComponent = () => {
	return (
		<Router>
			<Routes>
				<Route path='/' element={ <App /> } />
				<Route path='/input' element={ <Input /> } />
				<Route path='/view/:id' element={ <View/> } />
			</Routes>
		</Router>
	);
};

export default RouterComponent;