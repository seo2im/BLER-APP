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
	const [value, setValue] = useState<number[][]>([]);
	const height = 150;

	const ranging = (max, min) => {
		const top = Math.ceil(max / 100) * 100
		const bottom = Math.floor(min / 100) * 100;

		const range = (top - bottom);
		const term = Math.floor(range / 10);
		const ranges = [];
		let before = bottom;
		for(let i = 0; i < 11; i++)
		{
			ranges.push(before);
			before = before + term;
		}
		setValue(ranges.map(e => [e, ((((e - bottom) / range * height) - height) * -1)]));
		setPoints(mmrs.map(e => (((e - bottom) / range * height) - height) * -1))
	}
	useEffect(() => {
		const max = Math.max(...mmrs);
		const min = Math.min(...mmrs);
		
		ranging(max, min);
	}, []);

	return (
		<GraphView>
		<Svg height={height + 20} width="100%">
			<Text x="0" y="0" fill="black">
				{value.map((v, i) => 
					<TSpan x="0" y={v[1] + 10} key={i}>{v[0]}</TSpan>)}
			</Text>
			{value.map((v, i) => 
				<Polyline key={i}
					points={`31,${v[1] + 10} 1000,${v[1] + 10}`}
					fill="none"
					stroke="green"
					strokeWidth="3"/>)}
			<Polyline 
				points={points.map((e, i) => `${i * 31 + 35},${e + 10}`).join(' ')}
				fill="none"
				stroke="black"
				strokeWidth="3"
				/>
		</Svg>
		</GraphView>
	)
}

export default Graph