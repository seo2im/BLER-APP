import React from 'react';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk'
//import logger from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension'
import Reducer from './Modules'

const store = createStore(Reducer,
	composeWithDevTools(applyMiddleware(ReduxThunk))
);
import Login from './Pages/Login/Login'

const App = () => {
	return (
    	<Provider store={store}>
			<Login />
    	</Provider>
  	)
}

export default App;
