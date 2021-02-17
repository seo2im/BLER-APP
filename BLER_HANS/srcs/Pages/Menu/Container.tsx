import React from 'react'
import Menu from './Menu'

const Container = ({visible, setVisible, navigation}) => {
	return (
		<Menu visible={visible} setVisible={setVisible} />
	)
}

export default Container;