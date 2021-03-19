import styled from 'styled-components/native'
import * as Basic from '../../../Styles/Basic'

export const Circle = styled<{width : number, height : number}>(Basic.Image)`
    width	: ${props => props.width}px;
    height	: ${props => props.height}px;
    
	margin	: auto 0;
	resizeMode : cover;

	border-radius	: ${props => props.width / 2}px;
	borderWidth: 1px;
	borderColor: white;
`
