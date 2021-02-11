import React from 'react';
import Login from './Login';


const Container = ({ navigation }) => {
	const link = (nickname) => {
		navigation.navigate("Main", { nickname });
	}

	return (
		<>
			<Login link={link}/>
		</>	
	)
}

export default Container;

