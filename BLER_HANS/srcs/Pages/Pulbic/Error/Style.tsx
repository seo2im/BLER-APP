import styled from 'styled-components/native'
import * as Basic from '../../../Styles/Basic'

export const Background = styled(Basic.Background)``
export const Box = styled(Basic.View)`
	background		: ${({ theme }) => theme.Color.trensparency};
	borderRadius	: 10px;
	
	margin	: auto;
`
export const Text = styled(Basic.KorLogo)``
