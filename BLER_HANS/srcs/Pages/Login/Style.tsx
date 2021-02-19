import styled from 'styled-components/native'

export const View = styled.View`
	flex : 1;
`
export const Background = styled.ImageBackground`
	width : 100%;
	height : 100%;
`

export const LoginBox = styled.View`
	width : 100%;
	
	margin : auto;
`

export const Id = styled.TextInput`
	width : 90%;
	margin : 10px auto;
	
	background-color : white;
	border-width : 2px;
	border-color : grey;
	border-radius : 25px;

	color : grey;
	padding : 10px 20px;
`

export const Button = styled.TouchableOpacity`
	width : 30%;
	height : 40px;

	margin : 0 auto;
	background-color : grey;
	border-radius : 20px;
`

export const Text = styled.Text`
	text-align : center;
	color : white;
	font-size : 20px;
	margin : auto;
`
export const Title = styled(Text)`
	font-size : 50px;
`

