import React, { useEffect, useState } from 'react'
import Svg, { Polyline, Text, TSpan } from 'react-native-svg'
import {
	GraphView
} from './Style'
type Prop = {
	mmrs : number[];
}
const Graph = ({ mmrs } : Prop) => {
	const [points, setPoints] = useState<number[]>([]);
	const height = 150;

	useEffect(() => {
		const max = Math.max(...mmrs);
		const min = Math.min(...mmrs);
		const range = max - min;
		setPoints(mmrs.map(e => ((((e - min) / range) * height) - height) * -1));
	}, []);

	return (
		<GraphView>
		<Svg height={height + 20} width="100%">
			<Text x="0" y="0" fill="white">
				{mmrs.map((mmr, i) => 
					<TSpan x="0" y={points[i] + 10} key={i}>{mmr}</TSpan>)}
			</Text>
			<Polyline 
				points={points.map((e, i) => `${i * 31 + 35},${e}`).join(' ')}
				fill="none"
				stroke="white"
				strokeWidth="3"
				/>
		</Svg>
		</GraphView>
	)
}

export default Graph