import React from 'react';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import Reducer from './Modules'
const store = createStore(Reducer);

import {
  View,
  Text,
} from 'react-native';

const App = () => {
  return (
    <Provider store={store}>
      <View>
        <Text>BL:ER HANS</Text>
      </View>
    </Provider>
  )
}

export default App;
