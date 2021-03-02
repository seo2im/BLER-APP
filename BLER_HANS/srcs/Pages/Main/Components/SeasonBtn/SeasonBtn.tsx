import React from 'react'
import {
	BtnView, Btn, BtnText, 
} from './Style'
type Prop = {
	season		: number
	setSeason	: (id : number) => void
}
const seasons = [
	{ id : 0, name : "일반"},
	{ id : 1, name : "시즌 1"}
]
const SeasonBtn = ({ season, setSeason } : Prop) => {
	return (
		<BtnView>
			{seasons.map((elem, idx) => (
				<Btn key={`${idx}_seasonBtn`}
					onPress={() => setSeason(elem.id)}
					select={elem.id === season}>
					<BtnText>{elem.name}</BtnText>
				</Btn>
			))}
		</BtnView>
	)
}

export default SeasonBtn;