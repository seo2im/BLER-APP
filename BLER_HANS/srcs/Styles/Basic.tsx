import styled from 'styled-components/native'
import LinearGradient from 'react-native-linear-gradient'

/* View */
export const HView = styled.View`
	flex-direction : row;
`
export const View = styled.View`
	flex	: 1;
`
export const Click = styled.TouchableOpacity`

`
export const Gradient = styled(LinearGradient)`

`
export const Background = styled.ImageBackground`
	width	: 100%;
	height	: 100%;
`
export const Scroll = styled.ScrollView`
	flex	: 1;
`
/* Text */
export const EngText = styled.Text`
	font-family	: ${({ theme }) => theme.Font.Eng};
	font-size	: ${({ theme }) => theme.FontSize.Basic};
	color		: ${({ theme }) => theme.Color.white};
`
export const EngLogo = styled(EngText)`
	font-size	: ${({ theme }) => theme.FontSize.Logo};
`
export const EngTitle = styled(EngText)`
	font-size	: ${({ theme }) => theme.FontSize.Title};
`
export const EngP = styled(EngText)`
	font-size	: ${({ theme }) => theme.FontSize.Small};
`
export const KorText = styled.Text`
	font-family	: ${({ theme }) => theme.Font.Kor};
	font-size	: ${({ theme }) => theme.FontSize.Basic};
	color		: ${({ theme }) => theme.Color.white};
`
export const KorLogo = styled(KorText)`
	font-size	: ${({ theme }) => theme.FontSize.Logo};
`
export const KorTitle = styled(KorText)`
	font-size	: ${({ theme }) => theme.FontSize.Title};
`
export const KorP = styled(KorText)`
	font-size	: ${({ theme }) => theme.FontSize.Small};
`
export const Image = styled.Image`
	resizeMode : cover;
`
