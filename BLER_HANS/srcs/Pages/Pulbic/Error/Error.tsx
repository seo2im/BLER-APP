import React from 'react'
import srcs from '../../../Public'
import {
	Background,
	Box,
	Text
} from './Style'

const Error = () => {
	return (
		<Background source={srcs.background}>
			<Box>
				<Text>데이터를 불러오는데 실패했어요!</Text>
			</Box>
		</Background>
	)
}

export default Error;
