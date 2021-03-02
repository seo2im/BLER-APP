import React, { useEffect, useState } from 'react'
import Svg, { Polyline, Text, TSpan, Circle } from 'react-native-svg'
import {
	GraphView, GraphText
} from './Style'
type Prop = {
	mmrs : number[];
}
const Graph = ({ mmrs } : Prop) => {
	const [points, setPoints] = useState<number[]>([]);
	const [value, setValue] = useState<number[][]>([]);
	const height = 150;

	const ranging = (max, min) => {
		const top = Math.ceil(max / 10) * 10
		const bottom = Math.floor(min / 10) * 10;

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
		<GraphText>MMR Graph</GraphText>
		<Svg height={height + 20} width="100%">
			<Text x="0" y="0" fill="white">
				{value.map((v, i) => 
					<TSpan x="0" y={v[1] + 10} key={i}>{v[0]}</TSpan>)}
			</Text>
			{value.map((v, i) => 
				<Polyline key={i}
					points={`31,${v[1] + 10} 1000,${v[1] + 10}`}
					fill="none"
					stroke="white"
					strokeWidth="1"/>)}
			{points.map((e, i) => <Circle key={i} cx={i * 31 + 35} cy={e + 10} r="3" fill="#F2CB05"/>)}
			<Polyline 
				points={points.map((e, i) => `${i * 31 + 35},${e + 10}`).join(' ')}
				fill="none"
				stroke="#F2CB05"
				strokeWidth="1.5"
				/>
		</Svg>
		</GraphView>
	)
}

export default Graph