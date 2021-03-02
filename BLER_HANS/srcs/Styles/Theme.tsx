import styled, { DefaultTheme } from 'styled-components'

export const theme:DefaultTheme = {
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
			Grey		: "#81858C",
			lightBrown	: "#D99B77",
			Brown		: "#733F2D",
		},

		BYTrend : {
			dark		: "#0D0D0D",
			grey		: "#595959",
			darkYellow	: "#BF7E04",
			yellow		: "#D9A404",
			lightYellow	: "#F2B705"
		},
			
		transparency	: "rgba(0,0,0,0.7)",
	}
}