import styled from 'styled-components/native'
import * as Basic from '../../Styles/Basic'

const Background = styled.ImageBackground`
	width : 100%;
	height : 100%;
`

const View = styled.View`
	flex : 1;
	background-color : rgba(0, 0, 0, 0.7);
`

const HView = styled(Basic.HView)`

`

const List = styled.View`

`

const Title = styled.Text`
	margin : 10px 10px 10px 10px;
	color : white;
	font-size : 20px;
`

const Button = styled.TouchableOpacity`
	width	: 50px;
	height	: 20px;
	margin-right : 10px;
`
const Text = styled.Text`
	color : white;
`

export { Background, View, Title, List, HView, Button, Text };