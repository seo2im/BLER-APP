import React from 'react'
import styled from 'styled-components/native'

const View = styled.View`
	flex : 1;
`
const Background = styled.ImageBackground`
	width : 100%;
	height : 100%;
`
const Text = styled.Text`
	font-size : 40px;
	margin-top : 45%;
	text-align : center;
	color : white;
	font-weight : bold;
`
const Loading = () => {
	return (
		<View>
			<Background source={require("../../Public/background.jpg")}>
				<Text>Loading ...</Text>
			</Background>
		</View>
	)
}

export default Loading;
