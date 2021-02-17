import styled from 'styled-components/native'
import LinearGradient from 'react-native-linear-gradient'
/*
	TierBox Style
*/
export const TierBoxView = styled.View`
	width	: 25%;
	margin	: 0 auto;
	
	background-color	: white;
	border-radius		: 5px;
`

export const CharaterBoxView = styled(LinearGradient)`
	width	: 25%;
	margin	: 0 auto;

	background-color	: white;
	border-radius		: 5px;
`

export const Name = styled.Text`
	color		: black;
	font-size	: 20px;
	text-align	: center;
`

export const LinkerView = styled.TouchableOpacity`
	width	: 25%;
	height	: 50px;
	
	background-color	: white;
	margin				: 30px auto;
	padding-top			: 10px;
`