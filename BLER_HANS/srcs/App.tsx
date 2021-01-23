import React from 'react';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk'
import logger from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension'
import Reducer from './Test'

const store = createStore(Reducer,
	composeWithDevTools(applyMiddleware(ReduxThunk))
);
import Main from './Main'

const App = () => {
	return (
    	<Provider store={store}>
			<Main />
    	</Provider>
  	)
}

export default App;
