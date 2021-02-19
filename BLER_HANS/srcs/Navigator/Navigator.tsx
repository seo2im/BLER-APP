import { Main, Login, MatchHistory, Stats, Menu, Header } from '../Pages'

import React, { useState, useRef } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator();

const PageStack = ({ setVisible }) => {
	return (
		<Stack.Navigator screenOptions={{
			header : ({}) => (<Header func={() => setVisible(true)}/>)}}>
			<Stack.Screen name="Login" component={Login}/>
			<Stack.Screen name="Main" component={Main}/>
			<Stack.Screen name="Stats" component={Stats}/>
			<Stack.Screen name="MatchHistory" component={MatchHistory}/>
		</Stack.Navigator>
	)
}

const Navigator = () => {
	const [ visible, setVisible ] = useState<boolean>(false);
	const navRef = useRef(null);

	return (
		<>
			<Menu visible={visible} setVisible={setVisible} navigation={navRef.current}/>
			<NavigationContainer ref={navRef}>
				<PageStack setVisible={setVisible}/>
			</NavigationContainer>
		</>
	)
}

export default Navigator;