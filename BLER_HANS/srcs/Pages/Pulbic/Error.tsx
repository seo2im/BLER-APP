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
`
const Error = () => {
	return (
		<View>
			<Text>데이터를 불러오는데 실패했어요!</Text>
		</View>
	)
}

export default Error;
