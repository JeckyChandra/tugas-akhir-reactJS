import {
	BrowserRouter as Router,
	Routes,
	Route,
	Link
} from 'react-router-dom';
//File import sendiri
import App from '../../App';
import View from '../Form/View';
import Input from '../Form/Input';
import AddTodo from '../Form/Add';


const RouterComponent = () => {
	return (
		<Router>
			<Routes>
				<Route path='/' element={ <App /> } />
				<Route path='/input' element={ <Input /> } />
				<Route path='/view/:id' element={ <View/> } />
				<Route path='/add' element={ <AddTodo/> } />
			</Routes>
		</Router>
	);
};

export default RouterComponent;