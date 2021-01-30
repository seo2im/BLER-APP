import React, { useState } from 'react'
import { Text, Button, TextInput } from 'react-native'

const Component = ({ link }) => {
	const [nickname, setNickname] = useState<string>("");

	return (
		<>
			<Text>BL:ER</Text>
			<TextInput
				onChangeText={text => setNickname(text)}
				value={nickname} />
			<Button title="click" onPress={() => link(nickname)} />
		</>
	)
}

export default Component;