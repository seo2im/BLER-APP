import styled from 'styled-components/native'
import LinearGradient from 'react-native-linear-gradient'
import * as Basic from '../../../../Styles/Basic'

export const TierBoxView = styled(LinearGradient)`
	width	: 95%;
	height : 250px;
	margin : 10px auto;
	
	padding : 10px 20px 10px 20px;
	
	border-radius : 8px;
	border-width : 1px;
	border-color : #FFFFFF;
`

export const Title = styled.Text`
	color		: white;
	font-size	: 20px;
	text-align	: center;
`
export const TierTitle = styled.Text`
	color			: white;
	font-size		: 21px;
	margin-bottom	: 10px;
	text-align		: center;
`

export const NoData = styled(Title)`
	line-height : 100px;
`

export const Text = styled.Text`
	color			: white;
	font-size		: 15px;
	margin-bottom	: 5px;
	text-align		: center;
`

export const HView = styled(Basic.HView)`
	align-items : center;
	justify-content: space-between;
`
export const TierView = styled(Basic.HView)`
	
`

export const TextBox = styled.View`
	margin-left : 15px;
`

export const View = styled.View`
	
`