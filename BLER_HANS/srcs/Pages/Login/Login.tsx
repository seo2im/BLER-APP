import React, { useState } from 'react'
import { Title, Text, Button, Id, Background, LoginBox } from './Style';

const Login = ({ link }) => {
	const [nickname, setNickname] = useState<string>("");

	return (
	<>
		<Background source={require("../../Public/background.jpg")} >
			<LoginBox>
				<Title>BL:ER</Title>
				<Id
				onChangeText={text => setNickname(text)}
				value={nickname} />
				<Button title="click" onPress={() => link(nickname)}>
					<Text>Search</Text>
				</Button>
			</LoginBox>
			
		</Background>
	</>
	)
}

export default Login;