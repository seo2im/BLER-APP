import { Main, Login, MatchHistory, Stats } from '../Pages'

import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator();

const PageStack = () => {
	return (
		<Stack.Navigator>
			<Stack.Screen name="Login" component={Login}/>
			<Stack.Screen name="Main" component={Main}/>
			<Stack.Screen name="Stats" component={Stats}/>
			<Stack.Screen name="MatchHistory" component={MatchHistory}/>
		</Stack.Navigator>
	)
}

const Navigator = () => {
	/* For Menu */
	//const navRef = useRef(null);

	return (
		<>
			<NavigationContainer>
				<PageStack />
			</NavigationContainer>
		</>
	)
}

export default Navigator;