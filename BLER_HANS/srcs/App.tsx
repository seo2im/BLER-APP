import React, { useState, useEffect } from 'react';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import Reducer from './Modules'
const store = createStore(Reducer);

import key from '../secret'

import axios from 'axios';

import {
  View,
  Text,
} from 'react-native';

const App = () => {
  const [test, setTest] = useState([]);

  useEffect(() => {
    axios({
      url : 'https://open-api.bser.io/v1/data/hash',
      method : 'get',
      headers : {
        'accept' : 'application/json',
        'x-api-key' : key
      }
    }).then(res => console.log(res));
  }, []);

  return (
    <Provider store={store}>
      <View>
        <Text>BL:ER HANS</Text>
      </View>
    </Provider>
  )
}

export default App;
