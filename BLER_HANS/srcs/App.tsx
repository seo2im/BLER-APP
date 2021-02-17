import React from 'react';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk'
import logger from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension'
import Reducer from './Modules'

const store = createStore(Reducer,
	composeWithDevTools(applyMiddleware(ReduxThunk, logger))
);
import Navigator from './Navigator/Navigator'

const App = () => {
	return (
    	<Provider store={store}>
			<Navigator />
    	</Provider>
  	)
}

export default App;
