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

export { Background, View, Title, List, HView };