import React from 'react'
import { Text, Button } from 'react-native'

const Component = ({ link }) => {
	
	return (
		<>
			<Text>BL:ER</Text>
			<Button title="click" onPress={() => link()} />
		</>
	)
}

export default Component;