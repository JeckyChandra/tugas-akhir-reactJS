import {
	BrowserRouter as Router,
	Routes,
	Route,
} from 'react-router-dom';
//File import sendiri
import App from '../../App';
import View from '../Form/View';
import Input from '../Form/Input';
import AddTodo from '../Form/Add';
import EditTodo from '../Form/Edit';


const RouterComponent = () => {
	return (
		<Router>
			<Routes>
				<Route path='/' element={ <App /> } />
				<Route path='/input' element={ <Input /> } />
				<Route path='/view/:id' element={ <View/> } />
				<Route path='/edit/:id' element={ <EditTodo/> } />
				<Route path='/add' element={ <AddTodo/> } />
			</Routes>
		</Router>
	);
};

export default RouterComponent;