import React, { useState, useEffect } from 'react'
import { Text, Button, TextInput } from 'react-native'
import { Background } from '../Main/Style';

const Login = ({ link }) => {
	const [nickname, setNickname] = useState<string>("");

	return (
	<>
		<Background source={require("../../Public/background.jpg")} >
			<Text>BL:ER</Text>
			<TextInput
				onChangeText={text => setNickname(text)}
				value={nickname} />
			<Button title="click" onPress={() => link(nickname)} />
		</Background>
	</>
	)
}

export default Login;