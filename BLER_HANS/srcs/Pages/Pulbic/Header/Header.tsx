import React from 'react'
import { View, Text, Menu } from './Style'

const Header = ({ func }) => {
	return (
		<View>
			<Menu onPress={() => func()}>
				<Text>=</Text>
			</Menu>
			<Text>Header</Text>
		</View>
	)
}

export default Header;