import React from 'react';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk'
import { ThemeProvider } from 'styled-components'
import { theme } from './Styles/Theme'
//import logger from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension'
import Reducer from './Modules'

const store = createStore(Reducer,
	composeWithDevTools(applyMiddleware(ReduxThunk))
);
import Navigator from './Navigator/Navigator'

const App = () => {
	return (
    	<Provider store={store}>
			<ThemeProvider theme={theme}>
				<Navigator />
			</ThemeProvider>
    	</Provider>
  	)
}

export default App;
