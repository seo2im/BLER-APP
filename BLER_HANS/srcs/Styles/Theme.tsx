import styled, { DefaultTheme } from 'styled-components'
import React from 'react'
import { Dimensions } from 'react-native'

export const theme:DefaultTheme = {
	device : {
		width : Dimensions.get('window').width,
		height : Dimensions.get('window').height,
	},

	Font : {
		Eng 	: 'Oswald-Regular',
		EngBold	: 'Oswald-SemiBold',
		Kor		: 'DoHyeon-Regular',
	},
	
	FontSize : {
		Small	: "15px",
		Basic	: "20px",
		Title	: "30px",
		Logo	: "50px",
	},
	Color : {
		white	: "#FFFFFF",
		black	: "#000000",

		GBTrend : {
			dark		: "#181D26",
			darkGrey	: "#4F5259",
			grey		: "#81858C",
			lightBrown	: "#D99B77",
			brown		: "#733F2D",
		},

		BYTrend : {
			dark		: "#0D0D0D",
			grey		: "#595959",
			darkYellow	: "#BF7E04",
			yellow		: "#D9A404",
			lightYellow	: "#F2B705"
		},

		RankColor : {
			win		: "#F2B705",
			top2	: "#B23855",
			top3	: "#28A822",
			normal	: "#FFFFFF",
		},
			
		transparency	: "rgba(0,0,0,0.7)",
	}
}