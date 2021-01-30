import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { tState } from '../../Modules';
import { getUserNum } from '../../Modules/userNum/thunks';
import Component from './Component';


const Container = ({ navigation }) => {
	const link = (nickname) => {
		navigation.navigate("Main", { nickname });
	}

	return (
		<>
			<Component link={link}/>
		</>	
	)
}

export default Container;

