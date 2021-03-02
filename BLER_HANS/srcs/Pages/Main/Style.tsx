import styled from 'styled-components/native'
import * as Basic from '../../Styles/Basic'

export const View = styled(Basic.Scroll)`
	background	: ${({ theme }) => theme.Color.transparency};
`
export const Background = styled(Basic.Background)``
export const NickName = styled(Basic.KorLogo)`
	margin : 10px 10px 10px 10px;
`

