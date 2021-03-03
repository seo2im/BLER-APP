import React, { useEffect, useState } from 'react'
import srcs from '../../../Public'
import {
	Background,
	Box,
	Text
} from './Style'

const Loading = () => {
	const [ing, setIng] = useState<string[]>([]);
	
	/*
		have to change because clean up function
	useEffect(() => {
		const load = () => {
			if (ing.length < 3)
				setIng([...ing, "."]);
			else
				setIng([])
		}

		setTimeout(load, 1000);
	}, [ing])
	*/
	
	return (
		<Background source={srcs.background}>
			<Box>
				<Text>Loading {ing}</Text>
			</Box>
		</Background>
	)
}

export default Loading;
