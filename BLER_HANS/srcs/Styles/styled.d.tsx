import 'styled-components'

declare module 'styled-components' {
	export interface DefaultTheme {
		/* Font setting */
		Font : {
			Eng 	: string,
			EngBold	: string,
			Kor		: string,
		},
		FontSize : {
			Small 	: string,
			Basic	: string,
			Logo	: string,
			Title	: string,
		},


		/* Color */
		Color : {
			white	: string,
			black	: string,

			GBTrend : {
				dark		: string,
				darkGrey	: string,
				grey		: string,
				lightBrown	: string,
				brown		: string,
			},
			
			BYTrend : {
				dark		: string,
				grey		: string,
				darkYellow	: string,
				yellow		: string,
				lightYellow	: string,
			},
			
			transparency	: string,
		}

		
	}
}