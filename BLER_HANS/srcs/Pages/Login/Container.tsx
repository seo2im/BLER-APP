import React, { useEffect } from 'react';
import Login from './Login';
import * as storage from '../../Storage/storage'


const Container = ({ navigation }) => {
	const link = (nickname) => {
		navigation.navigate("Main", { nickname });
	}

	const loadData = async () => {
		await storage.getData("nickname", (data) => {
			link(JSON.parse(data).nickname);
		});
	}

	useEffect(() => {
		loadData();
	}, []);

	return (
		<>
			<Login link={link}/>
		</>	
	)
}

export default Container;

