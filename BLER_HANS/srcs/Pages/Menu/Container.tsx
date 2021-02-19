import React from 'react'
import Menu from './Menu'
import { initData } from '../../Storage/storage'

const Container = ({visible, setVisible, navigation}) => {
	const logout = () => {
		initData();
		navigation.navigate("Login");
	}


	return (
		<Menu visible={visible} setVisible={setVisible} logout={logout}/>
	)
}

export default Container;