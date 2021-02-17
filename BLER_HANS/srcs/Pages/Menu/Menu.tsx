import React, { useEffect, useRef } from 'react'
import { Animated, Modal } from 'react-native'
import { View, Text, Button } from './Style'

const Menu = ({ visible, setVisible }) => {
	const slideAnim = useRef(new Animated.Value(-300)).current;
	const slideIn = () => {
		Animated.timing(slideAnim, {
			toValue : 0,
			duration : 500,
			useNativeDriver : false,
		}).start();
	}

	const slideOut = () => {
		Animated.timing(slideAnim, {
			toValue : 0,
			duration : 500,
			useNativeDriver : false,
		}).start();
		setTimeout(() => setVisible(false));
	}

	useEffect(() => {
		slideIn();
	}, []);

	return (
		<Modal
			visible={visible}
			transparent={true}
			onRequestClose={() => setVisible(false)}>
			<View as={Animated.View} style={{
				transform : [{translateX : slideAnim}]
			}}>
			<Button	activeOpacity={1}
				onPress={() => {
					slideOut();
				}}>
				<Text>Close</Text>
			</Button>
			</View>
		</Modal>
	)
}

export default Menu;